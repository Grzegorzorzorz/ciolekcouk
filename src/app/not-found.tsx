import Prose from "@/components/prose";

export default function Error404() {
  return (
    <div className="text-center sm:text-left">
      <Prose>
        <h1>Error 404</h1>
        <p>Page not found.</p>
      </Prose>
      <a className="btn btn-primary btn-outline mt-8" href="/">
        Return to civilisation
      </a>
    </div>
  );
}
