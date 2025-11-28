"use client"

import { useLanguage } from "@/components/language-provider"
import Prism from "@/components/prism-effect"
import Squares from "@/components/squares-effect"
import { CurriculumSection } from "@/components/curriculum-section"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import Image from "next/image"
import { Download, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useForm, ValidationError } from '@formspree/react'
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiPostgresql, SiDocker, SiGit, SiPython, SiDotnet, SiRabbitmq, SiAwslambda, SiAmazonwebservices, SiSelenium, SiGo, SiFirebase, SiRedis, SiC, SiCplusplus, SiFlask } from 'react-icons/si'
import { FaGithub, FaJava, FaLinkedin } from 'react-icons/fa'

const technologyBadges = [
  { name: 'TypeScript', color: '#3178C6', icon: SiTypescript },
  { name: 'Node.js', color: '#339933', icon: SiNodedotjs },
  { name: 'React', color: '#61DAFB', icon: SiReact },
  { name: 'Next.js', color: '#E5E5E5', icon: SiNextdotjs },
  { name: 'TailwindCSS', color: '#06B6D4', icon: SiTailwindcss },
  { name: 'AWS', color: '#FF9900', icon: SiAmazonwebservices },
  { name: 'AWS Lambda', color: '#FF9900', icon: SiAwslambda },
  { name: 'Docker', color: '#2496ED', icon: SiDocker },
  { name: 'PostgreSQL', color: '#4169E1', icon: SiPostgresql },
  { name: 'Git', color: '#F05032', icon: SiGit },
  { name: 'Firebase', color: '#FFCA28', icon: SiFirebase },
  { name: 'C++', color: '#00599C', icon: SiCplusplus },
  { name: 'Java', color: '#ED8B00', icon: FaJava },
  { name: 'RabbitMQ', color: '#FF6600', icon: SiRabbitmq },
  { name: '.NET', color: '#512BD4', icon: SiDotnet },
  { name: 'Python', color: '#3776AB', icon: SiPython },
  { name: 'Flask', color: '#E5E5E5', icon: SiFlask },
  { name: 'Go', color: '#F7DF1E', icon: SiGo },
  { name: 'Redis', color: '#DC382D', icon: SiRedis },
  { name: 'Selenium', color: '#43B02A', icon: SiSelenium },
];

function ContactForm() {
  const { t } = useLanguage();
  const [state, handleSubmit] = useForm("mblvynbl");

  if (state.succeeded) {
    return (
      <div className="p-8 border rounded-lg shadow-sm bg-background/80 backdrop-blur-sm">
        <div className="text-center">
          <div className="mb-4">
            <svg
              className="mx-auto h-12 w-12 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <p className="text-lg font-medium text-green-600 dark:text-green-400">
            {t('contactSuccess')}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 border rounded-lg shadow-sm bg-background/80 backdrop-blur-sm">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name">{t('contactName')}</Label>
          <Input
            id="name"
            type="text"
            name="name"
            required
            placeholder={t('contactName')}
          />
          <ValidationError
            prefix="Name"
            field="name"
            errors={state.errors}
            className="text-sm text-destructive"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">{t('contactEmail')}</Label>
          <Input
            id="email"
            type="email"
            name="email"
            required
            placeholder={t('contactEmail')}
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="text-sm text-destructive"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">{t('contactMessage')}</Label>
          <Textarea
            id="message"
            name="message"
            required
            placeholder={t('contactMessage')}
            rows={6}
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className="text-sm text-destructive"
          />
        </div>

        <div className="flex justify-center">
          <Button
            type="submit"
            disabled={state.submitting}
            size="lg"
          >
            {state.submitting ? t('contactSubmitting') : t('contactSubmit')}
          </Button>
        </div>

        {state.errors && Object.keys(state.errors).length > 0 && (
          <p className="text-sm text-destructive text-center">
            {t('contactError')}
          </p>
        )}
      </form>
    </div>
  );
}

export default function Home() {
  const { t, language } = useLanguage()
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="relative flex flex-col min-h-screen overflow-x-hidden">
      <div className="absolute inset-0 -z-10 w-full h-full">
        <div className="sticky top-0 h-screen w-[100vw] opacity-50">
          <Prism
            animationType="3drotate"
            timeScale={0.5}
            height={2}
            baseWidth={3.5}
            scale={3}
            hueShift={1}
            colorFrequency={1}
            noise={0}
            glow={1}
            isDark={resolvedTheme === 'dark'}
          />
        </div>
      </div>

      <section id="home" className="min-h-screen flex items-center justify-center p-8">
        <div className="text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
              <Image
                src="/perfil_github.jpg"
                alt="João Villaça"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">{t('welcome')}</h1>
          <p className="text-xl text-muted-foreground mb-8">{t('subtitle')}</p>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a
              href="https://linkedin.com/in/joaovillaca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/joaovillaca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </section>

      <section id="curriculum" className="relative min-h-screen flex items-center justify-center p-8 overflow-hidden">
        <div className="absolute inset-0 w-full h-full -z-10">
          <Squares
            speed={0.5}
            squareSize={40}
            direction='diagonal'
            borderColor={resolvedTheme === 'dark' ? '#ffffff33' : '#00000022'}
            hoverFillColor={resolvedTheme === 'dark' ? '#222' : '#ddd'}
            isDark={resolvedTheme === 'dark'}
          />
        </div>
        <div className="max-w-4xl w-full">
          <h2 className="text-3xl font-bold mb-8 text-center">{t('curriculum')}</h2>
          <div className="p-8 border rounded-lg shadow-sm bg-background/80 backdrop-blur-sm">
            <CurriculumSection />
            <div className="mt-6 flex justify-center">
              <Button
                onClick={() => {
                  const cvPath = language === 'pt' ? '/JV-curriculo.pdf' : '/JV-curriculum-vitae.pdf'
                  const link = document.createElement('a')
                  link.href = cvPath
                  link.download = cvPath.split('/').pop() || 'cv.pdf'
                  document.body.appendChild(link)
                  link.click()
                  document.body.removeChild(link)
                }}
                variant="outline"
                size="lg"
              >
                <Download className="size-4" />
                {t('downloadCV')}
              </Button>
            </div>
          </div>
          <div className="max-w-4xl w-full mt-12">
          <h2 className="text-3xl font-bold mb-6 text-center">{t('technologies')}</h2>
          <div className="p-6 border rounded-lg shadow-sm bg-background/80 backdrop-blur-sm">
            <div className="flex flex-wrap gap-3 justify-center">
              {technologyBadges.map((tech) => {
                const IconComponent = tech.icon;
                return (
                  <Badge
                    key={tech.name}
                    variant="outline"
                    className="transition-all hover:scale-105 hover:shadow-md"
                    style={{
                      backgroundColor: `${tech.color}20`,
                      color: tech.color,
                      borderColor: `${tech.color}40`,
                    }}
                  >
                    {IconComponent && <IconComponent />}
                    {tech.name}
                  </Badge>
                );
              })}
            </div>
          </div>
        </div>
        </div>
      </section>

      <section id="contact" className="relative py-16 flex items-center justify-center p-8 overflow-hidden">
        <div className="max-w-2xl w-full relative z-10 pointer-events-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">{t('contact')}</h2>
            <p className="text-lg text-muted-foreground">
              {t('getInTouch')}
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Back to Top Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          size="icon"
          className="rounded-full shadow-lg hover:shadow-xl transition-all bg-primary/90 hover:bg-primary"
          title={t('backToTop')}
        >
          <ArrowUp className="size-4" />
        </Button>
      </div>
    </div>
  );
}
