import Header from "./components/Header"
import Content from "./components/Content";
import Footer from "./components/Footer";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";

function App() {

  const {fetchBlog} = useContext(AppContext);

  useEffect(()=>{
    fetchBlog(1);
  }, []);

  return (
    <div className="">
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
