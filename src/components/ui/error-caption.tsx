export interface ErrorCaptionProps {
  error: string | undefined | null;
}

export const ErrorCaption = ({ error }: ErrorCaptionProps) => {
  if (!error) return null;
  return <p className="text-sm text-red-500">{error}</p>;
};
