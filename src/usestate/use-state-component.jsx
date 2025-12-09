import React, { useState } from "react";
import { UseStateStyle } from "./use-state-style.js";
const UseStateComponent = () => {
  //   let count = 0;
const [sum, setSum] = useState(0);
const fun1 = () => {
    setSum(sum + 1);
};
const fun2 = () => {
    if (sum <= 0) {
        return;
    }
    setSum(sum - 1);
};
return (
    <UseStateStyle>
        <h1>Counter</h1>
        <h2>{sum}</h2>
        <button onClick={() => fun1()}>Increase</button>
        <button onClick={() => fun2()}>Decrease</button>
    </UseStateStyle>
);
};
export default UseStateComponent;