import { useState } from 'react'

const links = ['Features', 'About', 'Pricing', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-black/90 backdrop-blur border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 font-bold text-lg text-brand-400">
          <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="8" fill="#d4af37" />
            <text x="16" y="22" fontSize="18" textAnchor="middle" fill="black" fontFamily="Inter,sans-serif" fontWeight="700">N</text>
          </svg>
          Nayaab Studios
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-sm text-gray-400 hover:text-brand-400 transition-colors">
              {l}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+919041724969" className="text-sm font-medium text-gray-400 hover:text-brand-400 transition-colors">
            +91 90417 24969
          </a>
          <a href="#contact" className="text-sm font-semibold px-4 py-2 rounded-lg bg-brand-500 text-black hover:bg-brand-400 transition-colors">
            Book a slot
          </a>
        </div>

        <button className="md:hidden p-2 rounded-md text-gray-400 hover:text-white" onClick={() => setOpen(!open)}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-800 bg-black px-4 pb-4 pt-2 flex flex-col gap-3">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="text-sm text-gray-300 hover:text-brand-400">
              {l}
            </a>
          ))}
          <a href="#contact" className="mt-2 text-sm font-semibold px-4 py-2 rounded-lg bg-brand-500 text-black text-center hover:bg-brand-400 transition-colors">
            Book a slot
          </a>
        </div>
      )}
    </header>
  )
}
