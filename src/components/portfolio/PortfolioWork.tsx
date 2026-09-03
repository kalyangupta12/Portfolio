import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface Project {
  number: string
  name: string
  stack: string[]
  description: string
  year: string
  status: string
  liveUrl?: string
  liveUrlLabel?: string
  sourceUrl?: string
  actionUrl?: string
  actionLabel?: string
}

const projects: Project[] = [
  {
    number: '01',
    name: 'AgentsTrail — AI Agent Marketplace',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Express', 'Redis', 'Claude Agent SDK', 'Composio', 'Solana'],
    description:
      'Distributed AI marketplace enabling autonomous agent-to-agent transactions. Engineered core microservices handling 5K+ daily API calls, Redis caching, x402 micropayments, and Composio tool integrations (contributions Jan 2026 – Mar 2026). Platform is currently undergoing an architectural revamp and rebuilding phase led by the next engineering team.',
    year: '2026',
    status: 'Rebuilding Phase',
    liveUrl: 'https://agentstrail.ai',
    liveUrlLabel: 'Live (V1 / Revamp) ↗',
  },
  {
    number: '02',
    name: 'AxomAI — Regional Learning & Speech Platform',
    stack: ['React', 'Node.js', 'Python', 'FastAPI', 'Speech-to-Text', 'Assamese NLP', 'LangChain', 'RAG'],
    description:
      'Regional Assamese AI initiative developed jointly in collaboration with Asst. Prof. Dr. Rizwan Rehman (CCSA, Dibrugarh University). The comprehensive regional learning platform is currently under active development and scheduled to undergo institutional testing soon. Meanwhile, the Assamese speech transcription (ASR / Speech-to-Text) and real-time translation engines are undergoing active live testing at axomai.app.',
    year: '2025–Present',
    status: 'Live Testing',
    liveUrl: 'https://axomai.app',
    liveUrlLabel: 'Live Testing ↗',
    actionUrl: 'mailto:kalyangupta2002@gmail.com?subject=AxomAI%20Platform%20Testing%20Access%20Request',
    actionLabel: 'Ask for Testing ↗',
  },
  {
    number: '03',
    name: 'SyllaMint AI — Curriculum Planner',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Gemini API', 'LangChain', 'RAG', 'Prisma', 'Clerk'],
    description:
      'Automated curriculum generation system processing 100+ educational documents to create NEP 2020-compliant syllabi with OCR parsing and structured exports. The platform does not currently have a live deployment, but the complete production codebase, pipeline architecture, and documentation are available for purchase or IP transfer.',
    year: '2025',
    status: 'Code for Sale',
    actionUrl: 'mailto:kalyangupta2002@gmail.com?subject=SyllaMint%20AI%20Codebase%20Acquisition%20Inquiry',
    actionLabel: 'Acquire Code ↗',
  },
  {
    number: '04',
    name: 'Database Lookup Protocol (DLP)',
    stack: ['React', 'TypeScript', 'MCP', 'PostgreSQL', 'Node.js'],
    description:
      'Open-source Model Context Protocol server enabling AI models to perform direct database operations. Implements secure query execution, schema introspection, and natural language to SQL translation with type-safe TypeScript architecture.',
    year: '2025',
    status: 'Open Source',
    liveUrl: 'https://dlp.devplexity.com',
    sourceUrl: 'https://github.com/kalyangupta12/database-lookup-protocol',
  },
  {
    number: '05',
    name: 'PharmaSociety DU — Alumni Network',
    stack: ['PHP', 'JavaScript', 'MySQL', 'HTML', 'CSS'],
    description:
      'Full-featured alumni networking platform supporting 400+ pharmacy students and professionals. Built robust user management system, real-time messaging, event coordination, and resource sharing with optimized MySQL queries and responsive design.',
    year: '2024',
    status: 'Live',
    liveUrl: 'https://pharmasocietydu.com',
  },
  {
    number: '06',
    name: 'DU Departmental Journal Network',
    stack: ['PHP', 'JavaScript', 'MySQL', 'HTML', 'CSS'],
    description:
      'Enterprise-scale journal management system deployed across 10+ university departments. Architected multi-tenant platform with role-based access control, automated workflow management, citation generation, and Mendeley integration serving 1,000+ researchers.',
    year: '2024-2025',
    status: 'Live',
    liveUrl: 'https://dssdu.in/projects',
  },
]

export function PortfolioWork() {

  return (
    <section id="work" className="pf-work">
      <div className="pf-container">
        <motion.p
          className="pf-section-label"
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          Selected Projects
        </motion.p>
        <div className="pf-work__grid">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.number}
              project={project}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
}: {
  project: Project
  index: number
}) {
  const [hovered, setHovered] = useState(false)
  const mouseRef = useRef({ x: 0, y: 0 })

  return (
    <motion.article
      className="pf-card"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        delay: 0.1 + index * 0.1,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onMouseMove={(e) => {
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
        mouseRef.current = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        }
        const el = e.currentTarget as HTMLElement
        el.style.setProperty('--mx', `${mouseRef.current.x}px`)
        el.style.setProperty('--my', `${mouseRef.current.y}px`)
      }}
    >
      <motion.div
        className="pf-card__accent-bar"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: hovered ? 1 : 0 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        style={{ transformOrigin: 'top' }}
      />

      <div className="pf-card__header">
        <span className="pf-card__number">{project.number}</span>
        <span className="pf-card__status">{project.status}</span>
      </div>

      <h3 className="pf-card__name">
        <motion.span
          animate={{ x: hovered ? 6 : 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          style={{ display: 'inline-block' }}
        >
          {project.name}
        </motion.span>
      </h3>

      <div className="pf-card__stack">
        {project.stack.map((tech, ti) => (
          <motion.span
            key={tech}
            className="pf-card__tag"
            initial={{ opacity: 0, scale: 0.88 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.3 + index * 0.1 + ti * 0.04,
              duration: 0.35,
            }}
          >
            {tech}
          </motion.span>
        ))}
      </div>

      <p className="pf-card__desc">{project.description}</p>

      <div className="pf-card__footer">
        <div className="pf-card__links">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              className="pf-card__link pf-card__link--live"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              {project.liveUrlLabel || 'Live ↗'}
            </a>
          )}
          {project.actionUrl && (
            <a
              href={project.actionUrl}
              className="pf-card__link pf-card__link--action"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              {project.actionLabel || 'Acquire Code ↗'}
            </a>
          )}
          {project.sourceUrl && (
            <a
              href={project.sourceUrl}
              className="pf-card__link"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              Source ↗
            </a>
          )}
        </div>
        <span className="pf-card__year">{project.year}</span>
      </div>
    </motion.article>
  )
}
