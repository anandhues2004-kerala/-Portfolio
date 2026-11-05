import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

const sections = [
  { label: 'Home', path: '/' },
  { label: 'Education', path: '/education' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
]

const Header = () => {
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="sticky top-0 z-50 flex items-center bg-[#0a1f44] px-6 py-3 text-white shadow-md">
      <div className="relative" ref={menuRef}>
        {/* Three-bar button */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-md hover:bg-white/10"
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
              open ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
              open ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
              open ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>

        {/* Dropdown opens on the left */}
        {open && (
          <ul className="absolute left-0 top-full mt-3 min-w-48 overflow-hidden rounded-lg bg-white py-1.5 shadow-xl">
            {sections.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2.5 text-[#0a1f44] hover:bg-blue-50"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      <Link to="/" className="ml-4 text-xl font-bold tracking-wide">
        Portfolio
      </Link>
    </header>
  )
}

export default Header