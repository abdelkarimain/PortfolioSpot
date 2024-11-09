import { useState, useEffect } from "react";
import { Categories, Footer, Hero, Navbar } from "./components";
export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="fixed left-0 top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
      </div>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="loader"></div>
        </div>
      ) : (
        <>
          <div className="relative mx-auto h-screen w-full max-w-7xl px-6 md:px-8 lg:px-12">
            <Navbar />
            <Hero />
            <main className="overflow-hidden px-4 pt-20 md:px-10">
              <Categories />
            </main>
            <Footer />
          </div>
        </>
      )}
    </>
  );
}
