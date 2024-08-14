import Card from "./Card";

export default function ProdactCart({product}) {
  return (
    <>
        <div className="bg-gray-200 p-2 border border-gray-700 rounded-md drop-shadow-lg">    
            <img onClick={<Card bootCamp={product}/>} src={product.image} alt={`${product.name}'s image`} />
            <p>{product.name}</p>
            <p className="overflow-hidden text-ellipsis whitespace-nowrap">{product.discription}</p>
            <p>{product.price}</p>
        </div>
    </>
  )
}
