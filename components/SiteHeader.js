import Link from "next/link";

export default function SiteHeader() {
  return (
    <nav className="bg-blue-500 text-blue-100 px-8 py-3">
      <div className="max-w-7xl mx-auto md:flex justify-between">
        {/* left side: logo */}
        <Logo />

        {/* right side: navigation */}
        <SiteNav />
      </div>
    </nav>
  );
}

function Logo() {
  return (
    <Link href="/">
      <a className="group inline-block relative py-2 px-4 transform hover:translate-x-3 transition ease-in-out duration-200">
        {/* background shadow with absolutely positioned item */}
        <span className="block absolute inset-0 bg-blue-600 group-hover:bg-blue-700 transition shadow-lg rounded transform -skew-x-12"></span>

        {/* content */}
        <span className="block relative italic font-medium text-white">
          DigitalOcean App Platform Resources
        </span>
      </a>
    </Link>
  );
}

function SiteNav() {
  return (
    <div className="hidden md:flex items-center">
      <a
        href="https://docs.digitalocean.com/"
        className="font-semibold py-2 px-3 hover:text-white"
      >
        Docs
      </a>
      <a
        href="https://cloud.digitalocean.com/apps"
        className="font-semibold py-2 px-3 hover:text-white"
      >
        Apps Dashboard
      </a>
    </div>
  );
}
