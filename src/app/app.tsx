import Logos from "components/atoms/logos";
import Card from "components/organisms/card";
import {
  BeakerIcon,
  BookmarkIcon,
  ChevronDownIcon,
  CubeTransparentIcon,
  PhoneXMarkIcon,
  Bars3Icon,
  PencilIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";
import Button from "components/atoms/button";
import CopyButton from "components/molecules/copy-button";

const features = [
  {
    name: "Vite 7",
    description:
      "Lightning-fast build tool with optimized development experience.",
    logo: CubeTransparentIcon,
    docs: "https://vitejs.dev/",
  },
  {
    name: "React 19",
    description: "Latest React with modern patterns and optimizations.",
    logo: PencilIcon,
    docs: "https://react.dev/",
  },
  {
    name: "TypeScript 5.9",
    description:
      "Latest TypeScript with strict typing and modern features.",
    logo: BookmarkIcon,
    docs: "https://www.typescriptlang.org/",
  },
  {
    name: "Tailwind CSS 4",
    description: "Next-generation utility-first CSS with optimized setup.",
    logo: PhotoIcon,
    docs: "https://tailwindcss.com/",
  },
  {
    name: "Vitest",
    description: "Fast unit testing framework with modern features.",
    logo: BeakerIcon,
    docs: "https://vitest.dev/",
  },
  {
    name: "ESLint 9",
    description: "Latest linting with React/TypeScript rules.",
    logo: Bars3Icon,
    docs: "https://eslint.org/",
  },
  {
    name: "Component Classes",
    description:
      "Pre-built Tailwind component classes for faster development.",
    logo: PhoneXMarkIcon,
    docs: "https://tailwindcss.com/docs/adding-custom-styles#using-css",
  },
  {
    name: "Path Aliases",
    description:
      "Clean imports using TypeScript path mapping for better organization.",
    logo: ChevronDownIcon,
    docs: "https://github.com/vitejs/vite/issues/88#issuecomment-762415200",
  },
];

function App() {
  return (
    <main>
      <header className="pt-16 z-10 relative container-responsive">
        <h3 className="heading-secondary">
          <span className="text-[gold] opacity-75">Vital</span> @ Vite Template
        </h3>
        <h1 className="heading-primary mb-8 sm:mb-10">
          React + TypeScript + Tailwind
        </h1>
        <p className="text-body mb-10 sm:mb-11">
          Bootstrap your web projects faster than ever. Comes with:{" "}
          <code className="text-code">Tailwind CSS 4</code>
          , <code className="text-code">Vitest</code>,{" "}
          <code className="text-code">ESLint 9</code>,{" "}
          <code className="text-code">TypeScript 5.9</code>
          , <code className="text-code">Vite 7</code>,{" "}
          <code className="text-code">React 19</code>{" "}
          and{" "}
          <code className="text-code">
            Optimized component classes
          </code>
          . Configured and ready to go.
        </p>
        <div className="absolute top-12 right-12 opacity-10 lg:opacity-50">
          <Logos.Vite className="w-56 h-56" />
        </div>
      </header>
      <section className="container-responsive">
        <div className="sm:flex sm:space-x-6 space-y-4 sm:space-y-0 items-center">
          <a href="https://github.com/asif7774/vital">
            <Button>Visit on Github</Button>
          </a>
          <CopyButton text="npx degit asif7774/vital my-app" />
        </div>
      </section>
      <section className="container-responsive grid grid-cols-10 gap-4">
        {features.map((props, index) => (
          <div key={index} className="col-span-10 sm:col-span-5">
            <Card
              title={props.name}
              description={props.description}
              Icon={props.logo}
              href={props.docs}
            />
          </div>
        ))}
      </section>
      <footer className="pb-16 container-responsive text-center sm:text-right text-gray-400 font-bold">
        <a href="https://github.com/asif7774">
          Asif Ansari @ {new Date().getFullYear()}
        </a>
      </footer>
    </main>
  );
}

export default App;
