import { useLoaderData, useSearchParams } from "react-router-dom"
import { getProducts } from "../api/api"
import ProdactCart from "../components/BootCamptCart"

export async function loader({request}) {
    //console.log(request);  
    const url = new URL(request.url);   
    const products = await getProducts(
      url.searchParams.get('title'),
      url.searchParams.get('available')
    );   
  
    return { products }; 
}
export default function ProductsPage() {
  const {products}= useLoaderData()
  const [searchParams, setSearchParams] = useSearchParams()
  return (
    <div className="mt-5 p-4">
       <div className=" flex gap-3 items-center">
        <input 
        placeholder="Search here..!" 
        onChange={(e)=>setSearchParams((prev)=>{
          prev.set('title', e.target.value)
          return prev;
        })} 
        type="text" 
        className="border border-gray-700 py-2 pl-2 rounded-md"
        />
        <input 
        type="checkbox"
        onClick={(e)=>setSearchParams((prev)=>{
          prev.set('available', e.target.checked)
          return prev
        })}
        />
      </div>
    <div className="grid grid-cols-4 gap-4 mt-5">{products?.map((p)=>(
        <ProdactCart key={p.id} product={p}/>
    ))}
    </div>
    </div>
  )
}
