import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="text-center bg-white pb-10">
      <div className="w-60 mx-auto">
        <Image
          src={"/hero_cinema.png"}
          width="200px"
          height="165px"
          layout="responsive"
        />
      </div>
      <h1 className="text-2xl text-gray-800 uppercase font-bold">
        Welcome To Watch this
      </h1>
      <p className="text-blue-500 text-xl pb-5">
        Looking for your next movie? Search here!
      </p>
      <Link href="/contact">
        <button className="bg-blue-500 text-white py-3 px-6 rounded-xl text-lg hover:scale-110 duration-500">
          Contact Us
        </button>
      </Link>
    </div>
  );
};

export default Hero;
