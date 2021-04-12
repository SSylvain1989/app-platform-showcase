import path from "path";
import fs from "fs";
import matter from "gray-matter";

export default function App({ app }) {
  return <div>app page goes here</div>;
}

// STEP 1. i have this many pages i want you to generate
export async function getStaticPaths() {
  // get all of the markdown files
  const appsPath = path.join(process.cwd(), "apps");
  const appFilePaths = fs
    .readdirSync(appsPath)
    .filter((path) => /\.mdx?$/.test(path));

  const paths = appFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  // pass it into a paths variable
  return {
    paths,
    fallback: false,
  };
}

// STEP 2. for each individual page, get this data
export async function getStaticProps({ params }) {
  // get all of the markdown files
  const appsPath = path.join(process.cwd(), "apps");
  const appFilePath = path.join(appsPath, `${params.slug}.mdx`);

  const source = fs.readFileSync(appFilePath);
  const { content, data } = matter(source);

  return { props: { app: { content, data } } };
}
