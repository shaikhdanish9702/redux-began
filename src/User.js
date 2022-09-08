import { Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modifyDepthaction } from "./redux/deptAction";

const User = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(data.dept);
  return (
    <>
      <h1>dept:{data.dept.deptName}</h1>
      <button onClick={() => dispatch(modifyDepthaction())}>Change dept</button>
    </>
  );
};
export default User;
