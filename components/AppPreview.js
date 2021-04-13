import Link from "next/link";
import { FaReact, FaPython, FaVuejs } from "react-icons/fa";
import { DiPostgresql, DiMysql } from "react-icons/di";

const icons = {
  react: FaReact,
  python: FaPython,
  vue: FaVuejs,
  postgres: DiPostgresql,
  mysql: DiMysql,
};

export default function AppPreview({ app }) {
  function render(type) {
    if (!icons[type]) return false;
    const Icon = icons[type];
    return <Icon className="w-5 h-5 text-gray-800" />;
  }

  return (
    <div className="flex flex-col bg-white rounded-lg shadow">
      {/* top header */}
      <Link href={`/apps/${app.filePath.replace(/\.mdx?$/, "")}`}>
        <a className="group relative py-6 px-2 bg-gray-800 text-white rounded-t-lg flex flex-col items-center justify-center text-2xl font-extrabold hover:bg-gray-700">
          {/* absolutely positioned bar thingy */}
          <span className="block absolute -bottom-3 inset-x-0 h-6 bg-gray-800 transform skew-y-2 group-hover:bg-gray-700"></span>

          {/* icons */}
          {app.data.technologies && (
            <div className="absolute -top-4 right-3 flex space-x-2">
              {app.data.technologies.map((technology, index) => (
                <div key={index} className="bg-blue-400 p-1.5 rounded-lg shadow">
                  {render(technology.name)}
                </div>
              ))}
            </div>
          )}

          {/* title */}
          <h3 className="transform translate-y-2 group-hover:translate-y-1 transition duration-200">
            {app.data.title}
          </h3>
        </a>
      </Link>

      {/* content */}
      <div className="h-full p-6 pt-10 flex flex-col items-between space-y-4">
        <p className="flex-grow">{app.data.description}</p>
        <a className="block">Learn More</a>
      </div>
    </div>
  );
}
