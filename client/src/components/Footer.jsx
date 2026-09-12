import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Column 1: Brand Info */}
        <div className="space-y-4">
          <Link to="/" className="text-2xl font-bold text-white tracking-wide">
            🏠 Apna PG
          </Link>
          <p className="text-sm text-gray-400 leading-relaxed">
            Find premium, budget-friendly, and verified PG accommodations without paying any brokerage. Living made easy.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-md">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-blue-400 transition">Browse PGs</Link></li>
            <li><button onClick={() => alert('Feature coming soon!')} className="hover:text-blue-400 transition text-left">List Your Property</button></li>
            <li><button onClick={() => alert('Feature coming soon!')} className="hover:text-blue-400 transition text-left">How it Works</button></li>
          </ul>
        </div>

        {/* Column 3: Legal & Support */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-md">Safety & Support</h4>
          <ul className="space-y-2 text-sm">
            <li><button onClick={() => alert('Privacy Policy page coming soon!')} className="hover:text-blue-400 transition text-left">Privacy Policy</button></li>
            <li><button onClick={() => alert('Terms page coming soon!')} className="hover:text-blue-400 transition text-left">Terms & Conditions</button></li>
            <li><button onClick={() => alert('Contact Support coming soon!')} className="hover:text-blue-400 transition text-left">Contact Us</button></li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-md">Get in Touch</h4>
          <p className="text-sm text-gray-400">📧 support@apnipg.com</p>
          <p className="text-sm text-gray-400 mt-1">📞 +91 98765 43210</p>
          <p className="text-sm text-gray-400 mt-3 text-xs italic">📍 Noida, Uttar Pradesh, India</p>
        </div>

      </div>

      {/* Bottom Copyright Strip */}
      <div className="border-t border-gray-800 py-6 text-center text-xs text-gray-500">
        <p>© {new Date().getFullYear()} ApniPG. All rights reserved.</p>
      </div>
    </footer>
  );
}
