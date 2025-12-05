import { useState } from "react";
import Logos from "components/atoms/logos";
import Card from "components/organisms/card";
import Button from "components/atoms/button";
import { SvgIcon } from "components/atoms/svg-sprite-loader";

const techBadges = [
  { name: "React 19", icon: "settings" },
  { name: "TypeScript 5.9", icon: "settings" },
  { name: "Tailwind CSS 4", icon: "settings" },
  { name: "Vite 7", icon: "settings" },
  { name: "Vitest", icon: "wrench" },
  { name: "ESLint 9", icon: "menu" },
];

const features = [
  {
    name: "Vite 7",
    description:
      "Lightning-fast build tool with optimized development experience.",
    icon: "settings",
    docs: "https://vitejs.dev/",
    borderColor: "border-t-purple-500",
  },
  {
    name: "React 19",
    description: "Latest React with modern patterns and optimizations.",
    icon: "settings",
    docs: "https://react.dev/",
    borderColor: "border-t-blue-500",
  },
  {
    name: "TypeScript 5.9",
    description:
      "Latest TypeScript with strict typing and modern features.",
    icon: "star",
    docs: "https://www.typescriptlang.org/",
    borderColor: "border-t-green-500",
  },
  {
    name: "Tailwind CSS 4",
    description: "Next-generation utility-first CSS with optimized setup.",
    icon: "star",
    docs: "https://tailwindcss.com/",
    borderColor: "border-t-cyan-500",
  },
  {
    name: "Vitest",
    description: "Fast unit testing framework with modern features.",
    icon: "wrench",
    docs: "https://vitest.dev/",
    borderColor: "border-t-blue-600",
  },
  {
    name: "ESLint 9",
    description: "Latest linting with React/TypeScript rules.",
    icon: "menu",
    docs: "https://eslint.org/",
    borderColor: "border-t-indigo-600",
  },
  {
    name: "Component Classes",
    description:
      "Pre-built Tailwind component classes for faster development.",
    icon: "settings",
    docs: "https://tailwindcss.com/docs/adding-custom-styles#using-css",
    borderColor: "border-t-purple-500",
  },
  {
    name: "Path Aliases",
    description:
      "Clean imports using TypeScript path mapping for better organization.",
    icon: "arrow-right",
    docs: "https://github.com/vitejs/vite/issues/88#issuecomment-762415200",
    borderColor: "border-t-green-500",
  },
];

function Home() {
  const [copied, setCopied] = useState(false);
  const command = "npx degit asif7774/vital my-app";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-600 via-purple-500 to-blue-600">
      <header className="pt-16 z-10 relative container-responsive text-center">
        <Logos.Vite className="w-80 h-80 m-auto mb-8" />
        <h1 className="text-6xl lg:text-7xl font-extrabold text-white mb-4">
          Vital
        </h1>
        <h2 className="text-2xl sm:text-3xl text-white/90 mb-8 font-medium">
          The Ultimate React + TypeScript + Tailwind Boilerplate
        </h2>
        
        {/* Technology Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {techBadges.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20"
            >
              <SvgIcon
                name={tech.icon}
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-white"
                aria-hidden={true}
              />
              <span className="text-white font-semibold text-sm">{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col gap-4 justify-center items-center mb-16">
          <a href="https://github.com/asif7774/vital">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2">
              <SvgIcon
                name="external-link"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-white"
                aria-hidden={true}
              />
              Visit on Github
            </Button>
          </a>
          
          {/* Command Input with Copy Button */}
          <div className="flex flex-col sm:flex-row gap-2 w-full max-w-2xl">
            <div className="flex-1 relative">
              <input
                type="text"
                readOnly
                value={command}
                className="w-full px-4 py-3 pr-24 bg-white/30 backdrop-blur-sm border border-white/30 rounded-lg text-white font-mono text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/60"
                aria-label="Command to install Vital"
              />
              <button
                onClick={handleCopy}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md font-semibold text-sm shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
                aria-label="Copy command to clipboard"
              >
                {copied ? (
                  <>
                    <SvgIcon
                      name="check"
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-white"
                      aria-hidden={true}
                    />
                    Copied!
                  </>
                ) : (
                  <>
                    <SvgIcon
                      name="clipboard"
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-white"
                      aria-hidden={true}
                    />
                    Copy
                  </>
                )}
              </button>
            </div>
          </div>
          
          {/* Toast Notification */}
          {copied && (
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-xl flex items-center gap-2 z-50 animate-slide-up">
              <SvgIcon
                name="check-circle"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-white"
                aria-hidden={true}
              />
              <span className="font-semibold">Copied to clipboard!</span>
            </div>
          )}
        </div>
      </header>

      {/* Features Section */}
      <section className="container-responsive pb-16">
        <h2 className="sr-only">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((props, index) => (
            <article key={index}>
              <Card
                title={props.name}
                description={props.description}
                icon={props.icon}
                href={props.docs}
                borderColor={props.borderColor}
              />
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="pb-8 container-responsive text-right">
        <a
          href="https://github.com/asif7774"
          className="text-white/70 hover:text-white transition-colors font-semibold"
        >
          Asif Ansari @ {new Date().getFullYear()}
        </a>
      </footer>
    </main>
  );
}

export default Home;