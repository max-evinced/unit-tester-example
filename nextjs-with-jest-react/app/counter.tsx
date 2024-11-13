"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div role="count">{count}</div>
      <button type="button" onClick={() => setCount(count + 1)}>
      
      </button>
      <a role="link">An Anchor Tag with no HREF</a>
    </>
  );
}
