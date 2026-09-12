import { useParams, Link } from 'react-router-dom';
import { dummyPGs } from '../data';

export default function PgDetails() {
  const { id } = useParams();
  
  // Find the specific PG based on the URL ID
  const pg = dummyPGs.find(p => p.id === parseInt(id));

  // Agar PG nahi milta toh error message show karein
  if (!pg) {
    return (
      <div className="container mx-auto p-6 text-center my-20">
        <h2 className="text-2xl font-bold text-gray-800">Oops! PG Not Found</h2>
        <Link to="/" className="text-blue-600 underline mt-4 inline-block">Go Back Home</Link>
      </div>
    );
  }

  // Automate WhatsApp Message text
  const whatsappMessage = encodeURIComponent(`Hi, I am interested in your PG "${pg.name}" located in ${pg.location}. Is it available?`);
  const whatsappLink = `https://wa.me{whatsappMessage}`; // Replace with actual number later

  return (
    <div className="container mx-auto p-4 md:p-6 max-w-5xl">
      {/* Breadcrumb Navigation */}
      <div className="text-sm text-gray-500 mb-4">
        <Link to="/" className="hover:underline text-blue-600">Home</Link> / <span className="text-gray-700">{pg.name}</span>
      </div>

      {/* Main Grid: Left Side Image/Details, Right Side Sticky Card */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column (Main Info) */}
        <div className="lg:col-span-2 space-y-6">
          {/* Main Display Image */}
          <div className="rounded-xl overflow-hidden shadow-md">
            <img src={pg.image} alt={pg.name} className="w-full h-72 md:h-96 object-cover" />
          </div>

          {/* Heading Section */}
          <div>
            <span className={`text-xs font-bold px-3 py-1 rounded-full ${pg.gender_type === 'Boys' ? 'bg-blue-100 text-blue-800' : 'bg-pink-100 text-pink-800'}`}>
              For {pg.gender_type}
            </span>
            <h1 className="text-3xl font-extrabold text-gray-900 mt-3">{pg.name}</h1>
            <p className="text-gray-600 mt-1 flex items-center text-md">📍 {pg.location}</p>
          </div>

          <hr className="border-gray-200" />

          {/* Key Amenities */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-3">What this place offers</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <div className={`p-3 rounded-xl border flex items-center gap-3 ${pg.wifi ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-100 opacity-50'}`}>
                <span className="text-xl">📶</span>
                <div>
                  <p className="font-semibold text-sm text-gray-800">High-Speed WiFi</p>
                  <p className="text-xs text-gray-500">{pg.wifi ? 'Available' : 'Not Available'}</p>
                </div>
              </div>
              <div className={`p-3 rounded-xl border flex items-center gap-3 ${pg.ac ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-100 opacity-50'}`}>
                <span className="text-xl">❄️</span>
                <div>
                  <p className="font-semibold text-sm text-gray-800">Air Conditioner</p>
                  <p className="text-xs text-gray-500">{pg.ac ? 'Available' : 'Not Available'}</p>
                </div>
              </div>
              <div className={`p-3 rounded-xl border flex items-center gap-3 ${pg.food_included ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-100 opacity-50'}`}>
                <span className="text-xl">🍴</span>
                <div>
                  <p className="font-semibold text-sm text-gray-800">Food / Meals</p>
                  <p className="text-xs text-gray-500">{pg.food_included ? 'Included' : 'Not Included'}</p>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-gray-200" />

          {/* Description */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">Description</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              This premium property offers a comfortable and hassle-free living environment. Perfect for students and working professionals. Located in a prime area with easy access to public transport, markets, and IT hubs. The rent covers basic utilities along with top-notch security and daily cleaning service.
            </p>
          </div>
        </div>

        {/* Right Column (Sticky Booking Action Card) */}
        <div className="lg:col-span-1">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-xl sticky top-24">
            <p className="text-sm text-gray-400">Monthly Rent</p>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-3xl font-black text-gray-900">₹{pg.starting_price}</span>
              <span className="text-gray-500 text-sm">/ month onwards</span>
            </div>
            
            <p className="text-xs text-green-600 font-semibold mt-2">✓ Zero Brokerage • Maintenance Included</p>

            {/* Action Buttons */}
            <div className="mt-6 space-y-3">
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-xl shadow transition duration-200 flex items-center justify-center gap-2 text-center"
              >
                💬 Chat with Owner
              </a>
              <button 
                onClick={() => alert('Call feature coming soon!')}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl shadow transition duration-200 text-center"
              >
                📞 Call Now
              </button>
            </div>
            
            <p className="text-center text-xs text-gray-400 mt-4">
              Tip: Mention you found this on ApniPG for quick responses!
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
