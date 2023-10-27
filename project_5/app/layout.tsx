import './globals.css'
import { Inter } from 'next/font/google'
import BottomBar from './components/bars/bottom_bar'
import SideBar from './components/bars/sidebar'
import HeadBar from './components/bars/head_bar'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
  user
}: {
  children: React.ReactNode,
  user: any
}) {
  return (
    <html>
      <body>
          <div>
            <HeadBar />
            <SideBar user={user} />
            <BottomBar user={user} />
            <div className='ins-container'>{children}</div>
          </div>
      </body>
    </html>
  )
}
