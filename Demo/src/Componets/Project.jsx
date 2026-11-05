import React from 'react'

// Replace each github link with your real repository URL.
const projects = [
  {
    title: 'MovieDatas',
    status: 'Completed',
    summary:
      'A movie website where users can browse, search, add, update and delete movies. The React frontend talks to a Django REST API, so every action goes through the API.',
    features: [
      'Search movies by name',
      'Add, edit and delete movies (POST, PUT, DELETE)',
      'View the full movie list (GET)',
    ],
    stack: ['Python', 'Django', 'REST API', 'React', 'JavaScript', 'CSS'],
    github: 'https://github.com/anandhues2004-kerala/Movie_data_set',
  },
  {
    title: 'E-Commerce Website',
    status: 'Completed',
    summary:
      'An online shop where customers create an account, browse products and pay online. Admins can add and manage products.',
    features: [
      'User registration and login',
      'Add and manage products',
      'Razorpay payment integration',
      'Full shopping flow from cart to checkout',
    ],
    stack: ['Python', 'Django', 'Tailwind CSS', 'JavaScript', 'Razorpay'],
    github: 'https://github.com/anandhues2004-kerala/sports_deploy',
  },
  {
    title: 'Django AI Employee',
    status: 'In progress',
    summary:
      'An agentic AI that handles customer service on its own, without a human agent. It is built to answer customers and complete service tasks automatically.',
    features: [
      'Fully automated customer support',
      'Agentic AI workflow',
      'Currently under development',
    ],
    stack: ['Python', 'Django', 'Tailwind CSS', 'MySQL', 'Agentic AI'],
    github: 'https://github.com/anandhues2004-kerala/django_ai_employees',
  },
  {
    title: 'Stock Prediction Portal',
    status: 'Running · ML planned',
    summary:
      'A stock portal with secure login using JWT authentication and an Axios interceptor for token handling. Machine learning and AI will be added later to predict the stock market.',
    features: [
      'JWT authentication',
      'Interceptor for automatic token handling',
      'Planned: ML and AI stock prediction',
    ],
    stack: ['React', 'JavaScript', 'Python', 'Django', 'JWT'],
    github: 'https://github.com/anandhues2004-kerala/Stock-prediction-portal',
  },
]

const statusStyle = {
  Completed: 'bg-emerald-100 text-emerald-800',
  'In progress': 'bg-amber-100 text-amber-800',
  'Running · ML planned': 'bg-sky-100 text-sky-800',
}

const Project = () => {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900">My Projects</h1>
      <p className="mt-2 max-w-xl text-slate-600">
        Full-stack projects built with Python, Django and React.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.title}
            className="flex flex-col rounded-lg border border-slate-200 bg-white p-6"
          >
            <div className="flex items-start justify-between gap-3">
              <h2 className="text-xl font-semibold text-slate-900">{p.title}</h2>
              <span
                className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium ${
                  statusStyle[p.status] || 'bg-slate-100 text-slate-700'
                }`}
              >
                {p.status}
              </span>
            </div>

            <p className="mt-3 text-slate-700">{p.summary}</p>

            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-700">
              {p.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.stack.map((t) => (
                <span
                  key={t}
                  className="rounded bg-slate-100 px-2 py-1 text-xs text-slate-700"
                >
                  {t}
                </span>
              ))}
            </div>

            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-fit items-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
            >
              View on GitHub
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Project