import { createFileRoute } from '@tanstack/react-router'
import {
  PortfolioNav,
  PortfolioHero,
  PortfolioMarquee,
  PortfolioWork,
  PortfolioAbout,
  PortfolioExperience,
  PortfolioEducation,
  PortfolioTestimonials,
  PortfolioContact,
  PortfolioFooter,
} from '@/components/portfolio'
import '@/components/portfolio/portfolio.css'

export const Route = createFileRoute('/_public/')({
  component: Index,
})

function Index() {
  return (
    <main>
      <PortfolioNav />
      <PortfolioHero />
      <PortfolioMarquee />
      <PortfolioWork />
      <PortfolioAbout />
      <PortfolioExperience />
      <PortfolioEducation />
      <PortfolioTestimonials />
      <PortfolioContact />
      <PortfolioFooter />
    </main>
  )
}
