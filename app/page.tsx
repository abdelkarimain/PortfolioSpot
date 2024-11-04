import Image from "next/image";
import PList from "./components/PList";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <PList />
    </>
  );
}
