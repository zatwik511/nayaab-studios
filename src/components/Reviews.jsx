const reviews = [
  {
    name: 'Saurabh Sharma',
    initials: 'S',
    rating: 5,
    text: 'Really like their work, loved the vibe — great team! 💗',
    color: 'bg-gray-600',
  },
  {
    name: 'Sandeep Kumar Saluja',
    initials: 'SK',
    rating: 5,
    text: 'Very good studio in the region. Highly recommended for anyone looking for a professional setup.',
    color: 'bg-amber-700',
  },
  {
    name: 'Ajay',
    initials: 'A',
    rating: 5,
    text: 'I had a great experience working with Nayaab Studio. The space is well-equipped and the team is very professional.',
    color: 'bg-red-700',
  },
]

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? 'text-brand-400' : 'text-gray-700'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-brand-400 uppercase tracking-widest mb-3">Reviews</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">What our clients say</h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Real feedback from creators, brands, and podcasters who've shot with us.
          </p>

          {/* Overall rating */}
          <div className="mt-6 inline-flex items-center gap-3 px-5 py-3 rounded-full bg-black border border-brand-800">
            <Stars count={5} />
            <span className="text-white font-bold text-sm">5.0</span>
            <span className="text-gray-500 text-sm">on Google</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map(({ name, initials, rating, text, color }) => (
            <div
              key={name}
              className="flex flex-col gap-4 bg-black rounded-2xl p-6 border border-gray-800 hover:border-brand-800 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${color} flex items-center justify-center text-white text-sm font-bold shrink-0`}>
                    {initials}
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold leading-tight">{name}</p>
                    <p className="text-gray-500 text-xs mt-0.5">Google review</p>
                  </div>
                </div>
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </div>

              <Stars count={rating} />

              <p className="text-gray-300 text-sm leading-relaxed flex-1">"{text}"</p>
            </div>
          ))}
        </div>

        <p className="text-center mt-8 text-xs text-gray-600">
          Reviews sourced from Google. <a href="https://maps.app.goo.gl/Dkw7PEsjA9J1RqgY8" target="_blank" rel="noreferrer" className="text-brand-700 hover:text-brand-500 transition-colors">See all on Google Maps ↗</a>
        </p>
      </div>
    </section>
  )
}
