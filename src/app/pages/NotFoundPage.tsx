import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <section className="min-h-[60vh] flex items-center bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl mx-auto text-center">
          <p className="inline-block px-3 py-1 rounded-full bg-[#0C3F66]/10 text-[#0C3F66] text-sm font-semibold mb-5">
            404
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#0C3F66] mb-4">Page Not Found</h1>
          <p className="text-gray-600 mb-8">
            The page you requested could not be found. Please use the navigation links below.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#0C3F66] text-white rounded-lg font-semibold hover:bg-[#0C3F66] transition-colors"
            >
              Go to Home
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#0F7F4F] text-white rounded-lg font-semibold hover:bg-[#138A58] transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
