export default function Testimonials() {
  const cards = [
    {
      rating: 5,
      text: "Ty tutama kai arra exploding. Neo trading has been a life-boosting pleasure!",
      name: "Client One",
      role: "Crypto Investor",
      avatar: "/avatar1.png",
    },
    {
      rating: 5,
      text: "Ty tutama kai arra exploding. Neo trading has been a life-boosting pleasure!",
      name: "Client Two",
      role: "Stock Analyst",
      avatar: "/avatar2.png",
    },
  ];

  return (
    <section className="w-full py-12 sm:py-16 bg-gradient-to-br from-[#581C87] via-[#1E3A8A] to-[#0F172A] text-white">
      <div className="flex flex-col items-center px-4 text-center">
        
        {/* Header */}
        <span className="bg-white/20 px-3 py-1 rounded-full text-xs sm:text-sm">
          Our Real Stories
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 leading-snug">
          Real Results,
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#F472B6] to-[#C084FC]">
            Real Impact
          </span>
        </h2>

        {/* Cards */}
        <div className="
          mt-8 
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          gap-6 
          justify-center
        ">
          {cards.map((item, index) => (
            <div
              key={index}
              className="w-full sm:w-72 md:w-80 mx-auto backdrop-blur-xl bg-white/10 rounded-2xl p-6 shadow-lg"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {Array(item.rating)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
              </div>

              {/* Text */}
              <p className="text-sm leading-relaxed mb-5">
                {item.text}
              </p>

              {/* Avatar */}
              <div className="flex items-center gap-3 mt-4">
                <div className="w-10 h-10 rounded-full bg-white/20 overflow-hidden">
                  <img
                    src={item.avatar}
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="text-left">
                  <h4 className="text-sm font-semibold">{item.name}</h4>
                  <p className="text-xs opacity-70">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex gap-2 mt-6">
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <div className="w-2 h-2 bg-white/40 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
