'use client'

import {
  Search,
  BarChart,
  CheckSquare,
  Flag,
  Home,
  SquareStack,
  Users,
  LifeBuoy,
  Cog,
  Menu,
} from 'lucide-react'
import * as Collapsible from '@radix-ui/react-collapsible'
import * as ScrollArea from '@radix-ui/react-scroll-area'

import { UsedSpaceWidget } from './UsedSpaceWidget'
import { Logo } from '@/components/Sidebar/Logo'
import { NavItem } from './NavItem'
import { Profile } from './Profile'
import * as Input from '@/components/Form/Input'
import { Button } from '../Button'

export function Sidebar() {
  return (
    <Collapsible.Root className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white p-4 data-[state=open]:bottom-0 dark:border-zinc-800 dark:bg-zinc-900 lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0">
      <ScrollArea.Root type="auto" className="h-full">
        <ScrollArea.Viewport className="h-full overflow-y-auto [&>div]:!flex [&>div]:h-full [&>div]:flex-col [&>div]:gap-5">
          <div className="flex items-center justify-between">
            <Logo />
            <Collapsible.Trigger asChild className="lg:hidden">
              <Button variant="ghost">
                <Menu className="h-6 w-6" />
              </Button>
            </Collapsible.Trigger>
          </div>

          <Collapsible.Content
            forceMount
            className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
          >
            <Input.Root>
              <Input.Prefix>
                <Search className="h-5 w-5 text-zinc-500" />
              </Input.Prefix>
              <Input.Control placeholder="Search" />
            </Input.Root>

            <nav className="space-y-0.5">
              <NavItem title="Home" icon={Home} />
              <NavItem title="Dashboard" icon={BarChart} />
              <NavItem title="Projects" icon={SquareStack} />
              <NavItem title="Tasks" icon={CheckSquare} />
              <NavItem title="Reporting" icon={Flag} />
              <NavItem title="Users" icon={Users} />
            </nav>

            <div className="mt-auto flex flex-col gap-6">
              <nav className="space-y-0.5">
                <NavItem title="Support" icon={LifeBuoy} />
                <NavItem title="Settings" icon={Cog} />
              </nav>

              <UsedSpaceWidget />

              <div className="h-px bg-zinc-200 dark:bg-zinc-700" />

              <Profile />
            </div>
          </Collapsible.Content>
        </ScrollArea.Viewport>

        <ScrollArea.ScrollAreaScrollbar
          className="flex w-1.5 translate-x-4 flex-row rounded-lg bg-zinc-100"
          orientation="vertical"
        >
          <ScrollArea.Thumb className="relative flex-1 rounded-lg bg-zinc-300" />
        </ScrollArea.ScrollAreaScrollbar>
      </ScrollArea.Root>
    </Collapsible.Root>
  )
}
