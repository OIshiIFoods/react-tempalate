import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterSliceActions, RootState } from "../redux";
import { Button } from "antd";

function PageA() {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.value);

  return (
    <div>
      <h1>Page 1</h1>
      <div className="text-red-500">{count}</div>
      <Button onClick={() => dispatch(counterSliceActions.incremented())}>
        添加
      </Button>
      <Button onClick={() => dispatch(counterSliceActions.decremented())}>
        减少
      </Button>
    </div>
  );
}

export default PageA;
