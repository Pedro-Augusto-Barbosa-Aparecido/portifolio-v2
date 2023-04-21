type NotionBaseProperty = {
  id: string;
  type: string;
};

type NotionSelectType = {
  id: string;
  name: string;
};

type NotionTextType = {
  type: "text";
  text: {
    content: string;
  };
  plain_text: string;
};

type NotionTitleType = {
  id: string;
  type: string;
  title: NotionTextType[];
};

type NotionDescriptionType = NotionBaseProperty & {
  rich_text: NotionTextType[];
};

export type NotionCertificateDocument = {
  Companies: NotionBaseProperty & {
    select: NotionSelectType;
  };
  CertificateLink: NotionBaseProperty & {
    url: string;
  };
  Type: NotionBaseProperty & {
    select: NotionSelectType;
  };
  Name: NotionTitleType;
  Description: NotionDescriptionType;
};

export type NotionCertificateResults = {
  id: string;
  url: string;
  properties: NotionCertificateDocument;
};
