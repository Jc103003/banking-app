import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="site-header">
      <Link
        className="site-header__brand"
        href="/"
        aria-label="Banking App home"
      >
        <Image
          className="site-header__logo"
          src="/images/bank_icon.png"
          width={48}
          height={48}
          alt=""
        />
        <span>JC Bank</span>
      </Link>
      <a className="site-header__help" href="example.com">
        Need help?
      </a>
    </header>
  );
}
