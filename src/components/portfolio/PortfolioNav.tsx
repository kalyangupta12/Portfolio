import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function PortfolioNav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const sentinelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const sentinel = sentinelRef.current
    if (!sentinel) return
    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 },
    )
    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [])

  const links = ['Work', 'Experience', 'About', 'Contact']

  return (
    <>
      <div
        ref={sentinelRef}
        style={{ position: 'absolute', top: 0, height: '1px' }}
      />
      <motion.nav
        className={`pf-nav${scrolled ? ' pf-nav--scrolled' : ''}`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="pf-nav__inner">
          <a href="#hero" className="pf-nav__name">
            Kalyan Gupta
          </a>
          <ul className="pf-nav__links">
            {links.map((link, i) => (
              <motion.li
                key={link}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.1 + i * 0.08,
                  duration: 0.5,
                  ease: 'easeOut',
                }}
              >
                <a href={`#${link.toLowerCase()}`} className="pf-nav__link">
                  {link}
                </a>
              </motion.li>
            ))}
          </ul>
          <button
            className="pf-nav__hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
          </button>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="pf-nav__mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              {links.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="pf-nav__mobile-link"
                  onClick={() => setMenuOpen(false)}
                >
                  {link}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}
