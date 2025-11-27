"use client"

import { useLanguage } from "@/components/language-provider"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { ExternalLink } from "lucide-react"

interface EducationEntry {
    title: string
    institution: string
    date: string
    description: string
}

interface ExperienceEntry {
    title: string
    company: string
    startDate: string
    endDate: string
    description: string
}

interface CertificateEntry {
    title: string
    issuer: string
    date: string
    description: string
    link: string
    image?: string
}

export function CurriculumSection() {
    const { t } = useLanguage()

    const curriculumData = t('curriculumData') as unknown as {
        education: EducationEntry[]
        experience: ExperienceEntry[]
        certificates: CertificateEntry[]
    }

    return (
        <div className="space-y-12">
            {/* Education */}
            <div>
                <h3 className="text-2xl font-bold mb-6">{t('education')}</h3>
                <div className="space-y-6">
                    {curriculumData.education.map((item, index) => (
                        <div key={index} className="border-l-2 border-primary/50 pl-4">
                            <div className="flex justify-between items-start mb-2">
                                <div className="flex-1">
                                    <h4 className="text-lg font-semibold">{item.title}</h4>
                                    <p className="text-sm text-muted-foreground">{item.institution}</p>
                                </div>
                                <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">{item.date}</span>
                            </div>
                            <p className="text-muted-foreground pl-4">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Professional Experience */}
            <div>
                <h3 className="text-2xl font-bold mb-6">{t('experience')}</h3>
                <div className="space-y-6">
                    {curriculumData.experience.map((item, index) => (
                        <div key={index} className="border-l-2 border-primary/50 pl-4">
                            <div className="flex justify-between items-start mb-2">
                                <div className="flex-1">
                                    <h4 className="text-lg font-semibold">{item.title}</h4>
                                    <p className="text-sm text-muted-foreground">{item.company}</p>
                                </div>
                                <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">
                                    {item.startDate} - {item.endDate}
                                </span>
                            </div>
                            <p className="text-muted-foreground pl-4 text-justify">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Certificates */}
            <div>
                <h3 className="text-2xl font-bold mb-6">{t('certificates')}</h3>
                <div className="space-y-6">
                    {curriculumData.certificates.map((item, index) => (
                        <div key={index} className="border-l-2 border-primary/50 pl-4">
                            <div className="flex justify-between items-start mb-2">
                                <div className="flex-1 flex items-start gap-3">
                                    {item.image && (
                                        <Avatar className="w-12 h-12 flex-shrink-0">
                                            <AvatarImage src={item.image} alt={item.title} />
                                            <AvatarFallback>{item.title.substring(0, 2)}</AvatarFallback>
                                        </Avatar>
                                    )}
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2">
                                            <h4 className="text-lg font-semibold">{item.title}</h4>
                                            {item.link && item.link !== '#' && (
                                                <a
                                                    href={item.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-primary hover:text-primary/80 transition-colors"
                                                >
                                                    <ExternalLink className="w-4 h-4" />
                                                </a>
                                            )}
                                        </div>
                                        <p className="text-sm text-muted-foreground">{item.issuer}</p>
                                    </div>
                                </div>
                                <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">{item.date}</span>
                            </div>
                            <p className="text-muted-foreground pl-4">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
