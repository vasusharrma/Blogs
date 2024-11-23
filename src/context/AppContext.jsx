import { useState, createContext, useEffect } from "react";
import { blogUrl } from "../links";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [dataBlog, setDataBlog] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(null);

  const fetchBlog = async (page = 1) => {
    setLoading(true);

    try {
      const dataBlog = await fetch(`${blogUrl}?&page=${page}`);
      const result = await dataBlog.json();
      console.log("blog data is ", result);
      setPage(result.page);
      setDataBlog(result.posts);
      setTotalPage(result.totalPages);
    } catch (e) {
      console.log("We go error while fetching data");
      setPage(1);
      setDataBlog([]);
      setTotalPage(null);
    }
    setLoading(false);
  };

  function handlePageChange(page) {
    setPage(page);
    fetchBlog(page);
  };

  const value = {
    loading,
    setLoading,
    dataBlog,
    setDataBlog,
    page,
    setPage,
    totalPage,
    setTotalPage,
    fetchBlog, 
    handlePageChange
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
