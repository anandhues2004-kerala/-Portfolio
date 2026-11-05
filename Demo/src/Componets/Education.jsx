import React from 'react'

const educationList = [
  {
    title: 'Diploma in Python Fullstack',
    institution: 'Unique Occasico Tech, Kochi',
    period: 'Sep 2025 – Jun 2026',
  },
  {
    title: 'BCA (Bachelor of Computer Applications)',
    institution: 'Mount Carmel College, Karukadom, Kothamangalam',
    period: '2022 – 2025',
  },
  {
    title: 'Higher Secondary (Plus Two), Biology',
    institution: "St John's Higher Secondary School, Kavalangad",
    period: '2020 – 2022',
  },
  {
    title: 'SSLC (10th)',
    institution: 'Little Flower High School, Onnukal',
    period: 'Passed out 2020',
  },
]

const Education = () => {
  return (
    <section id="education" className="w-full px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto w-full max-w-3xl text-left text-slate-800">
        <h2 className="mb-6 text-2xl font-bold sm:text-3xl">Education</h2>

        <ul className="flex flex-col gap-4">
          {educationList.map((item) => (
            <li
              key={item.title}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-md"
            >
              <h3 className="text-lg font-semibold leading-7">{item.title}</h3>
              <p className="text-slate-600">{item.institution}</p>
              <p className="mt-1 text-sm text-slate-500">{item.period}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Education