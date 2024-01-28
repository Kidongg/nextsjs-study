const Home = async () => {
  const data = await fetch("http://localhost:3000/api");
  console.log("data: ", data);
  const json = await data.json();
  console.log("json: ", json);

  return <h1>{JSON.stringify(json)}</h1>;
};

export default Home;
