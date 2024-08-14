import { Link, useLoaderData, useParams } from "react-router-dom";
import { getProduct } from "../api/api";

export async function loader({ params }) {
  const { id } = params;
  const product = await getProduct(id);
  return { product };
}

export default function BootCampsDetailsPage() {
  const { product } = useLoaderData();
  
  return (
    <div className="flex flex-col items-center mt-[100px] text-center gap-3">
      <h1>{product.name}</h1>
      <img src={product.image} alt={`${product.name}'s image`} className="w-[440px]" />
      <p>${product.price}</p>
      <Link to={`/boot-camps`} className="border border-gray-600 text-gray-600 rounded-md px-2 hover:bg-gray-200">
          Back to boot camps page
      </Link>
    </div>
  );
}