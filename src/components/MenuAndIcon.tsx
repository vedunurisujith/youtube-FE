import Link from "next/link";
import { AppBarProps } from "../pages/AppBar";

const MenuAndIcon = ({ toggleSideBar, isOpen }: AppBarProps) => {
  return (
    <>
      <button onClick={toggleSideBar} aria-label="Toggle Sidebar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="m-2 w-6 h-6 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <Link href="/">
        <img
          className=" ml-4 h-11 w-19 cursor-pointer"
          src="/logo.png"
          alt="Youtube"
        />
      </Link>
    </>
  );
};

export default MenuAndIcon;
