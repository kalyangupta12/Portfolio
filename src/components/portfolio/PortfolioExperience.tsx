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
    period: 'Jan 2025 — Present',
    location: 'Remote',
    type: 'Part-time',
    bullets: [
      'Integrated Composio SDK enabling agent connectivity to 150+ external APIs, implementing OAuth flows and webhook management for seamless service integration.',
      'Developed distributed cron job system for internal workflow automation, handling 500+ scheduled tasks across multiple microservices with Redis-based queue management.',
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
      'Architected and deployed 9 academic journal management systems supporting peer review workflows, user authentication, and manuscript tracking for 1,000+ researchers across university departments.',
      'Built 3 alumni networking platforms with role-based access control, event management, and content publishing features serving 500+ alumni and students.',
      'Optimized database performance reducing page load times by 40% through query optimization and MySQL indexing for high-traffic portal pages.',
      'Contributing to AI/ML research initiatives involving LangChain integration for document processing and RAG-based knowledge retrieval systems.',
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
      'Developed comprehensive HRMS module for hiresetu.in handling employee lifecycle management, payroll automation, and leave tracking for 100+ employees across multiple client organizations.',
      'Implemented real-time attendance system with geofencing capabilities and automated report generation reducing manual HR processing time by 60%.',
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
