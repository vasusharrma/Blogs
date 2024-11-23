import React, { useContext } from "react";
import { AppContext } from "./../context/AppContext";

const HandleBtn = () => {
  const { page, handlePageChange, totalPage } = useContext(AppContext);

  return (
    <div className="flex gap-2">
        {page !== 1 ? (
          <button className="border border-gray-400 px-3 py-1 text-sm rounded-md transition-all duration-300 hover:bg-gray-100"
            onClick={() => {
              handlePageChange(page - 1);
            }}
          >
            prev
          </button>
        ) : (
          <p></p>
        )}

        {page !== totalPage ? (
          <button className="border border-gray-400 px-3 py-1 text-sm rounded-md transition-all duration-300 hover:bg-gray-100"
            onClick={() => {
              handlePageChange(page + 1);
            }}
          >
            next
          </button>
        ) : (
          <p></p>
        )}
    </div>
  );
};

export default HandleBtn;
