import type { NotionCertificateDocument } from "@/@types/notion-certificates";

import { ContentView } from "@/components/ContentView";
import { notion } from "@/lib/notion";
import { X, ArrowRight } from "lucide-react";

import type { Metadata } from "next";

import Link from "next/link";

import { white } from "tailwindcss/colors";

interface CertificateProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: CertificateProps): Promise<Metadata> {
  const certificate = await notion.pages.retrieve({
    page_id: params.slug,
  });

  /* @ts-ignore // Page retireve option has key 'properties' */
  const { properties }: { properties: NotionCertificateDocument } = certificate;

  console.log(properties);

  return {
    title: properties.Name.title[0].plain_text,
  };
}

export default async function Certificate({ params }: CertificateProps) {
  const certificate = await notion.pages.retrieve({
    page_id: params.slug,
  });

  /* @ts-ignore // Page retireve option has key 'properties' */
  const { properties }: { properties: NotionCertificateDocument } = certificate;

  return (
    <div className="w-full h-full z-0">
      <div className="w-52 px-4 py-2 bg-gray-800 flex items-center justify-center gap-4">
        <span className="w-full text-sm text-ellipsis overflow-hidden whitespace-nowrap font-medium">
          {properties.Name.title[0].plain_text}
        </span>
        <Link href="/certificate" className="flex items-center justify-center">
          <X size={18} color={white} />
        </Link>
      </div>
      <div className="relative h-full bg-gray-800 w-full grid place-content-center scrollbar">
        <ContentView
          markdown={properties.Description.rich_text[0].plain_text}
        />
        <Link
          className="absolute right-5 top-5 py-3 px-6 flex justify-center items-center gap-4 shadow-md shadow-zinc-500 text-center text-sm text-slate-200 bg-zinc-900 rounded-lg brightness-125 hover:brightness-100 border-2 border-transparent border-solid hover:border-slate-500"
          href={properties.CertificateLink.url}
        >
          View Certificate
          <ArrowRight size={20} color={white} />
        </Link>
      </div>
    </div>
  );
}
