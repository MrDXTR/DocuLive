import Link from "next/link";
import React from "react";
import Image from "next/image";

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={`header ${className}`}>
      <Link href={`/`} className="md:flex-1 flex items-center flex-row">
        <Image
          src="/assets/icons/logo.svg"
          alt="logo"
          width={30}
          height={30}
          className="hidden md:block max-w-[120px] max-h-[30px] overflow-hidden"
        />
        <Image
          src="/assets/icons/logo-icon.svg"
          alt="logo"
          width={32}
          height={32}
          className="md:hidden mr-2 "
        />
        <span className="hidden md:block ml-2 text-xl font-semibold">
          DocuLive
        </span>
      </Link>

      {children}
    </div>
  );
};

export default Header;
