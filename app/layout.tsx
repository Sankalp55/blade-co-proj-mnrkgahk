import './globals.css'

import type { Metadata } from 'next'
import { Montserrat, Playfair_Display } from 'next/font/google'

import { NavbarMinimal } from '@/components/blocks/NavbarMinimal'
import { FooterMultiColumn } from '@/components/blocks/FooterMultiColumn'

const bodyFont = Montserrat({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const headingFont = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Blade & Co. | Premium Barbershop in Downtown Manhattan',
  description:
    'Classic cuts, beard grooming, hot towel shaves, and modern styling—served in a dark, moody, gold-accent Downtown Manhattan barbershop. Shop grooming essentials and book your next appointment.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${bodyFont.className} ${headingFont.variable} bg-background text-foreground`}>
        <NavbarMinimal
          logo="Blade & Co."
          navItems={[
            { label: 'Home', href: '/' },
            { label: 'Shop', href: '/shop' },
            { label: 'Services', href: '/services' },
            { label: 'Pricing', href: '/pricing' },
            { label: 'About', href: '/about' },
            { label: 'Contact', href: '/contact' },
          ]}
          ctaLabel="Book"
          ctaHref="/contact"
        />
        <main>{children}</main>
        <FooterMultiColumn
          brand="Blade & Co."
          description="Downtown Manhattan’s modern classic barbershop—precision cuts, beard mastery, and hot towel shaves in a moody, gold-lit space. Shop the essentials we use in-chair and keep your routine sharp between visits."
          columns={[
            {
              title: 'Services',
              links: [
                { label: 'Classic Cuts', href: '/services#classic-cuts' },
                { label: 'Beard Grooming', href: '/services#beard' },
                { label: 'Hot Towel Shaves', href: '/services#shaves' },
                { label: 'Modern Styling', href: '/services#modern' },
                { label: 'Pricing', href: '/pricing' },
              ],
            },
            {
              title: 'Shop',
              links: [
                { label: 'Best Sellers', href: '/shop#best-sellers' },
                { label: 'Styling', href: '/shop#styling' },
                { label: 'Beard', href: '/shop#beard' },
                { label: 'Shave', href: '/shop#shave' },
                { label: 'Tools', href: '/shop#tools' },
              ],
            },
            {
              title: 'Company',
              links: [
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '/contact' },
                { label: 'Hours & Location', href: '/contact#map' },
              ],
            },
          ]}
          copyright="© 2026 Blade & Co. All rights reserved."
        />
      </body>
    </html>
  )
}
