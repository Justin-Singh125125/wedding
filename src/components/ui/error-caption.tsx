export interface ErrorCaptionProps {
  error: string | undefined | null;
}

export const ErrorCaption = ({ error }: ErrorCaptionProps) => {
  if (!error) return null;
  return <p className="text-xs text-red-500 sm:text-sm">{error}</p>;
};
