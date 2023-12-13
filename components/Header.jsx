import Link from "next/link";
import React from "react";
import { HiArrowRight } from "react-icons/hi2";

const Header = () => {
  return (
    <header className="padding-container max-container flex gap-4 flexBetween py-4 ">
      <Link href={"/"} className="bold-28 text-white">
        Fasial <span className="regular-28 text-secondary">Gidado</span>
      </Link>
      <Link
        href={"/"}
        className="btn_dark_rounded px-4 py-2 rounded-full flexCenter gap-1 font-semibold "
      >
        <span>Contact Me</span>
        <span className="h-5 w-5 rounded-full flexCenter ">
          <HiArrowRight />
        </span>
      </Link>
    </header>
  );
};

export default Header;
