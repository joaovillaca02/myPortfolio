"use client"

import * as React from "react"
import ReactCountryFlag from "react-country-flag"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function LanguageToggle() {
    const { setLanguage, language } = useLanguage()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                    <ReactCountryFlag
                        countryCode={language === 'en' ? 'GB' : 'BR'}
                        svg
                        style={{
                            width: '1.5em',
                            height: '1.5em',
                        }}
                        title={language === 'en' ? 'English' : 'Português'}
                    />
                    <span className="sr-only">Toggle language</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage("en")}>
                    <ReactCountryFlag countryCode="GB" svg className="mr-2" />
                    English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("pt")}>
                    <ReactCountryFlag countryCode="BR" svg className="mr-2" />
                    Português
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
