import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-2xl md:text-4xl font-bold text-white text-center mb-4">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-lg md:text-xl font-bold text-white mt-8 mb-2">
        {children}
      </h3>
    ),
    h4: ({ children }) => <h4 className="font-bold mt-1">{children}</h4>,
    ol: ({ children }) => (
      <ol className="list-decimal marker:font-bold marker:text-lg marker:md:text-xl">
        {children}
      </ol>
    ),
    ul: ({ children }) => <ul className="list-disc list-inside">{children}</ul>,
    p: ({ children }) => <p className="mb-1">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className=" px-4 md:px-6 py-2 md:py-3 border-l-2 md:border-l-4 border-white bg-orange-600 max-w-max rounded-sm">
        {children}
      </blockquote>
    ),
    ...components,
  };
}
