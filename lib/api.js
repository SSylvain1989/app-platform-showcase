import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

/**
 * Get all apps
 */
export function getApps() {
  const appsPath = join(process.cwd(), "content", "apps");

  const appFilePaths = fs
    .readdirSync(appsPath)
    .filter((path) => /\.mdx?$/.test(path));

  return appFilePaths.map((filePath) => {
    const source = fs.readFileSync(join(appsPath, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });
}

/**
 * Get a single app
 */
export function getApp(slug) {
  const appsPath = join(process.cwd(), "content", "apps");
  const appFilePath = join(appsPath, `${slug}.mdx`);

  const source = fs.readFileSync(appFilePath);
  const { content, data } = matter(source);

  return { content, data };
}
