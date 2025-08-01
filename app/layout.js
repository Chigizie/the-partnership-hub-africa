import "./globals.css";
import MainNavigation from "./_components/MainNavigation";
import Logo from "./_components/Header";

export const metadata = {
  title: "The Partnership Hub Africa",
  description:
    "The Partnership Hub Africa is a platform that connects African entrepreneurs with investors and partners.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen px-2 py-2 bg-gray-100 text-primary">
        <header>
          <Logo />
        </header>
        <main className="flex-1 py-9 ">{children}</main>
        <footer>
          <p>&copy; 2025 The Partnership Hub Africa</p>{" "}
        </footer>
      </body>
    </html>
  );
}
