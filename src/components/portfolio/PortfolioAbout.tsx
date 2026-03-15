import { motion } from 'framer-motion'

const skills = [
  'JavaScript',
  'Java',
  'React',
  'Node.js',
  'PostgreSQL',
  'Express',
  'C/C++',
  'LangChain',
  'RAG',
  'MCP',
  'GCP',
  'Azure',
  'Docker',
  'REST APIs',
  'Git',
  'Linux',
]

const paragraphs = [
  'I build full-stack web applications and explore what\'s possible with generative AI. Currently in my MCA at Dibrugarh University — with a BCA foundation and 12 production websites shipped during my ongoing internship at the Digital Solution Cell.',
  'I\'m comfortable owning problems end-to-end — from unclear requirement to deployed product. I\'ve shipped across MERN, GenAI, and PHP stacks, and I ask the questions that need asking before writing a single line.',
  'Looking for full-time or part-time opportunities in web development or AI engineering. Open to startups, product companies, and any team that ships real things for real users.',
]

export function PortfolioAbout() {
  return (
    <section id="about" className="pf-about">
      <div className="pf-container">
        <motion.p
          className="pf-section-label"
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          About
        </motion.p>
        <div className="pf-about__cols">
          <div className="pf-about__bio">
            {paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  delay: 0.1 + i * 0.12,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {p}
              </motion.p>
            ))}
          </div>

          <motion.div
            className="pf-about__skills"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: 0.35, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="pf-about__skills-label">Comfortable with</p>
            <div className="pf-about__skills-grid">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  className="pf-about__skill-item"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.04, duration: 0.4 }}
                  whileHover={{ color: 'var(--color-accent)', x: 4 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
