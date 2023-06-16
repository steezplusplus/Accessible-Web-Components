
export type TagProps = {
  displayText: string;
}

export function Tag(props: TagProps) {
  const { displayText } = props;
  return (
    <span className="text-sm border border-solid rounded-md px-1">{displayText}</span>
  );
}