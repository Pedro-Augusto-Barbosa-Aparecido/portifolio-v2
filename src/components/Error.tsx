interface ErrorProps {
  message: string;
}

export function Error({ message }: ErrorProps) {
  return <span className="text-red-500 font-medium text-sm">{message}</span>;
}
