export function formatNotionUrlToDomain(url: string): string {
  const urlFormatted = url.replaceAll(/https:\/\/www\.notion\.so\//g, "");

  return urlFormatted;
}
