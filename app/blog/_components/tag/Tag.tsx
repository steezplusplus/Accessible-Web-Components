export type TagProps = {
  displayText: string;
};

export function Tag(props: TagProps) {
  const { displayText } = props;
  return (
    <span className="rounded-md border border-solid px-1 text-sm">
      {displayText}
    </span>
  );
}
