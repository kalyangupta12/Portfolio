import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'

const sentence = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04, delayChildren: 0.2 },
  },
}

const letter = {
  hidden: { opacity: 0, y: 40, rotateX: -20 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
}

function AnimatedName({ text }: { text: string }) {
  return (
    <motion.span
      className="pf-hero__name-word"
      variants={sentence}
      initial="hidden"
      animate="visible"
    >
      {text.split('').map((char, i) => (
        <motion.span key={i} variants={letter} className="pf-hero__name-char">
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  )
}

const techLogos = [
  { url: '/chatgpt.png', alt: 'ChatGPT' },
  { url: '/claude.png', alt: 'Claude' },
  { url: '/gemini.png', alt: 'Gemini' },
  { url: '/qdrant.svg', alt: 'Qdrant' },
  { url: '/postgresql.png', alt: 'PostgreSQL' },
  { url: '/prisma.svg', alt: 'Prisma' },
  { url: '/copilot.png', alt: 'Copilot' },
  { url: '/langchain.png', alt: 'Langchain' },
]

function FloatingIcon({ delay, position, startIndex }: { delay: number; position: string; startIndex: number }) {
  const [currentIndex, setCurrentIndex] = useState(startIndex)

  useEffect(() => {
    const logoInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % techLogos.length)
    }, 3000)

    return () => {
      clearInterval(logoInterval)
    }
  }, [])

  return (
    <motion.div
      className={`pf-hero__float-icon ${position}`}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.6, ease: 'backOut' }}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={techLogos[currentIndex].url}
          alt={techLogos[currentIndex].alt}
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>
    </motion.div>
  )
}

export function PortfolioHero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, 80])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section id="hero" className="pf-hero" ref={ref}>
      <motion.div className="pf-container" style={{ y, opacity }}>
        <div className="pf-hero__grid">
          <div className="pf-hero__content">
            <div className="pf-hero__name" aria-label="Kalyan Gupta">
              <div className="pf-hero__name-line">
                <AnimatedName text="Kalyan" />
              </div>
              <div className="pf-hero__name-line">
                <AnimatedName text="Gupta" />
              </div>
            </div>

            <motion.p
              className="pf-hero__role"
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.75, duration: 0.6, ease: 'easeOut' }}
            >
              Software Engineer · Full Stack Development · MCA 2027
            </motion.p>

            <motion.p
              className="pf-hero__location"
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.85, duration: 0.5, ease: 'easeOut' }}
            >
              Dibrugarh, Assam, India · Open to Remote &amp; Relocation
            </motion.p>

            <motion.p
              className="pf-hero__bio"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95, duration: 0.6, ease: 'easeOut' }}
            >
              Software engineer building scalable web applications and AI-powered systems.
              Developed 12+ production applications serving university departments and
              enterprise clients, with experience in React, Node.js, and modern AI frameworks.
            </motion.p>

            <motion.div
              className="pf-hero__socials"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5, ease: 'easeOut' }}
            >
              {[
                { label: 'GitHub', href: 'https://github.com/kalyangupta12' },
                { label: 'LinkedIn', href: 'https://linkedin.com/in/kalyangupta12' },
                { label: 'devplexity', href: 'https://devplexity.com' },
                { label: 'Resume', href: '/resume' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="pf-hero__social-link"
                  target={link.href.startsWith('/') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                >
                  {link.label}
                  <span className="pf-hero__social-arrow">↗</span>
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="pf-hero__memoji"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src="/image.png"
              alt="Kalyan Gupta memoji"
              className="pf-hero__memoji-img"
            />

            {/* Floating tech icons - static positions, cycling logos */}
            <FloatingIcon delay={1.0} position="pf-hero__float-icon--1" startIndex={0} />
            <FloatingIcon delay={1.2} position="pf-hero__float-icon--2" startIndex={2} />
            <FloatingIcon delay={1.4} position="pf-hero__float-icon--3" startIndex={4} />
            <FloatingIcon delay={1.6} position="pf-hero__float-icon--4" startIndex={6} />
          </motion.div>
        </div>

        <motion.div
          className="pf-hero__stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <StatItem value={12} label="applications deployed" delay={1.4} />
          <StatItem value={5} label="cloud certifications" delay={1.5} />
          <StatItem value={3} label="years coding experience" delay={1.6} />
        </motion.div>
      </motion.div>
    </section>
  )
}

function StatItem({
  value,
  label,
  delay,
}: {
  value: number
  label: string
  delay: number
}) {
  return (
    <div className="pf-hero__stat">
      <CountUp to={value} delay={delay} />
      <span className="pf-hero__stat-label">{label}</span>
    </div>
  )
}

function CountUp({ to, delay }: { to: number; delay: number }) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      const el = ref.current
      if (!el) return
      const duration = 1200
      const start = performance.now()

      const tick = (now: number) => {
        const elapsed = now - start
        const progress = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        el.textContent = String(Math.round(eased * to))
        if (progress < 1) requestAnimationFrame(tick)
      }

      requestAnimationFrame(tick)
    }, delay * 1000)

    return () => clearTimeout(timer)
  }, [to, delay])

  return (
    <span className="pf-hero__stat-value">
      <span ref={ref}>0</span>
    </span>
  )
}
