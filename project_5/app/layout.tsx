import './globals.css'
import { Inter } from 'next/font/google'
import BottomBar from './components/bars/bottom_bar'
import SideBar from './components/bars/sidebar'
import HeadBar from './components/bars/head_bar'
import { data } from './static/example_data'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html>
      <body>
          {children}
      </body>
    </html>
  )
}
