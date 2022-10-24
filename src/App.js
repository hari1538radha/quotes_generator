import { axiosSearch } from "./Config/Config";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { qouteGenaratorReducer } from "./store/Slice/QouteApi";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(qouteGenaratorReducer());
  }, []);

  const { qouteData, qouteLoading } = useSelector(
    (state) => state.qouteDataInfo
  );
  console.log(qouteData);
  return (
    <div className="">
      <button>generate qoutes</button>
    </div>
  );
}

export default App;
