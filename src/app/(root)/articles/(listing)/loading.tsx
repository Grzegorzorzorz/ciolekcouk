import List from "@/components/list";

function Skeleton() {
  return (
    <div className="list-row">
      <div>
        <div className="skeleton max-w-full w-42 h-5"></div>
        <div className="skeleton max-w-full w-16 h-2 mt-2"></div>
      </div>
      <div className="skeleton list-col-wrap max-w-full w-3xl h-3"></div>
    </div>
  );
}

export default function Loading() {
  return (
    <>
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </>
  );
}
