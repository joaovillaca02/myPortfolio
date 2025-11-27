"use client"

import { Home, User, Briefcase, Mail, Cable } from "lucide-react"
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
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
                    <SidebarGroupLabel>{t('portfolio')}</SidebarGroupLabel>
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
