export default function Testimonials() {
  const cards = [
    {
      rating: 5,
      text: "Ty tutama kai arra exploding. Neo trading has been a life‑boosting pleasure!",
      name: "Client One",
      role: "Crypto Investor",
      avatar: "/avatar1.png",
    },
    {
      rating: 5,
      text: "Ty tutama kai arra exploding. Neo trading has been a life‑boosting pleasure!",
      name: "Client Two",
      role: "Stock Analyst",
      avatar: "/avatar2.png",
    },
  ];

  return (
    <section className="w-full pb-10 pt-14 bg-gradient-to-br from-[#581C87] via-[#1E3A8A] to-[#0F172A] text-white">
      <div className="flex flex-col items-center gap-2">
        <span className="bg-white/20 px-1 py-1 rounded-full text-sm">Our Real Stories</span>
        <h2 className="text-4xl font-bold text-center">
          Real Results,<span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#F472B6] to-[#C084FC]">
            {" "}
            Real Impact
          </span>
        </h2>

        <div className="flex gap-6 mt-5">
          {cards.map((item, index) => (
            <div
              key={index}
              className="w-80 backdrop-blur-xl bg-white/10 rounded-2xl p-6 shadow-lg"
            >
              <div className="flex gap-1 mb-3">
                {Array(item.rating)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
              </div>

              <p className="text-sm leading-relaxed mb-5">{item.text}</p>

              <div className="flex items-center gap-3 mt-4">
                <div className="w-10 h-10 rounded-full bg-white/20 overflow-hidden">
                  <img src={item.avatar} alt="avatar" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold">{item.name}</h4>
                  <p className="text-xs opacity-70">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-2 mt-6">
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <div className="w-2 h-2 bg-white/40 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
