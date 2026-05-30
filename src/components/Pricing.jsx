const plans = [
  {
    name: 'Half Day',
    price: 'Contact us',
    period: 'for pricing',
    description: 'Perfect for quick shoots, headshots, and short-form content sessions.',
    features: ['Up to 4 hours', 'Full studio access', 'Basic backdrop selection', 'Self-operated'],
    cta: 'Enquire now',
    highlighted: false,
  },
  {
    name: 'Full Day',
    price: 'Contact us',
    period: 'for pricing',
    description: 'Our most popular package — ideal for editorial shoots, brand campaigns, and podcast episodes.',
    features: ['Up to 8 hours', 'All backdrops included', 'Lighting setup support', 'Podcast setup available', 'Priority booking'],
    cta: 'Book a full day',
    highlighted: true,
  },
  {
    name: 'Custom / Brand',
    price: 'Custom',
    period: 'get a quote',
    description: 'Tailored packages for agencies, brands, and recurring productions.',
    features: ['Flexible hours', 'Dedicated support crew', 'Equipment consultation', 'Monthly retainer options', 'Priority access'],
    cta: 'Talk to us',
    highlighted: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-brand-400 uppercase tracking-widest mb-3">Pricing</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Flexible packages for every creator</h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Tricity's most affordable studio. DM us or call to get current rates — we'll find a package that works for you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map(({ name, price, period, description, features, cta, highlighted }) => (
            <div
              key={name}
              className={`relative flex flex-col rounded-2xl p-8 border transition-shadow ${
                highlighted
                  ? 'bg-brand-500 border-brand-400 shadow-2xl shadow-brand-500/20 text-black'
                  : 'bg-black border-gray-800 text-white hover:border-brand-800'
              }`}
            >
              {highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-xs font-semibold bg-black text-brand-400 border border-brand-700">
                  Most popular
                </span>
              )}

              <div className="mb-6">
                <p className={`text-sm font-semibold mb-1 ${highlighted ? 'text-black/70' : 'text-brand-400'}`}>{name}</p>
                <div className="flex items-end gap-1">
                  <span className={`text-3xl font-extrabold ${highlighted ? 'text-black' : 'text-white'}`}>{price}</span>
                </div>
                <p className={`text-xs mt-0.5 ${highlighted ? 'text-black/60' : 'text-gray-500'}`}>{period}</p>
                <p className={`mt-3 text-sm leading-relaxed ${highlighted ? 'text-black/80' : 'text-gray-400'}`}>{description}</p>
              </div>

              <ul className="flex-1 space-y-3 mb-8">
                {features.map(f => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <svg className={`w-4 h-4 mt-0.5 shrink-0 ${highlighted ? 'text-black/70' : 'text-brand-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={highlighted ? 'text-black/90' : 'text-gray-300'}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center py-3 rounded-xl font-semibold text-sm transition-colors ${
                  highlighted
                    ? 'bg-black text-brand-400 hover:bg-gray-900'
                    : 'bg-brand-500 text-black hover:bg-brand-400'
                }`}
              >
                {cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
