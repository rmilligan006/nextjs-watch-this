import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-blue-600">
      <div className="font-bold text-neutral-100 p-4 max-w-7xl mx-auto container tracking-wider">
        <Link href="/">
          <a className="text-base md:text-2xl">
            Watch
            <span className="text-[#FDEEDC] bg-black rounded-md p-1 font-space">
              This
            </span>
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
