import markdown from "markdown-it";

interface ContentViewProps {
  markdown?: string;
}

export function ContentView({ markdown: markdownText = "" }: ContentViewProps) {
  const markdownConverter = markdown({
    html: true,
  });

  const html = markdownConverter.render(markdownText);

  return <div id="shiki-code" dangerouslySetInnerHTML={{ __html: html }}></div>;
}
