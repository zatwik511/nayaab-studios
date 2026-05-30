import { useState } from 'react'

const locations = [
  {
    city: 'Mohali',
    address: 'Sector 74, Mohali, Punjab 160055',
    mapsUrl: 'https://maps.app.goo.gl/Dkw7PEsjA9J1RqgY8',
  },
  {
    city: 'Chandigarh',
    address: 'Chandigarh, Punjab',
    mapsUrl: 'https://www.google.com/maps/search/Nayaab+Studios+Chandigarh',
  },
  {
    city: 'Zirakpur',
    address: 'Zirakpur, Punjab',
    mapsUrl: 'https://www.google.com/maps/search/Nayaab+Studios+Zirakpur',
  },
]

const inputClass = 'w-full px-4 py-2.5 rounded-lg border border-gray-700 bg-gray-900 text-white text-sm placeholder-gray-600 accent-[#d4af37] focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="py-24 bg-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-brand-400 uppercase tracking-widest mb-3">Contact</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready to shoot?</h2>
          <p className="mt-4 text-gray-400">
            DM us on Instagram or fill in the form — we'll get back to you and lock in your slot.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">Call / WhatsApp</h3>
              <a href="tel:+919041724969" className="text-3xl font-bold text-brand-400 hover:text-brand-300 transition-colors">
                +91 90417 24969
              </a>
            </div>

            <div>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-5">Our locations</h3>
              <div className="space-y-3">
                {locations.map(({ city, address, mapsUrl }) => (
                  <a
                    key={city}
                    href={mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-start gap-3 p-4 rounded-xl bg-gray-950 border border-gray-800 hover:border-brand-700 transition-colors group"
                  >
                    <span className="text-brand-400 mt-0.5">📍</span>
                    <div>
                      <p className="text-sm font-semibold text-white group-hover:text-brand-400 transition-colors">{city}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{address}</p>
                    </div>
                    <svg className="w-4 h-4 text-gray-600 group-hover:text-brand-500 ml-auto mt-0.5 shrink-0 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">Follow us</h3>
              <a
                href="https://www.instagram.com/nayaab_studios/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-brand-400 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                @nayaab_studios
              </a>
            </div>

            <div className="rounded-2xl bg-gray-950 border border-brand-800 p-5 text-sm">
              <p className="font-semibold text-brand-400 mb-1">⏰ 24 × 7 access</p>
              <p className="text-gray-400">Book any time — morning, night, weekends. We're always open.</p>
            </div>
          </div>

          {sent ? (
            <div className="rounded-2xl bg-gray-950 border border-brand-800 p-10 flex flex-col items-center justify-center text-center">
              <p className="text-4xl mb-3">🎬</p>
              <p className="text-lg font-semibold text-white">Booking request sent!</p>
              <p className="mt-2 text-gray-400 text-sm">We'll reach out to confirm your slot within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Your name</label>
                  <input type="text" required placeholder="Rahul Sharma" className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Phone / WhatsApp</label>
                  <input type="tel" required placeholder="+91 98765 43210" className={inputClass} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Type of shoot</label>
                <select required className={inputClass}>
                  <option value="">Select a category</option>
                  <option>Photography</option>
                  <option>Video / Reel</option>
                  <option>Podcast</option>
                  <option>Brand / Commercial</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Preferred location</label>
                <select required className={inputClass}>
                  <option value="">Select a location</option>
                  <option>Chandigarh</option>
                  <option>Mohali</option>
                  <option>Zirakpur</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Message (optional)</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your shoot, preferred date/time..."
                  className={inputClass + ' resize-none'}
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-brand-500 text-black font-semibold text-sm hover:bg-brand-400 transition-colors"
              >
                Send booking request
              </button>
            </form>
          )}
        </div>

        {/* Map embed */}
        <div className="mt-16 rounded-2xl overflow-hidden border border-gray-800">
          <div className="bg-gray-900 px-4 py-3 flex items-center justify-between">
            <p className="text-sm font-medium text-gray-300">Nayaab Studios — Mohali</p>
            <a
              href="https://maps.app.goo.gl/Dkw7PEsjA9J1RqgY8"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-brand-400 hover:text-brand-300 transition-colors font-medium"
            >
              Open in Google Maps ↗
            </a>
          </div>
          <iframe
            title="Nayaab Studios Mohali"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.255281286434!2d76.6872251!3d30.711223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef32621a5c8d%3A0x9f0523d9a3d600b1!2sNayaab%20Studios!5e0!3m2!1sen!2sin!4v1"
            width="100%"
            height="320"
            style={{ border: 0, display: 'block' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
