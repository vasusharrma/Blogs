import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import HandleBtn from "./HandleBtn";

const Footer = () => {
  const { page, totalPage } = useContext(AppContext);

  return (
    <div className="w-full fixed bottom-0 py-2 border border-t-1 bg-white">
      <div className="mx-auto flex  items-center justify-between max-w-2xl w-[96%]">
        <HandleBtn />
        <p className="text-sm font-bold">
          Page <span>{page}</span> of <span>{totalPage}</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
