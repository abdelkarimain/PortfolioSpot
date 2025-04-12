import { Button } from "@/components/ui/button";
import Link from "next/link";
const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center space-x-2 min-h-[70vh]">
      <h1 className="mb-8 text-5xl font-medium tracking-tighter">
        {"404"}
      </h1>
      <h2 className="mb-8 text-2xl font-medium tracking-tighter">
        {"Sorry! This page doesn't exist."}
      </h2>
      <Button variant="outline">
        <Link
          href="/"
          className="text-primary "
        >
          Go to homePage
        </Link>
      </Button>
    </div>
  );
};

export default NotFound;
