import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { RingLoader } from "react-spinners";
import routes from "./route/routes";

function App() {
  const [loading,setLoading] = useState(false);
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },1000)
  },[])
  return (
    <div>
      {
        loading ? (
          <div className="flex justify-center items-center text-center w-[100%] h-[100vh] ">
            <RingLoader color="#36d7b7" size={100} />

          </div>
        ) : (
          <RouterProvider router={routes}/>
        )
      }
        
    </div>
  );
}

export default App;
