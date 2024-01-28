"use client";

import { useState } from "react";
import AnotherButton from "./another-button";

const Button = ({ children }: any) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* 클라이언트 컴포넌트 */}
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
      {/* 클라이언트 컴포넌트 */}
      <AnotherButton />
      {/* 서버 컴포넌트 */}
      {children}
    </div>
  );
};

export default Button;
