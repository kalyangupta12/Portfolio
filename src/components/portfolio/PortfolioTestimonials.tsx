import { motion } from 'framer-motion'

const testimonials = [
  {
    quote:
      'Kalyan is one of those rare students who doesn\'t wait around for instructions. When we tasked him with the department journals, he took complete ownership from day one and had them deployed smoothly. Incredibly dependable and quick to grasp complex technical requirements.',
    name: 'Dr. Rizwan Rehman',
    title: 'Coordinator',
    company: 'Digital Solution Cell, Dibrugarh University, Dibrugarh, Assam, India',
  },
  {
    quote:
      'We needed our internal HRMS built fast and without friction, and Kalyan delivered exactly that. He is pragmatic, understands business requirements right away, and writes clean, maintainable code that our team could easily build on top of.',
    name: 'Ashwini Dowerah',
    title: 'Director',
    company: 'GA LLP, Salt Brook Academy, Dibrugarh, Assam, India',
  },
  {
    quote:
      'Kalyan was fantastic to work with. He jumped straight into our codebase, tackled complex third-party API integrations without breaking anything, and communicated proactively. Zero handholding needed, you just gave him the goal and he shipped it.',
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
