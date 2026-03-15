import { motion } from 'framer-motion'

const testimonials = [
  {
    quote:
      'Kalyan joined us and started delivering independently within weeks. The journal platforms he built are live across our research departments, each one tailored, reliable, and maintainable. That\'s rare for someone so early in their career.',
    name: 'Dr. Rizwan Rehman',
    title: 'Coordinator',
    company: 'Digital Solution Cell, Dibrugarh University, Dibrugarh, Assam, India',
  },
  {
    quote:
      'Kalyan built the HRMS module for hiresetu.in from the ground up: employee records, attendance, leave, payroll. He understood the product requirements quickly and shipped something the team could actually build on top of.',
    name: 'Ashwini Dowerah',
    title: 'Director',
    company: 'GA LLP, Salt Brook Academy, Dibrugarh, Assam, India',
  },
  {
    quote:
      'He integrated Composio into our platform and wired up cron jobs for the internal workflow builder. Both shipped cleanly without touching existing infrastructure. Exactly the kind of part-time contributor you want: minimal handholding, solid output.',
    name: 'Gourav Mehra',
    title: 'CMO & Strategy Lead',
    company: 'AgentsTrail AI, Chandigarh, India',
  },
]

export function PortfolioTestimonials() {
  return (
    <section className="pf-testimonials">
      <div className="pf-container">
        <motion.p
          className="pf-section-label"
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          What People Say
        </motion.p>
        <div className="pf-testimonials__grid">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="pf-testimonial"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                delay: 0.1 + i * 0.12,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <p className="pf-testimonial__quote">{t.quote}</p>
              <div className="pf-testimonial__author">
                <span className="pf-testimonial__name">{t.name}</span>
                <span className="pf-testimonial__title">
                  {t.title} · {t.company}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
