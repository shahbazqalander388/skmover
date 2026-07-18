import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import Layout from '../components/layout/Layout';
import PageSeo from '../seo/PageSeo';
import JsonLd from '../seo/JsonLd';
import { notFoundSchemas } from '../seo/schemas';

const NotFound = () => {
  return (
    <Layout>
      <PageSeo
        title="404 – Page Not Found | SK Movers"
        description="The page you are looking for does not exist. Return to SK Movers homepage for professional moving services in Saudi Arabia."
        path="/404"
      />
      <JsonLd data={notFoundSchemas()} />

      <section
        className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)' }}
      >
        {/* Background decorations */}
        <div
          className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-[0.04] pointer-events-none"
          style={{ background: 'radial-gradient(circle, #3b82f6, transparent)', filter: 'blur(80px)' }}
        />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-[0.04] pointer-events-none"
          style={{ background: 'radial-gradient(circle, #f97316, transparent)', filter: 'blur(80px)' }}
        />

        <div className="relative text-center px-4 sm:px-6 max-w-lg mx-auto">
          {/* 404 Number */}
          <h1
            className="text-[8rem] sm:text-[10rem] font-black leading-none mb-2 select-none"
            style={{
              background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 40%, #f97316 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              opacity: 0.9,
            }}
          >
            404
          </h1>

          <h2 className="text-white text-2xl sm:text-3xl font-bold mb-3">
            Page Not Found
          </h2>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8 max-w-md mx-auto">
            Sorry, the page you are looking for doesn&apos;t exist or has been moved.
            Let us take you back to our homepage.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200"
              style={{
                background: 'rgba(255,255,255,0.05)',
                color: '#94a3b8',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.color = '#e2e8f0';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.color = '#94a3b8';
              }}
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
