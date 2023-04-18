import { ContentView } from "@/components/ContentView";
import { getClient } from "@/lib/apollo";
import { gql } from "@apollo/client";

interface CertificateProps {
  params: {
    slug: string;
  };
}

const getCertificateFromHygraph = gql`
  query Certificates {
    certificates {
      certificateDescription
      certificateLink
      id
    }
  }
`;

export default async function Certificate({ params }: CertificateProps) {
  const client = getClient();
  const { data } = await client.query({
    query: getCertificateFromHygraph,
  });

  const certificate = data.certificates.find(
    (certificate) => certificate.id === params.slug
  );

  return (
    <div className="relative h-full w-full">
      <ContentView markdown={certificate.certificateDescription} />
    </div>
  );
}
