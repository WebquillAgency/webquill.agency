import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[60vh] grid place-items-center">
      <div className="text-center">
        <h1 className="text-7xl font-extrabold bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">404</h1>
        <p className="mt-3 text-slate-300">Page not found</p>
        <a href="/" className="mt-6 inline-flex items-center rounded-md bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 backdrop-blur hover:bg-white/10 border border-white/10">
          Return Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
