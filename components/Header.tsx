import Link from "next/link";
import React from "react";
import Image from "next/image";

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={`header ${className}`}>
      <Link href={`/`} className="md:flex-1">
        <Image
          src="/assets/icons/logo.svg"
          alt="logo"
          width={120}
          height={30}
          className="hidden md:block "
        />
        <Image
          src="/assets/icons/logo-icon.svg"
          alt="logo"
          width={32}
          height={32}
          className="md:hidden mr-2 "
        />
      </Link>
      {children}
    </div>
  );
};

export default Header;
