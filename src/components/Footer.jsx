const links = {
  Studio: ['Features', 'Pricing', 'Locations', 'Gallery'],
  Connect: ['Contact', 'Book a slot', 'Instagram', 'WhatsApp'],
  Legal: ['Privacy', 'Terms'],
}

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-500 py-16 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 text-white font-bold text-base mb-3">
              <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="8" fill="#d4af37" />
                <text x="16" y="22" fontSize="18" textAnchor="middle" fill="black" fontFamily="Inter,sans-serif" fontWeight="700">N</text>
              </svg>
              Nayaab Studios
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Professional studio space for photographers, filmmakers, and podcasters. Run by film pros in Chandigarh, Mohali & Zirakpur.
            </p>
            <a
              href="https://www.instagram.com/nayaab_studios/"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-brand-500 hover:text-brand-400 transition-colors"
            >
              @nayaab_studios
            </a>
          </div>

          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <p className="text-xs font-semibold text-gray-600 uppercase tracking-widest mb-4">{group}</p>
              <ul className="space-y-2">
                {items.map(item => (
                  <li key={item}>
                    <a href="#" className="text-sm hover:text-brand-400 transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} Nayaab Studios. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>📍 Chandigarh · Mohali · Zirakpur</span>
            <a href="tel:+919041724969" className="hover:text-brand-400 transition-colors">+91 90417 24969</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
