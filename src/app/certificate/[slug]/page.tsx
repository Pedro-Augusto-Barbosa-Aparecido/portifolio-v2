import type { NotionCertificateDocument } from "@/@types/notion-certificates";

import { ContentView } from "@/components/ContentView";

import { notion } from "@/lib/notion";

interface CertificateProps {
  params: {
    slug: string;
  };
}

export default async function Certificate({ params }: CertificateProps) {
  const certificate = await notion.pages.retrieve({
    page_id: params.slug,
  });

  /* @ts-ignore // Page retireve option has key 'properties' */
  const { properties }: { properties: NotionCertificateDocument } = certificate;

  return (
    <div className="relative h-full w-full">
      <ContentView markdown={properties.Description.rich_text[0].plain_text} />
    </div>
  );
}
