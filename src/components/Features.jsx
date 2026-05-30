const features = [
  {
    icon: '🎬',
    title: 'Professional Studio Space',
    description: 'Spacious, fully-equipped studio designed for photo and video shoots. Clean, controlled environment so your creativity has no limits.',
  },
  {
    icon: '🖼️',
    title: 'Textured Backdrops',
    description: 'A curated collection of textured and coloured backdrops to suit any aesthetic — from minimalist to dramatic.',
  },
  {
    icon: '🎙️',
    title: 'Podcast Recording',
    description: 'Acoustically treated podcast setup with clean audio. Perfect for creators, brands, and broadcasters.',
  },
  {
    icon: '💡',
    title: 'Cinematic Lighting',
    description: 'Professional lighting rigs including softboxes, LED panels, and modifiers — set up by film pros for every shoot.',
  },
  {
    icon: '🕐',
    title: '24 × 7 Access',
    description: 'Book any slot, any time. Night shoots, early mornings, weekend sessions — the studio never closes.',
  },
  {
    icon: '💰',
    title: 'Most Affordable in Tricity',
    description: 'Premium quality at honest pricing. Get the production value you need without blowing your budget.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-brand-400 uppercase tracking-widest mb-3">What we offer</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Everything you need to create</h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            One space, endless possibilities. Whether you're a photographer, filmmaker, podcaster, or content creator — Nayaab Studios has you covered.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon, title, description }) => (
            <div
              key={title}
              className="bg-black rounded-2xl p-6 border border-gray-800 hover:border-brand-700 hover:-translate-y-0.5 transition-all group"
            >
              <div className="text-3xl mb-4">{icon}</div>
              <h3 className="text-base font-semibold text-white mb-2 group-hover:text-brand-400 transition-colors">{title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
