import FooterClock from './footer-clock'
import Link from 'next/link'
import { cookies } from 'next/headers'

export default function Footer() {
  const isAdmin = cookies().get('admin')?.value === '1'
  return (
    <footer className="px-4 mt-10 mb-10 text-center text-gray-500">
      <FooterClock />
      <div className="mb-2 text-xs">&copy;Sanderr. All rights reserved.</div>
      <div className="text-xs">
        {isAdmin ? (
          <form action="/api/auth/logout" method="post" className="inline">
            <button className="text-gray-400 hover:text-gray-200">Logout</button>
          </form>
        ) : (
          <Link href="/login" className="text-gray-400 hover:text-gray-200">Admin login</Link>
        )}
      </div>
    </footer>
  )
}
