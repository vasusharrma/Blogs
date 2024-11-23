import React, { useContext } from "react";
import { AppContext } from "./../context/AppContext";
import ContentCard from "./ContentCard";
import { DotLoader } from "react-spinners";

const Content = () => {
  const { dataBlog, loading } = useContext(AppContext);
  console.log(dataBlog);

  return (
    <div className="max-w-2xl w-[96%] my-[60px]  mx-auto">
      {loading ? (
        <div className="flex flex-col justify-center items-center h-screen">
          <DotLoader />
        </div>
      ) : dataBlog.length === 0 ? (
        <h1>No post found</h1>
      ) : (
        dataBlog.map((dataB) => (
          <ContentCard key={dataB.id} dataB={dataB}/>
        ))
      )}
    </div>
  );
};

export default Content;
