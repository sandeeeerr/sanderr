import FooterClock from './footer-clock'

export default function Footer() {
  return (
    <footer className="px-4 mt-10 mb-10 text-center text-gray-500">
      <FooterClock />
      <div className="mb-2 text-xs">&copy; Sanderr. All rights reserved.</div>
      <div className="text-xs">
        <a 
          href="https://dev.sanderr.nl" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-200"
        >
          Dashboard
        </a>
      </div>
    </footer>
  )
}
