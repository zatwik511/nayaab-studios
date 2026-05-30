const stats = [
  { label: 'Instagram followers', value: '1.3K+' },
  { label: 'Posts & reels', value: '70+' },
  { label: 'Locations in Tricity', value: '3' },
  { label: 'Access hours', value: '24/7' },
]

const testimonials = [
  {
    quote: "Best part of our work — when clients walk out happier than they expected. No filters, no exaggeration.",
    source: 'Nayaab Studios team',
  },
  {
    quote: "You give us the inspiration, we create it for you — creatively, just the way you want.",
    source: '@nayaab_studios',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <p className="text-sm font-semibold text-brand-400 uppercase tracking-widest mb-3">About us</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-snug">
              Run by film pros,{' '}
              <span className="text-brand-400">built for creators</span>
            </h2>
            <p className="mt-5 text-gray-400 leading-relaxed">
              Nayaab Studios isn't just a rental space — it's a complete creative experience. We don't just give you a room with lights; we give you a space where professionals help your vision come to life.
            </p>
            <p className="mt-4 text-gray-400 leading-relaxed">
              From Sony cinematography workshops to podcast recordings and fashion shoots, our studio has hosted creators, brands, and national leaders across the Tricity region.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-400 hover:text-brand-300 transition-colors"
            >
              Book a session
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map(({ label, value }) => (
              <div key={label} className="rounded-2xl bg-gray-950 border border-brand-800 p-6">
                <p className="text-4xl font-extrabold text-brand-400">{value}</p>
                <p className="mt-1 text-sm text-gray-400">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {testimonials.map(({ quote, source }) => (
            <div key={source} className="rounded-2xl bg-gray-950 border border-gray-800 p-8">
              <p className="text-gray-300 text-sm leading-relaxed italic">"{quote}"</p>
              <p className="mt-4 text-xs font-semibold text-brand-400">— {source}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
