import Hero from "../components/Hero";
import AppPreview from "../components/AppPreview";
import { getApps } from "../lib/api";

export default function Home({ apps }) {
  return (
    <div>
      <div className="relative bg-blue-500 text-blue-50">
        {/* little grid thing */}
        <div className="hidden lg:grid absolute left-24 -bottom-8 w-24 h-24 grid-cols-5 gap-2 opacity-50">
          {[...Array(25)].map((i, index) => (
            <div key={index} className="rounded bg-blue-700" />
          ))}
        </div>

        <div className="hidden lg:grid absolute right-32 bottom-12 w-24 h-24 grid-cols-5 gap-2 opacity-50">
          {[...Array(25)].map((i, index) => (
            <div key={index} className="rounded bg-blue-700" />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-8 pt-12 pb-20 text-center">
          <Hero subtitle="Hey there!" title="Let's build with App Platform">
            Sample applications and sample data to get you started building App
            Platform apps.
          </Hero>
        </div>
      </div>

      {/* small sample apps */}
      {/* large sample apps */}
      {/* tutorials / videos */}

      {/* show sample apps in a grid */}
      <div className="bg-gray-100 pt-32 pb-36">
        <div className="max-w-7xl mx-auto px-8 space-y-24">
          <h2 className="text-5xl font-bold text-center text-gray-700">
            Sample Apps
          </h2>

          <div className="grid grid-cols-2 gap-8">
            {apps.map((app, index) => (
              <AppPreview key={index} app={app} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function getStaticProps() {
  const apps = getApps();
  return { props: { apps } };
}
