"use client"

import { useLanguage } from "@/components/language-provider"
import Prism from "@/components/prism-effect"
import ElectricBorder from "@/components/electric-border"
import Lightning from "@/components/lightning-effect"
import Squares from "@/components/squares-effect"
import { CurriculumSection } from "@/components/curriculum-section"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import Image from "next/image"

export default function Home() {
  const { t } = useLanguage()
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
          <p className="text-xl text-muted-foreground">{t('subtitle')}</p>
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
          </div>
        </div>
      </section>

      <section id="technologies" className="min-h-screen flex items-center justify-center bg-muted/30 p-8 backdrop-blur-sm">
        <div className="max-w-4xl w-full">
          <h2 className="text-3xl font-bold mb-6 text-center">{t('technologies')}</h2>
          <div className="p-6 border rounded-lg shadow-sm bg-background/50 backdrop-blur-sm">
            <p className="text-muted-foreground">Technologies content goes here.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center p-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">{t('contact')}</h2>
          <p className="text-lg text-muted-foreground mb-4">
            {t('getInTouch')}
          </p>
          <a href="mailto:email@example.com" className="text-primary hover:underline">
            email@example.com
          </a>
        </div>
      </section>
    </div>
  );
}
