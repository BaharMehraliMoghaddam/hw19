import { useLoaderData, useSearchParams } from "react-router-dom";
import { getProducts } from "../api/api";
import ProdactCart from "../components/BootCamptCart";
import React, { useState } from 'react';
import Pagination from "../common/Pagination";

export async function loader({ request }) {
  const url = new URL(request.url);
  const products = await getProducts(url.searchParams);
  return { products };
}

export default function ProductsPage() {
  const { products } = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(products.length / itemsPerPage);
  
  const paginatedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="mt-5 p-4">
      <div className="flex gap-3 items-center">
        <input
          placeholder="Search here..!"
          onChange={(e) =>
            setSearchParams((prev) => {
              const params = new URLSearchParams(prev);
              params.set('name', e.target.value);
              return params;
            })
          }
          type="text"
          className="border border-gray-700 py-2 pl-2 rounded-md"
        />

        <input
          type="checkbox"
          onClick={(e) =>
            setSearchParams((prev) => {
              const params = new URLSearchParams(prev);
              if (e.target.checked) {
                params.set("available", true);
              } else {
                params.delete("available");
              }
              return params;
            })
          }
        />
      </div>
      <div className="grid grid-cols-4 gap-4 mt-5">
        {paginatedProducts.map((p) => (
          <ProdactCart key={p.id} product={p} />
        ))}
      </div>
      <Pagination
        totalItems={products.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}