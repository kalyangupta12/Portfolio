import { motion } from 'framer-motion'

interface Degree {
  number: string
  institution: string
  degree: string
  field: string
  period: string
  location: string
  note: string
  cgpa?: string
}

const education: Degree[] = [
  {
    number: '01',
    institution: 'Dibrugarh University',
    degree: 'MCA',
    field: 'Master of Computer Applications',
    period: '2025 — 2027',
    location: 'Dibrugarh, Assam',
    note: 'Currently pursuing postgraduate degree in Computer Applications. Focus areas: Advanced Algorithms, Distributed Systems, AI/ML, and Software Engineering.',
  },
  {
    number: '02',
    institution: 'Dibrugarh University',
    degree: 'BCA',
    field: 'Bachelor of Computer Applications',
    period: '2022 — 2025',
    location: 'Dibrugarh, Assam',
    note: 'Core coursework: Data Structures, Operating Systems, Database Management Systems, Web Technologies, Computer Networks, Object-Oriented Programming (Java).',
    cgpa: '8.81',
  },
]

interface Cert {
  name: string
  issuer: string
  year: string
}

const certs: Cert[] = [
  {
    name: 'Google Cloud Computing Foundations: Networking',
    issuer: 'Google Cloud',
    year: '2024',
  },
  {
    name: 'Google Cloud Computing Foundations: Infrastructure',
    issuer: 'Google Cloud',
    year: '2024',
  },
  {
    name: 'Build and Secure Networks in Google Cloud',
    issuer: 'Google Cloud',
    year: '2024',
  },
  {
    name: 'Perform Foundational Infrastructure Tasks in Google Cloud',
    issuer: 'Google Cloud',
    year: '2024',
  },
  {
    name: 'Cloud Bootcamp',
    issuer: 'Google for Developers',
    year: '2024',
  },
]

export function PortfolioEducation() {
  return (
    <section id="education" className="pf-education">
      <div className="pf-container">
        <motion.p
          className="pf-section-label"
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.p>

        <div className="pf-edu__layout">
          <div className="pf-edu__degrees">
            {education.map((edu, i) => (
              <motion.div
                key={edu.number}
                className="pf-edu__row"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  delay: 0.1 + i * 0.14,
                  duration: 0.65,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div className="pf-edu__meta">
                  <span className="pf-edu__number">{edu.number}</span>
                  <span className="pf-edu__period">{edu.period}</span>
                  <span className="pf-edu__location">{edu.location}</span>
                </div>
                <div className="pf-edu__content">
                  <h3 className="pf-edu__institution">{edu.institution}</h3>
                  <p className="pf-edu__degree">
                    <span className="pf-edu__degree-type">{edu.degree}</span>{' '}
                    — {edu.field}
                    {edu.cgpa && <span className="pf-edu__cgpa">{edu.cgpa}&nbsp;CGPA</span>}
                  </p>
                  <p className="pf-edu__note">{edu.note}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="pf-edu__certs"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="pf-edu__certs-label">Google Cloud Badges</p>
            <div className="pf-edu__certs-list">
              {certs.map((cert, i) => (
                <motion.div
                  key={cert.name}
                  className="pf-edu__cert-item"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.4 + i * 0.1,
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ x: 4 }}
                >
                  <span className="pf-edu__cert-name">{cert.name}</span>
                  <span className="pf-edu__cert-meta">
                    {cert.issuer} · {cert.year}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
