import { http } from "./services"

export const getProducts = async (searchParams) => {
    const res = await http.get(`/products${generateQueryParams(searchParams)}`);
    return res.data;
  };
  
export const getProduct=async(id)=>{
    const res= await http.get (`/products/${id}`)
    return res.data
}

const generateQueryParams = (searchParams) => {
    const name = searchParams?.get("name");
    const available = searchParams?.get("available");
    const url = new URL("http://localhost:3000/products");
    if (name) {
      url.searchParams.set('name_like', name);
    }
    if (available) {
      url.searchParams.set('available', available);
    }
    return url.search;
  };