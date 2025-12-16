import Link from 'next/link'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary border-t border-accent/20 section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-heading text-accent mb-4">Sage N Salt</h3>
            <p className="text-text-light/80 text-sm leading-relaxed">
              Modern artisan Indian cuisine crafted with passion and served with elegance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading text-accent mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/menu" className="text-text-light/80 hover:text-accent transition-colors text-sm">
                Menu
              </Link>
              <Link href="/gallery" className="text-text-light/80 hover:text-accent transition-colors text-sm">
                Gallery
              </Link>
              <Link href="/catering" className="text-text-light/80 hover:text-accent transition-colors text-sm">
                Catering
              </Link>
              <Link href="/about" className="text-text-light/80 hover:text-accent transition-colors text-sm">
                About Us
              </Link>
              <Link href="/contact" className="text-text-light/80 hover:text-accent transition-colors text-sm">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-heading text-accent mb-4">Contact</h4>
            <div className="flex flex-col space-y-3 text-sm text-text-light/80">
              <div className="flex items-start space-x-2">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>Jammi Banda Rd, Yedulapuram, Khammam, Telangana 507001</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={18} className="flex-shrink-0" />
                <a href="tel:6300591870" className="hover:text-accent transition-colors">
                  6300591870
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={18} className="flex-shrink-0" />
                <a href="https://www.instagram.com/sage.nsalt" className="hover:text-accent transition-colors">
                  @sage.nsalt
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <Clock size={18} className="mt-1 flex-shrink-0" />
                <span>Daily 11:00 AM - 11:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="gold-divider mb-6"></div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-text-light/60">
          <div>
            <p>FSSAI License: 13625003000281</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-accent/60">✓ Fresh Preparation</span>
            <span>•</span>
            <span className="text-accent/60">✓ Quality Assured</span>
          </div>
          <div>
            <p>© {new Date().getFullYear()} Sage N Salt</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
