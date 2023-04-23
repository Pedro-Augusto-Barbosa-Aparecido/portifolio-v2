import { ReactNode } from "react";

import { FileExplorer, FilesType } from "@/components/FileExplorer";

import { Award } from "lucide-react";
import { slate } from "tailwindcss/colors";
import { DATABASE_ID, notion } from "@/lib/notion";
import { NotionCertificateResults } from "@/@types/notion-certificates";
import { formatNotionUrlToDomain } from "@/lib/format/certificate-url";

interface CertificateLayoutProps {
  children: ReactNode;
}

export const revalidate = 10; /* waiting ten seconds to revalidate cache */

export default async function CertificateLayout({
  children,
}: CertificateLayoutProps) {
  const { results } = await notion.databases.query({
    database_id: DATABASE_ID,
  });

  const certificates = results.map(
    /* @ts-ignore // Setting type of each object */
    (certificate: NotionCertificateResults) => {
      return {
        certificateId: certificate.id,
        certificateUrl: formatNotionUrlToDomain(certificate.url),
        name: certificate.properties.Name.title[0].plain_text,
        company: certificate.properties.Companies.select,
        url: certificate.properties.CertificateLink.url,
        description: certificate.properties.Description.rich_text[0].plain_text,
      };
    }
  );

  const folders = certificates.reduce((previous, current) => {
    if (
      !previous.some((folder) => folder.folderName === current.company.name)
    ) {
      previous.push({
        folderName: current.company.name,
        files: [
          {
            fileId: current.certificateId,
            filename: current.name,
            url: `/portfolio/certificate/${current.certificateId}`,
          },
        ],
      });
    } else {
      const indexOfCompany = previous.findIndex(
        (files) => files.folderName === current.company.name
      );

      previous[indexOfCompany].files.push({
        fileId: current.certificateId,
        filename: current.name,
        url: `/portfolio/certificate/${current.certificateId}`,
      });
    }

    return previous;
  }, [] as FilesType[]);

  return (
    <div className="flex justify-start items-start h-full w-full scrollbar">
      <FileExplorer
        folders={folders}
        title={"My Certificates"}
        titleIcon={<Award size={16} color={slate[400]} />}
      />
      {children}
    </div>
  );
}
