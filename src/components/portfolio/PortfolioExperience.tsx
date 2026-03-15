import { motion } from 'framer-motion'

interface Job {
  number: string
  company: string
  role: string
  period: string
  location: string
  type: string
  bullets: string[]
}

const jobs: Job[] = [
  {
    number: '01',
    company: 'AgentsTrail AI',
    role: 'Part-time Software Developer',
    period: 'Jan 2026 — Present',
    location: 'Remote',
    type: 'Part-time',
    bullets: [
      'Integrated Composio tools into the platform — enabling agents to connect with 150+ external services and APIs out of the box.',
      'Built cron job scheduling into their private workflow builder, allowing time-triggered automations to run within their internal intranet infrastructure.',
    ],
  },
  {
    number: '02',
    company: 'Digital Solution Cell, Dibrugarh University',
    role: 'Software Development Intern',
    period: 'July 2024 — Present',
    location: 'Dibrugarh, Assam, India',
    type: 'Internship',
    bullets: [
      'Developed 9 academic journal websites with unique features and full-stack functionality (front-end & back-end) for Dibrugarh University research institutes.',
      'Created 3 alumni websites focused on responsive design, user experience, and content integration across university departments.',
      'Built specialised platforms including a Political Science and a Pharmaceutical Science journal website, emphasising UI optimisation and database management.',
      'Actively contributing to upcoming GenAI projects — gaining hands-on experience with LangChain, RAG pipelines, and Model Context Protocol (MCP).',
    ],
  },
  {
    number: '03',
    company: 'Salt Brook Academy — GA LLP',
    role: 'Part-time Software Developer',
    period: 'Dec 2024 - July 2025',
    location: 'Dibrugarh, Assam, India',
    type: 'Part-time',
    bullets: [
      'Built the HRMS module for hiresetu.in — handling employee records, attendance, leave management, and payroll workflows under the GA LLP product unit.',
      'Developed additional platform modules and features, collaborating closely with the core team on a live product used by real clients.',
    ],
  },
  {
    number: '04',
    company: 'NIELIT (National Institute of Electronics & IT)',
    role: 'Web Development Trainee',
    period: 'Jan 2024 — Mar 2024',
    location: 'Jorhat, Assam, India',
    type: 'Training',
    bullets: [
      'Completed 3-month intensive web development training programme covering HTML, CSS, JavaScript, and full-stack fundamentals.',
      'Worked on practical assignments and live projects under industry mentorship.',
    ],
  },
]

export function PortfolioExperience() {
  return (
    <section id="experience" className="pf-experience">
      <div className="pf-container">
        <motion.p
          className="pf-section-label"
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.p>

        <div className="pf-exp__list">
          {jobs.map((job, i) => (
            <ExperienceRow
              key={job.number}
              job={job}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperienceRow({
  job,
  index,
}: {
  job: Job
  index: number
}) {
  return (
    <motion.div
      className="pf-exp__row"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        delay: 0.1 + index * 0.14,
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div className="pf-exp__meta">
        <span className="pf-exp__number">{job.number}</span>
        <span className="pf-exp__period">{job.period}</span>
        <span className="pf-exp__location">{job.location}</span>
        <span className="pf-exp__badge">{job.type}</span>
      </div>

      <div className="pf-exp__content">
        <div className="pf-exp__heading">
          <h3 className="pf-exp__company">{job.company}</h3>
          <span className="pf-exp__role">{job.role}</span>
        </div>
        <ul className="pf-exp__bullets">
          {job.bullets.map((b, bi) => (
            <motion.li
              key={bi}
              className="pf-exp__bullet"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.25 + index * 0.14 + bi * 0.08,
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {b}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
