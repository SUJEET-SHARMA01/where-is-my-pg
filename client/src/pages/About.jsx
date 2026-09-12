import { Link } from 'react-router-dom';
import Testimonials from '../components/Testimonials';

export default function About() {
  return (
    <div className="container mx-auto p-4 md:p-6 max-w-5xl">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-4">
        <Link to="/" className="hover:underline text-blue-600">Home</Link> / <span className="text-gray-700">About Us</span>
      </div>

      {/* Hero Intro */}
      <div className="text-center my-10">
        <h1 className="text-4xl font-extrabold text-gray-900">About <span className="text-blue-600">ApnaPG</span></h1>
        <p className="text-gray-600 mt-3 text-lg max-w-2xl mx-auto leading-relaxed">
          We are on a mission to make finding a Paying Guest (PG) accommodation transparent, hassle-free, and 100% brokerage-free for students and working professionals.
        </p>
      </div>

      {/* Feature Highlights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
          <span className="text-3xl">🛡️</span>
          <h3 className="font-bold text-lg text-gray-800 mt-3">Verified Listings</h3>
          <p className="text-gray-500 text-sm mt-1">Every property is checked to ensure safety, cleanliness, and comfort.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
          <span className="text-3xl">🚫</span>
          <h3 className="font-bold text-lg text-gray-800 mt-3">Zero Brokerage</h3>
          <p className="text-gray-500 text-sm mt-1">Connect directly with property owners without paying any middleman fees.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
          <span className="text-3xl">💬</span>
          <h3 className="font-bold text-lg text-gray-800 mt-3">Instant Connect</h3>
          <p className="text-gray-500 text-sm mt-1">Use direct WhatsApp or calling options to talk to hosts immediately.</p>
        </div>
      </div>

      {/* Testimonials Section Included */}
      <Testimonials />
    </div>
  );
}
