import matter from "gray-matter";
import fs from "fs";
import path from "path";
import Hero from "../components/Hero";
import AppPreview from "../components/AppPreview";

export default function Home({ apps }) {
  console.log(apps);
  return (
    <div>
      <div className="max-w-7xl mx-auto px-8 py-20">
        <Hero />
      </div>

      {/* show sample apps in a grid */}
      <div className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-8 space-y-8">
          <h2 className="text-4xl font-bold">Sample Apps</h2>

          <div className="grid grid-cols-3 gap-5">
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
  const appsPath = path.join(process.cwd(), "apps");
  const postFilePaths = fs
    .readdirSync(appsPath)
    .filter((path) => /\.mdx?$/.test(path));

  const apps = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(appsPath, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { apps } };
}
