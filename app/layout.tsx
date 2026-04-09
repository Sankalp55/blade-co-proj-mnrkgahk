import './globals.css'
import type { Metadata } from 'next'
import { Montserrat, Playfair_Display } from 'next/font/google'
import { NavbarGlass } from '@/components/blocks/NavbarGlass'
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
  title:
    'Blade & Co. — Premium Barbershop & Grooming Essentials in Downtown Manhattan',
  description:
    'Blade & Co. delivers classic cuts, beard grooming, hot towel shaves, and modern styling in Downtown Manhattan. Shop premium grooming essentials online or pick up in-store.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${bodyFont.className} ${headingFont.variable} bg-background text-foreground`}
      >
        <NavbarGlass
          logo="Blade & Co."
          navItems={[
            { label: 'Home', href: '/' },
            { label: 'Shop', href: '/shop' },
            { label: 'Services', href: '/services' },
            { label: 'Pricing', href: '/pricing' },
            { label: 'About', href: '/about' },
            { label: 'Contact', href: '/contact' },
          ]}
          ctaLabel="Cart"
          ctaHref="/shop#cart"
        />
        <main>{children}</main>
        <FooterMultiColumn
          brand="Blade & Co."
          description="Downtown Manhattan grooming—classic craft, modern edge. Shop barber-approved essentials online, or coordinate a fast pickup downtown after your workday."
          columns={[
            {
              title: 'Shop',
              links: [
                { label: 'All Products', href: '/shop' },
                { label: 'Shave & Prep', href: '/shop?category=shave' },
                { label: 'Beard & Mustache', href: '/shop?category=beard' },
                { label: 'Hair Styling', href: '/shop?category=styling' },
                { label: 'Tools & Accessories', href: '/shop?category=tools' },
                { label: 'Bundles', href: '/shop?category=bundles' },
              ],
            },
            {
              title: 'Services',
              links: [
                { label: 'Service Menu', href: '/services#menu' },
                { label: 'Request an Appointment', href: '/contact?intent=booking' },
                { label: 'Memberships', href: '/pricing#memberships' },
                { label: 'Pricing', href: '/pricing' },
              ],
            },
            {
              title: 'Company',
              links: [
                { label: 'About Blade & Co.', href: '/about' },
                { label: 'Downtown Pickup', href: '/contact#location' },
                { label: 'Hours & Contact', href: '/contact' },
              ],
            },
            {
              title: 'Support',
              links: [
                { label: 'Shipping & Returns', href: '/shop#shipping-returns' },
                { label: 'Order Help', href: '/contact?intent=order-help' },
                { label: 'Product Questions', href: '/contact?intent=product' },
              ],
            },
          ]}
          copyright="© 2026 Blade & Co. All rights reserved."
        />
      </body>
    </html>
  )
}
