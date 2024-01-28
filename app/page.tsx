"use client";

import { send } from "./actions";

const Home = () => {
  // const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   console.log("Submitted!");
  // };

  return (
    <form action={send}>
      <button>Send it</button>
    </form>
  );
};

export default Home;
