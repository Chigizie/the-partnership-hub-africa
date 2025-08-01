import Link from "next/link";

function MainNavigation() {
  return (
    <div>
      <nav>
        <ul className="flex gap-10 justify-between">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MainNavigation;
