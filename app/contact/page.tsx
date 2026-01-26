import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function ContactPage() {
  return (
    <>
      <Navigation />

      <main className="flex-grow pt-20">
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-light font-serif mb-4">Get in Touch</h1>
              <p className="text-gray-600">We'd love to hear from you</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-serif mb-6">Visit Our Atelier</h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      <strong>HOSEKI</strong><br />
                      Medina of Tunis<br />
                      Tunis, Tunisia
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-4">Contact Details</h3>
                  <div className="space-y-2 text-gray-600">
                    <p>Email: info@hoseki-jewelry.com</p>
                    <p>Phone: +216 XX XXX XXX</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-4">Follow Us</h3>
                  <a
                    href="https://www.instagram.com/hosekiaccessories/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:text-black transition-colors"
                  >
                    @hosekiaccessories
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full border border-black/20 px-4 py-3 focus:border-gold focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      className="w-full border border-black/20 px-4 py-3 focus:border-gold focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <textarea
                      required
                      rows={6}
                      className="w-full border border-black/20 px-4 py-3 focus:border-gold focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-black text-white py-4 text-xs uppercase tracking-wide hover:bg-gold transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
