export default function SiteFooter() {
  return (
    <div className="bg-blue-900 py-3 text-blue-300 font-semibold text-sm text-center">
      Hosted on{" "}
      <a
        className="text-blue-100 underline hover:text-white"
        href="https://www.digitalocean.com/products/app-platform/"
      >
        DigitalOcean App Platform
      </a>
    </div>
  );
}
