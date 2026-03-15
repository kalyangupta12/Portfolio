import { motion } from 'framer-motion'

export function PortfolioContact() {
  return (
    <section id="contact" className="pf-contact">
      <div className="pf-container">
        <motion.p
          className="pf-section-label"
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.p>
        <div className="pf-contact__inner">
          <motion.div
            className="pf-contact__headline"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="pf-contact__title">Let's build<br />something.</h2>
            <p className="pf-contact__sub">
              Open to full-time roles, part-time contracts, and freelance work
              in web development and AI engineering. If you have a problem worth
              solving, I want to hear about it.
            </p>
          </motion.div>

          <motion.div
            className="pf-contact__actions"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href="mailto:kalyangupta2002@gmail.com"
              className="pf-contact__email-cta"
            >
              kalyangupta2002@gmail.com
            </a>
            <div className="pf-contact__meta">
              <span className="pf-contact__status">
                Open to Work — Available Now
              </span>
              <span className="pf-contact__location">
                Charaideo, Assam, India · Open to Remote &amp; Relocation
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
