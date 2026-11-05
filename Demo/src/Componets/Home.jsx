import { Link } from 'react-router-dom'
import profile from "../images/profile.jpg";

const skills = [
  'Python',
  'Django',
  'React',
  'JavaScript',
  'HTML',
  'CSS',
  'Tailwind CSS',
  'Agentic AI',
  'MySQL',
  'PostgreSQL',
]

const featured = [
  {
    title: 'E-commerce Website',
    description: 'Online store with product listing, cart, and checkout flow.',
  },
  {
    title: 'Movie Website',
    description: 'Browse and search movies with a clean, responsive UI.',
  },
  {
    title: 'Stock Prediction Portal',
    description: 'Django web app that predicts stock trends using ML.',
  },
  {
    title: 'AI Chat Portal',
    description: 'Chat interface powered by an AI model.',
  },
]

const Home = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#0a1f44] to-[#16356b] px-6 py-16 text-white">
        <div className="mx-auto flex min-h-[70vh] max-w-6xl flex-col-reverse items-center justify-between gap-10 md:flex-row">
          {/* Left: text */}
          <div className="text-center md:w-1/2 md:text-left">
            <p className="mb-3 text-lg text-blue-300">Hello, I'm</p>
            <h1 className="mb-4 text-4xl font-bold md:text-6xl">Ananthu Es</h1>
            <h2 className="mb-6 text-xl text-gray-200 md:text-2xl">
              Python Fullstack Developer
            </h2>
            <p className="mb-8 max-w-xl text-gray-300">
              I build responsive web apps with React and Django, and I'm
              exploring agentic AI to create smarter applications.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:justify-start">
              <Link
                to="/projects"
                className="rounded-md bg-blue-500 px-6 py-3 font-medium text-white transition hover:bg-blue-600"
              >
                View Projects
              </Link>
              <Link
                to="/contact"
                className="rounded-md border border-white px-6 py-3 font-medium text-white transition hover:bg-white hover:text-[#0a1f44]"
              >
                Contact Me
              </Link>
            </div>
          </div>

          {/* Right: image */}
          <div className="flex justify-center md:w-1/2 md:justify-end">
            <img
              src={profile}
              alt="Your Name"
              className="h-64 w-64 rounded-full border-4 border-blue-400 object-cover shadow-xl md:h-80 md:w-80"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-3xl px-6 py-16 text-center">
        <h2 className="mb-4 text-3xl font-bold text-[#0a1f44]">About Me</h2>
        <p className="text-gray-600">
          I'm a fresher Python fullstack developer who enjoys turning ideas
          into working products. I work on both the frontend and backend, and
          I'm looking for an opportunity to grow as a developer and build
          real-world applications.
        </p>
      </section>

      {/* Skills */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-8 text-3xl font-bold text-[#0a1f44]">Skills</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-[#0a1f44] px-5 py-2 text-sm font-medium text-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-8 text-center text-3xl font-bold text-[#0a1f44]">
          Featured Projects
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {featured.map((p) => (
            <div
              key={p.title}
              className="rounded-lg border-l-4 border-blue-500 bg-white p-5 shadow transition hover:shadow-lg"
            >
              <h3 className="mb-2 text-xl font-semibold text-[#0a1f44]">
                {p.title}
              </h3>
              <p className="text-gray-600">{p.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/projects" className="text-blue-600 hover:underline">
            See all projects →
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home