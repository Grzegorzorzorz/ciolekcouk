interface ProseProps {
  className?: string;
  children: React.ReactNode;
}

export default function Prose({ className, children }: ProseProps) {
  className = className === undefined ? "" : className;
  return (
    <div className={"prose max-w-none w-full " + className}>{children}</div>
  );
}
