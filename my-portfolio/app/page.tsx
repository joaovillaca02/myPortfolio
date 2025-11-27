"use client"

import { useLanguage } from "@/components/language-provider"
import Prism from "@/components/prism-effect"
import ElectricBorder from "@/components/electric-border"
import Lightning from "@/components/lightning-effect"
import Squares from "@/components/squares-effect"
import Galaxy from "@/components/galaxy-effect"
import { CurriculumSection } from "@/components/curriculum-section"
import LogoLoop from "@/components/logo-loop"
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
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiPostgresql, SiDocker, SiGit, SiPython, SiJavascript, SiDotnet, SiRabbitmq, SiAwslambda, SiSpringboot, SiAmazonwebservices, SiSelenium, SiGo, SiGithubactions, SiFirebase, SiRedis, SiC, SiCplusplus, SiFlask } from 'react-icons/si'
import { FaGithub, FaJava, FaLinkedin } from 'react-icons/fa'

const techLogosTop = [
  { node: <SiReact className="text-[#61DAFB]" />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript className="text-[#3178C6]" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss className="text-[#06B6D4]" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiNodedotjs className="text-[#339933]" />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiPostgresql className="text-[#4169E1]" />, title: "PostgreSQL", href: "https://www.postgresql.org" },
  { node: <SiDocker className="text-[#2496ED]" />, title: "Docker", href: "https://www.docker.com" },
  { node: <SiGit className="text-[#F05032]" />, title: "Git", href: "https://git-scm.com" },
  { node: <SiJavascript className="text-[#F7DF1E]" />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <SiPython className="text-[#3776AB]" />, title: "Python", href: "https://www.python.org" },
];

const techLogosBottom = [
  { node: <SiDotnet className="text-[#61DAFB]" />, title: "DotNet", href: "https://dotnet.microsoft.com" },
  { node: <SiRabbitmq className="text-[#61DAFB]" />, title: "RabbitMQ", href: "https://www.rabbitmq.com" },
  { node: <SiAwslambda className="text-[#3178C6]" />, title: "AWS Lambda", href: "https://aws.amazon.com/lambda/" },
  { node: <SiSpringboot className="text-[#06B6D4]" />, title: "Spring Boot", href: "https://spring.io/projects/spring-boot" },
  { node: <SiAmazonwebservices className="text-[#339933]" />, title: "AWS", href: "https://aws.amazon.com" },
  { node: <SiGithubactions className="text-[#4169E1]" />, title: "Github Actions", href: "https://github.com/features/actions" },
  { node: <SiSelenium className="text-[#2496ED]" />, title: "Selenium", href: "https://www.selenium.dev" },
  { node: <SiGo className="text-[#F05032]" />, title: "Go", href: "https://golang.org" },
  { node: <SiFirebase className="text-[#F7DF1E]" />, title: "Firebase", href: "https://firebase.google.com" },
  { node: <SiRedis className="text-[#3776AB]" />, title: "Redis", href: "https://redis.io" },
];

const technologyBadges = [
  { name: 'TypeScript', color: '#3178C6', icon: SiTypescript },
  { name: 'Node.js', color: '#339933', icon: SiNodedotjs },
  { name: 'NextJS', color: '#E5E5E5', icon: SiNextdotjs },
  { name: 'C', color: '#A8B9CC', icon: SiC },
  { name: 'C++', color: '#00599C', icon: SiCplusplus },
  { name: 'Java', color: '#ED8B00', icon: FaJava },
  { name: 'AWS', color: '#FF9900', icon: SiAmazonwebservices },
  { name: 'PostgreSQL', color: '#4169E1', icon: SiPostgresql },
  { name: 'RabbitMQ', color: '#FF6600', icon: SiRabbitmq },
  { name: 'TailwindCSS', color: '#06B6D4', icon: SiTailwindcss },
  { name: '.NET', color: '#512BD4', icon: SiDotnet },
  { name: 'Python', color: '#3776AB', icon: SiPython },
  { name: 'Flask', color: '#E5E5E5', icon: SiFlask },
  { name: 'Git', color: '#F05032', icon: SiGit },
  { name: 'Firebase', color: '#FFCA28', icon: SiFirebase },
  { name: 'Redis', color: '#DC382D', icon: SiRedis },
  { name: 'AWS Lambda', color: '#FF9900', icon: SiAwslambda },
  { name: 'Docker', color: '#2496ED', icon: SiDocker },
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

      <section id="about" className="relative min-h-screen flex items-center justify-center bg-muted/30 p-8 backdrop-blur-sm overflow-hidden">
        <div className="absolute inset-0 w-full h-full -z-10">
          <Lightning
            hue={220}
            xOffset={-1.5}
            speed={0.5}
            intensity={0.5}
            size={0.5}
            isDark={resolvedTheme === 'dark'}
          />
        </div>
        <ElectricBorder
          color={resolvedTheme === 'dark' ? "#7df9ff" : "#0066cc"}
          speed={1}
          chaos={1}
          thickness={2}
          style={{ borderRadius: 16 }}
        >
          <div className="max-w-2xl p-8 bg-background/80 backdrop-blur-md rounded-2xl">
            <h2 className="text-3xl font-bold mb-6">{t('aboutMe')}</h2>
            <p className="text-lg text-muted-foreground whitespace-pre-line text-justify">
              {t('aboutText')}
            </p>
          </div>
        </ElectricBorder>
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
        </div>
      </section>

      <section id="technologies" className="relative min-h-screen flex items-center justify-center bg-muted/30 p-8 backdrop-blur-sm overflow-hidden">
        <div className="absolute top-8 left-0 right-0 h-[clamp(80px,10vh,120px)] -z-10 opacity-20">
          <LogoLoop
            logos={techLogosTop}
            speed={120}
            direction="left"
            logoHeight={48}
            gap={40}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor={resolvedTheme === 'dark' ? '#0b0b0b' : '#ffffff'}
            ariaLabel="Technology stack"
          />
        </div>
        <div className="max-w-4xl w-full">
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
        <div className="absolute bottom-8 left-0 right-0 h-[clamp(80px,10vh,120px)] opacity-20 -z-10">
          <LogoLoop
            logos={techLogosBottom}
            speed={120}
            direction="right"
            logoHeight={48}
            gap={40}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor={resolvedTheme === 'dark' ? '#0b0b0b' : '#ffffff'}
            ariaLabel="Technology stack"
          />
        </div>
      </section>

      <section id="contact" className="relative min-h-screen flex items-center justify-center p-8 overflow-hidden">
        <div className="absolute inset-0 left-0 right-0 w-full h-full -z-10 pointer-events-none">
          <div className="w-full h-full">
            <Galaxy
              density={1.5}
              glowIntensity={undefined}
              saturation={undefined}
              hueShift={undefined}
              isDark={resolvedTheme === 'dark'}
              transparent={true}
            />
          </div>
        </div>
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
