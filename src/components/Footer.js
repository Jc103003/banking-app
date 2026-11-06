import { cacheLife } from "next/cache";
import Link from "next/link";

async function getCurrentYear() {
  "use cache";
  cacheLife("max");
  return new Date().getFullYear();
}

export default async function Footer() {
  const currentYear = await getCurrentYear();

  return (
    <footer className="site-footer">
      <small>
        © {currentYear} JC Bank. All rights reserved. By me. JC
      </small>
      <nav className="site-footer__links" aria-label="Footer links">
        <Link className="site-footer__link" href="/terms">
          Terms
        </Link>
        <Link className="site-footer__link" href="/privacy">
          Privacy
        </Link>
        <Link className="site-footer__link" href="/contact">
          Contact
        </Link>
      </nav>
    </footer>
  );
}
