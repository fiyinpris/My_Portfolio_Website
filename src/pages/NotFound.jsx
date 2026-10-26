import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { BackgroundDecor } from "../components/BackgroundDecor";

export const NotFound = () => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Page not found — Priscilla";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <main className="relative isolate grid min-h-[100svh] place-items-center px-5 text-center">
      <BackgroundDecor />
      <div>
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-4 text-[clamp(5rem,20vw,10rem)] font-semibold leading-none tracking-[-0.06em] text-gradient">
          404
        </h1>
        <p className="mx-auto mt-4 max-w-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn btn-primary mt-8">
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>
      </div>
    </main>
  );
};
