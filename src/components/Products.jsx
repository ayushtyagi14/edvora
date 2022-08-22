import React, { useState, useEffect } from "react";

function Products() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://assessment.api.vweb.app/products`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => {
        setData(actualData);
      });
  }, []);

  return (
    <div className="mt-24 ml-20 lg:pl-10 pl-32 pb-10 h-fit">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <p className="text-5xl font-semibold text-gray-900 dark:text-white m-5 sm:ml-0 lg:ml-60 text-center">
          Products
        </p>
        <ul className="space-y-5 lg:mt-32">
          {data &&
            data.map(({ product_id, name, stock, selling_price }) => (
              <li
                className="list-decimal hover:list-disc hover:cursor-pointer ml-3"
                key={product_id}
              >
                <span className="flex-1 ml-3 whitespace-nowrap font-bold">
                  {name}
                </span>
                <span className="flex-1 ml-3 whitespace-nowrap">
                  {" "}
                  ( {stock} )
                </span>
                <span className="flex-1 ml-3 whitespace-nowrap dark:text-gray-500 font-serif font-semibold">
                  {" "}
                  ₹{selling_price}
                </span>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Products;
