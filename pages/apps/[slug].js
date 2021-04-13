import { join, replace } from "path";
import fs from "fs";
import { getApp } from "../../lib/api";
import Hero from "../../components/Hero";

export default function App({ app }) {
  return (
    <div>
      <Hero subtitle="Welcome" title="Let's build with App Platform!">
        Sample applications and sample data to get you started building App
        Platform apps.
      </Hero>
    </div>
  );
}

// STEP 1. i have this many pages i want you to generate
export async function getStaticPaths() {
  // get all of the markdown files
  const appsPath = join(process.cwd(), "content", "apps");
  const appFilePaths = fs
    .readdirSync(appsPath)
    .filter((path) => /\.mdx?$/.test(path));

  // Remove file extensions for page paths
  // Map the path into the static paths object required by Next.js
  const paths = appFilePaths
    .map((path) => path.replace(/\.mdx?$/, ""))
    .map((slug) => ({ params: { slug } }));

  // pass it into a paths variable
  return {
    paths,
    fallback: false,
  };
}

// STEP 2. for each individual page, get this data
export async function getStaticProps({ params }) {
  const app = getApp(params.slug);
  return { props: { app } };
}
