import { useState } from "react";
import Calc from "./Calc";

export default function ReactCounter() {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount(count + 1);
  };

  const sub = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div>
        <h1>{count}</h1>
        <Calc add={add} sub={sub} />
      </div>
    </>
  );
}
