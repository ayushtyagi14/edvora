import React, { useState, useEffect } from "react";
import moment from "moment";

function Products() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://assessment.api.vweb.app/orders`)
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
          Orders
        </p>
        <ul className="space-y-5 lg:mt-32">
          {data &&
            data.map(
              ({ order_id, product_id, quantity, user_id, order_date }) => (
                <li
                  className="list-decimal hover:list-disc hover:cursor-pointer ml-3"
                  key={order_id}
                >
                  <span className="flex-1 ml-3 whitespace-nowrap font-semibold">
                    Product ID: {product_id}
                  </span>
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    ( {quantity} )
                  </span>
                  <span className="flex-1 ml-3 whitespace-nowrap dark:text-gray-500">
                    User ID: {user_id}
                  </span>
                  <span className="flex-1 ml-3 whitespace-nowrap dark:text-gray-500 font-semibold">
                    {moment({ order_date }).format("MM/DD/YYYY")}
                  </span>
                </li>
              )
            )}
        </ul>
      </div>
    </div>
  );
}

export default Products;
