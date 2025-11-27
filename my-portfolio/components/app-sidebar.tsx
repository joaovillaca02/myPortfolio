"use client"

import { Home, User, Briefcase, Mail, Cable, X } from "lucide-react"
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { useLanguage } from "@/components/language-provider"

export function AppSidebar() {
    const { t } = useLanguage()

    // Menu items.
    const items = [
        {
            id: 'home',
            title: t('home'),
            url: "#home",
            icon: Home,
        },
        {
            id: 'about',
            title: t('about'),
            url: "#about",
            icon: User,
        },
        {
            id: 'curriculum',
            title: t('curriculum'),
            url: "#curriculum",
            icon: Briefcase,
        },
        {
            id: 'technologies',
            title: t('technologies'),
            url: "#technologies",
            icon: Cable,
        },
        {
            id: 'contact',
            title: t('contact'),
            url: "#contact",
            icon: Mail,
        },
    ]

    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className="flex items-center justify-between">
                        {t('portfolio')}
                        <SidebarTrigger className="h-6 w-6">
                            <X className="h-4 w-4" />
                        </SidebarTrigger>
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.id}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
