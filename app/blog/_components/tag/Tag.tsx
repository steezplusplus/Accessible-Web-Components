
export type TagProps = {
  displayText: string;
}

export function Tag(props: TagProps) {
  const { displayText } = props;
  return (
    <span className="text-sm">{displayText}</span>
  );
}