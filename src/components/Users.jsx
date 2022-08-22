import React, { useState, useEffect } from "react";

function Users() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://assessment.api.vweb.app/users`)
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
    <div className="mt-24 ml-20 pl-16 pb-10 h-fit">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <p className="text-5xl font-semibold text-gray-900 dark:text-white m-5 sm:ml-0 lg:ml-60 text-center">
          Users
        </p>
        <ul className="space-y-5 lg:mt-32">
          {data &&
            data.map(({ user_id, name }) => (
              <li
                className="list-decimal hover:list-disc hover:cursor-pointer ml-3"
                key={user_id}
              >
                <span className="flex-1 ml-3 whitespace-nowrap font-bold">
                  {name}
                </span>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Users;
