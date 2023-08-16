'use client'

import Header from "./components/Header";
import Meme from "./components/meme/Meme";

const Home = () => {
  return (
  <>
    <Header />
    <main className="main">
      <Meme />
    </main>
  </>
  );
};

export default Home;
