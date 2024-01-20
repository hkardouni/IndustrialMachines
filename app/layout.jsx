import Link from 'next/link'
import './globals.css'
import BYEKAN from 'next/font/local'
import Navbar from './components/Navbar'

const yekan = BYEKAN({ src: './components/BYEKAN.ttf' })

export const metadata = {
  title: 'سامانه خرید و فروش ماشین آلات صنعتی',
  description: 'Industrial Machines',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={yekan.className}>
        <Navbar />
        <br></br>
        {children}
      </body>
    </html>
  )
}
