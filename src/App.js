import { axiosSearch } from "./Config/Config";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { qouteGenaratorReducer } from "./store/Slice/QouteApi";
import Background from "./Config/svg.png";
import upperQoutes from "./Config/upper.svg";
import DownQoutes from "./Config/Down.svg";
function App() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(qouteGenaratorReducer());
  }, []);
  const handelQouteData = () => {
    dispatch(qouteGenaratorReducer());
  };
  const { qouteData, qouteLoading } = useSelector(
    (state) => state.qouteDataInfo
  );
  if (qouteData.length > 0) {
    data.push(qouteData);
    console.log(qouteData);
  }
  if(data.length >= 4) 
  {
 
  }

  return (
    <div className=" font-[poppins] flex items-center justify-center relative h-screen">
      <img
        className="bg-cover w-screen h-[300px] absolute top-0"
        src={Background}
      ></img>
      <div className=" z-10 flex items-center justify-center flex-col">
        <div>
          {
            <div className="flex justify-center items-center flex-wrap gap-2">
              {data?.length > 0 &&
                data.map((obj) => (
                  <div className=" text-center flex justify-center  border-4 border-double border-black bg-gradient-to-r from-violet-200 to-fuchsia-200 relative w-[600px] h-[200px]">
                    <img className="w-10 h-10" src={upperQoutes}></img>
                    <div className=" text-center text-lg flex justify-center items-center flex-col m-auto w-[536px] h-[136px]">
                      <p>{obj.content}</p>

                      <h3 className="font-bold">-{obj.author}</h3>
                    </div>
                    <img
                      className="absolute bottom-0 w-10 h-10 right-0"
                      src={DownQoutes}
                    ></img>
                  </div>
                ))}
            </div>
          }
        </div>
      </div>
      <button
        onClick={handelQouteData}
        className="text-white text-lg absolute bottom-10 shadow-lg shadow-fuchsia-400 h-14 flex items-center justify-center  w-[200px]  bg-gradient-to-r from-violet-500 to-fuchsia-500"
      >
        GENERATE QOUTES
      </button>
    </div>
  );
}

export default App;
