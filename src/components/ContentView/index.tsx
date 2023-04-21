import markdown from "markdown-it";

interface ContentViewProps {
  markdown?: string;
}

export function ContentView({ markdown: markdownText = "" }: ContentViewProps) {
  const markdownConverter = markdown({
    html: true,
  });

  const html = markdownConverter.render(markdownText);

  return (
    <div
      className="absolute inset-0 left-1/2 -translate-x-1/2 overflow-auto leading-relaxed py-10 scrollbar scrollbar-thumb-gray-800 scrollbar-track-transparent prose prose-h1:text-white prose-p:text-slate-400 prose-ul:text-slate-500 prose-p:m-0"
      dangerouslySetInnerHTML={{ __html: html }}
    ></div>
  );
}
