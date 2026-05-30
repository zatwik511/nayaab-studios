export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_50%_at_50%_-5%,rgba(212,175,55,0.12),transparent)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_40%_30%_at_80%_80%,rgba(212,175,55,0.06),transparent)]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-950 text-brand-400 border border-brand-800 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
          Tricity's most affordable studio — 24/7 access
        </span>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
          Your vision.
          <span className="block text-brand-400">Our studio.</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Professional studio space, textured backdrops, cinematic lighting, and
          podcast-ready setups — run by film pros in Chandigarh, Mohali & Zirakpur.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-brand-500 text-black font-semibold text-base hover:bg-brand-400 transition-colors shadow-lg shadow-brand-500/20"
          >
            Book your slot
          </a>
          <a
            href="#features"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gray-900 text-gray-200 font-semibold text-base hover:bg-gray-800 transition-colors border border-gray-700"
          >
            Explore the studio
          </a>
        </div>

        <div className="mt-5 flex items-center justify-center gap-6 text-sm text-gray-500">
          <span>📍 Chandigarh</span>
          <span>📍 Mohali</span>
          <span>📍 Zirakpur</span>
        </div>

        <div className="mt-16 rounded-2xl border border-gray-800 overflow-hidden shadow-2xl shadow-brand-500/5">
          <div className="bg-gradient-to-br from-gray-950 via-black to-gray-900 h-72 sm:h-96 flex items-center justify-center">
            <div className="text-center">
              <p className="text-5xl mb-4">🎥</p>
              <p className="text-gray-600 text-sm">Studio photos / reel goes here</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
