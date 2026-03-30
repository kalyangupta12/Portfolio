import { motion } from 'framer-motion'

const skills = [
  'JavaScript',
  'TypeScript',
  'Java',
  'React',
  'Node.js',
  'Express',
  'PostgreSQL',
  'MySQL',
  'MongoDB',
  'LangChain',
  'RAG Systems',
  'Model Context Protocol',
  'Google Cloud Platform',
  'Microsoft Azure',
  'Docker',
  'REST APIs',
  'Git',
  'Linux',
  'Redis',
  'Prisma ORM',
]

const paragraphs = [
  'Software engineer with expertise in full-stack development and AI system design. Currently pursuing MCA at Dibrugarh University while building production applications for enterprise and academic clients across multiple technology stacks.',
  'I specialize in end-to-end product development — from requirements analysis and system design to deployment and monitoring. My recent focus includes building scalable web applications with React/Node.js and implementing AI workflows using LangChain, RAG architectures, and the Model Context Protocol.',
  'Seeking full-time software engineering roles where I can contribute to complex technical challenges and scalable systems. Particularly interested in distributed systems, AI/ML engineering, and building products that solve real user problems.',
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
