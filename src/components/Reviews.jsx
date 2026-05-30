export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-gray-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-brand-400 uppercase tracking-widest mb-3">Reviews</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">What our clients say</h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Real feedback from creators, brands, and podcasters who've shot with us.
          </p>
        </div>

        {/* Clip wrapper hides the Elfsight badge at the bottom */}
        <div style={{ overflow: 'hidden', paddingBottom: '1px' }}>
          <div
            className="elfsight-app-c4ab6b3b-faaa-4b25-8596-2090a6dfd21a"
            data-elfsight-app-lazy
            style={{ marginBottom: '-48px' }}
          />
        </div>
      </div>
    </section>
  )
}
