
const MailIcon = () => (
  <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
)

const GithubIcon = () => (
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
  </svg>
)

const LinkedinIcon = () => (
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.83v1.54h.05c.53-1 1.84-2.07 3.78-2.07 4.04 0 4.79 2.66 4.79 6.1V21h-4v-4.95c0-1.18-.02-2.7-1.65-2.7-1.65 0-1.9 1.29-1.9 2.62V21h-4V9.75Z" />
  </svg>
)

const contactInfo = [
  {
  label: 'Email',
  value: 'anandhues2004@gmail.com',
  href: '',
  icon: <MailIcon />,
},
 ,
  {
    label: 'GitHub',
    value: 'github.com/your-username',
    href: 'https://github.com/anandhues2004-kerala',
    icon: <GithubIcon />,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/your-username',
    href: 'https://www.linkedin.com/in/ananthu-es-a04896282/',
    icon: <LinkedinIcon />,
  },
]

const Contact = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-16">

      <div className="w-full max-w-xl">

        {/* Heading */}
        <div className="mb-10 text-center">
          <p className="mb-2 font-semibold uppercase tracking-widest text-blue-600">
            Get in touch
          </p>

          <h1 className="text-4xl font-bold text-[#0a1f44]">
            Contact Me
          </h1>

          <p className="mt-3 text-gray-500">
            Let's connect and work together.
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-5">

          {contactInfo.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.label === 'Email' ? undefined : '_blank'}
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0a1f44] text-white transition group-hover:bg-blue-500">
                {item.icon}
              </span>

              <span className="min-w-0">
                <span className="block text-sm text-gray-500">
                  {item.label}
                </span>

                <span className="block truncate font-medium text-[#0a1f44]">
                  {item.value}
                </span>
              </span>
            </a>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Contact
