'use client'

import { motion } from 'framer-motion'
import { Users, Briefcase, PartyPopper } from 'lucide-react'

export default function CateringPage() {
  const services = [
    {
      icon: <Briefcase className="text-accent" size={40} />,
      title: 'Office Catering',
      description: 'Fresh meals delivered for team lunches, meetings, and corporate events.',
      quantities: ['10-20 people', '20-50 people', '50+ people'],
      note: 'Daily lunch orders available with advance notice',
    },
    {
      icon: <PartyPopper className="text-accent" size={40} />,
      title: 'Parties & Events',
      description: 'Birthday parties, anniversaries, and celebrations—we handle the food, you enjoy the moment.',
      quantities: ['Small gatherings (15-30)', 'Medium events (30-60)', 'Large parties (60+)'],
      note: 'Customizable menu options available',
    },
    {
      icon: <Users className="text-accent" size={40} />,
      title: 'Bulk Biryani Orders',
      description: 'Our signature biryanis in bulk quantities for any occasion.',
      quantities: ['5kg minimum', '10kg', '20kg+'],
      note: '24-hour advance notice required',
    },
  ]

  return (
    <div className="min-h-screen pt-24 section-padding">
      <div className="container-custom max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-heading text-accent text-center mb-4">
            Catering Services
          </h1>
          <div className="gold-divider max-w-xs mx-auto mb-8"></div>

          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="text-lg text-text-light/80">
              Same quality, larger quantities. We prepare everything fresh for your event—just tell us how many people and when.
            </p>
          </div>

          <div className="space-y-8 mb-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-primary/30 border border-accent/20 rounded-lg p-8 hover:border-accent/50 transition-all"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 mt-1">{service.icon}</div>
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-heading text-accent mb-3">
                      {service.title}
                    </h2>
                    <p className="text-text-light/80 mb-4">{service.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {service.quantities.map((qty, i) => (
                        <span
                          key={i}
                          className="text-sm bg-accent/10 text-accent px-3 py-1 rounded border border-accent/30"
                        >
                          {qty}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-text-light/60 italic">{service.note}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* What We Provide */}
          <div className="bg-accent/10 border border-accent/30 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-heading text-accent mb-4 text-center">What's Included</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-text-light/80">
              <li className="flex items-center space-x-2">
                <span className="text-accent">•</span>
                <span>Fresh preparation on order day</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-accent">•</span>
                <span>Quality packaging for transport</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-accent">•</span>
                <span>Disposable plates & cutlery (on request)</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-accent">•</span>
                <span>Delivery available for large orders</span>
              </li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="bg-primary border border-accent/20 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-heading text-accent mb-4">Get a Quote</h3>
            <p className="text-text-light/80 mb-6">
              Tell us your event details, number of people, and preferred date. We'll work out the rest.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:6300591870"
                className="btn-primary inline-flex items-center justify-center"
              >
                Call: 6300591870
              </a>
              <a
                href={`https://wa.me/6300591870?text=${encodeURIComponent('Hi! I need catering for an event.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center justify-center"
              >
                WhatsApp Us
              </a>
            </div>
            <p className="text-sm text-text-light/60 mt-4">Typically respond within 2 hours</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
