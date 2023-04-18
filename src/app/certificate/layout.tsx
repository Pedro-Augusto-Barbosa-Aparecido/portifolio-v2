import { ReactNode } from "react";

import { FileExplorer, FilesType } from "@/components/FileExplorer";

import { getClient } from "@/lib/apollo";
import { gql } from "@apollo/client";

import { Award } from "lucide-react";
import { slate } from "tailwindcss/colors";

interface CertificateLayoutProps {
  children: ReactNode;
}

type GraphQLCertificateResponse = {
  organizations: {
    name: string;
    certificates: { id: string; smallTitle: string }[];
  }[];
};

const organizationsThatIHasCertificatesQuery = gql`
  query Certificates {
    organizations {
      name
      certificates {
        id
        smallTitle
      }
    }
  }
`;

export default async function CertificateLayout({
  children,
}: CertificateLayoutProps) {
  const client = getClient();
  const {
    data: { organizations },
  } = await client.query<GraphQLCertificateResponse>({
    query: organizationsThatIHasCertificatesQuery,
  });

  const folders = organizations.map<FilesType>((organization) => {
    return {
      folderName: organization.name,
      files: organization.certificates.map((certificate) => ({
        filename: certificate.smallTitle,
        fileId: certificate.id,
        url: `/certificate/${certificate.id}`,
      })),
    };
  });

  return (
    <div className="flex justify-start items-start h-full w-full">
      <FileExplorer
        folders={folders}
        title={"My Certificates"}
        titleIcon={<Award size={16} color={slate[400]} />}
      />
      {children}
    </div>
  );
}
