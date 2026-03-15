import { motion } from 'framer-motion'

const items = [
  'JavaScript',
  'Java',
  'TypeScript',
  'PostgreSQL',
  'Docker',
  'WebRTC',
  'Redis',
  'React',
  'Python',
  'Claude Agent SDK',
  'OpenAI Agent SDK',
  'LangChain',
  'AWS',
  'Node.js',
  'RAG',
  'MCP',
  'Linux',
]

const repeated = [...items, ...items, ...items]

export function PortfolioMarquee() {
  return (
    <div className="pf-marquee" aria-hidden="true">
      <motion.div
        className="pf-marquee__track"
        animate={{ x: ['0%', '-33.333%'] }}
        transition={{ duration: 22, ease: 'linear', repeat: Infinity }}
      >
        {repeated.map((item, i) => (
          <span key={i} className="pf-marquee__item">
            {item}
            <span className="pf-marquee__dot" />
          </span>
        ))}
      </motion.div>
    </div>
  )
}
