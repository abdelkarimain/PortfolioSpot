import PList from "./components/PList";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { promises as fs } from "fs";

export default async function Home() {
  const file = await fs.readFile(process.cwd() + "/app/data.json", "utf8");
  const data = JSON.parse(file);

  console.log(data);
  return (
    <>
      <Header />
      <Hero />
      <PList data={data.items} />
    </>
  );
}
