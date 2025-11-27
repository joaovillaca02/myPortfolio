"use client"

import { SidebarTrigger, useSidebar } from "./sidebar"

export function ConditionalSidebarTrigger() {
  const { state } = useSidebar();

  // Só mostrar o botão quando o sidebar estiver collapsed (retraído)
  if (state === 'expanded') {
    return null;
  }

  return <SidebarTrigger />;
}
