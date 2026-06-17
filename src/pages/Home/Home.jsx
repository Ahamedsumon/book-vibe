import { useLoaderData } from "react-router";
import Hero from "../../components/Hero/Hero";
import Books from "../Books/Books";

const Home = () => {
  const booksData = useLoaderData();

  return (
    <div>
      <div className="mx-3 md:mx-2 lg:mx-0">
        <Hero></Hero>
      </div>
      <Books booksData={booksData}></Books>
    </div>
  );
};

export default Home;
