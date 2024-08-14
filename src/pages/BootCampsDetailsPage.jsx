import { useLoaderData } from "react-router-dom";
import { getProduct } from "../api/api";

export async function loader({request}) {   
    const product = await getProduct(params.id);     
    return { product }; 
}
export default function BootCampsDetailsPage() {
    const{
        product: {name, image, price}
    }=useLoaderData()
  return (
    <div className="flex flex-col items-center">
        <h1>{name}</h1>
        <img src={image} alt={`${name}'s image`}  className="w-[640px]"/>
        <p>${price}</p>
    </div>
  )
}
