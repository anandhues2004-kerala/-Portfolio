import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Mail, ArrowUp } from 'lucide-react'

const socials = [
  { label: 'GitHub', href: 'https://github.com/anandhues2004-kerala', icon: FaGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ananthu-es-a04896282/', icon: FaLinkedin },
  { label: 'Email', href: 'mailto:main@gmail.com', icon: Mail },
]

const Footer = () => {
  return (
    <footer className="relative bg-[#0a1f44] text-white">
      {/* Accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-sky-400/60 to-transparent" />

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 py-12 md:flex-row md:justify-between">
        {/* Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold tracking-tight">Ananthu Es</h2>
          <p className="mt-1 text-sm text-gray-400">
            Python Fullstack Developer · React &amp; Django
          </p>
        </div>

        
        {/* Socials */}
        <ul className="flex items-center gap-3">
          {socials.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer noopener"
                aria-label={label}
                title={label}
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-gray-300 transition duration-200 hover:-translate-y-0.5 hover:border-sky-400 hover:bg-sky-400/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                <Icon size={18} className="transition group-hover:scale-110" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-5 text-sm text-gray-400 sm:flex-row">
          <p>© {new Date().getFullYear()} Ananthu ES. All rights reserved.</p>

          <a
            href="/"
            className="inline-flex items-center gap-1.5 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded"
          >
            Back to top <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer