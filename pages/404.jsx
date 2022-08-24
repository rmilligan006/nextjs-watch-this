import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mt-60">
      <h1 className="font-bold text-red-600 text-9xl">404</h1>
      <h6>
        Oh No!{" "}
        <span className="text-red-600 font-bold">
          This isn't the webpage you were looking for....
        </span>
      </h6>
      <p className="text-gray-400 mt-3">
        {"The Page you were looking for doesn't exist!"}
      </p>
      <Link href="/" className="">
        <button className="text-blue-300 bg-black font-semibold px-6 py-5 text-sm mt-5">
          Go on, get out of here!
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
