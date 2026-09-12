export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "Software Engineer",
      review: "ApnaPG se mujhe Sector 62 Noida me bina kisi brokerage ke ek shandar room mil gaya. Verification process bahut fast tha!",
      rating: "⭐⭐⭐⭐⭐",
      avatar: "https://unsplash.com"
    },
    {
      id: 2,
      name: "Ananya Iyer",
      role: "College Student",
      review: "Girls PG dhoondhna itna aasan pehle kabhi nahi tha. Rent details aur amenities sab clear likhi thi. Highly recommended!",
      rating: "⭐⭐⭐⭐⭐",
      avatar: "https://unsplash.com"
    },
    {
      id: 3,
      name: "Amit Patel",
      role: "Data Analyst",
      review: "Owner ka contact number direct mil jata hai WhatsApp par baat karne ke liye. Time aur paise dono ki bachat hui.",
      rating: "⭐⭐⭐⭐⭐",
      avatar: "https://unsplash.com"
    }
  ];

  return (
    <div className="bg-blue-50 py-16 px-4 my-16 rounded-3xl">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">What Our Happy Residents Say</h2>
          <p className="text-gray-500 mt-2 text-md">Real stories from students and working professionals.</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex flex-col justify-between hover:scale-105 transition duration-300">
              <div>
                <div className="text-yellow-400 mb-3 text-sm">{item.rating}</div>
                <p className="text-gray-600 italic text-sm leading-relaxed">"{item.review}"</p>
              </div>
              
              <div className="flex items-center gap-4 mt-6 border-t pt-4">
                <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full object-cover border-2 border-blue-500" />
                <div>
                  <h4 className="font-bold text-gray-800 text-sm">{item.name}</h4>
                  <p className="text-xs text-gray-400">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
