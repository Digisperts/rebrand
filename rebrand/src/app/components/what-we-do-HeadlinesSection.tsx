'use client'

import React from 'react'
import Image from 'next/image'

const headlines = [
  {
    title: 'Social Cranes',
    desc: 'As a leading social media marketing (SMM) company, Social Cranes partnered with us to enhance their online presence. We designed and developed their website, implementing........',
    img: '/images/reuseable-headline.png',
    link: '#'
  },
  {
    title: 'Smart Finance',
    desc: 'At Digisperts LLC, our commitment to client confidentiality is unwavering. While we have worked on numerous projects and achieved remarkable results, we respect the anonymity of our clients and........',
    img: '/images/reuseable-headline.png',
    link: '#'
  },
  {
    title: 'Social Cranes',
    desc: 'As a leading social media marketing (SMM) company, Social Cranes partnered with us to enhance their online presence. We designed and developed their website, implementing........',
    img: '/images/reuseable-headline.png',
    link: '#'
  }
]

const HeadlinesSection = () => (
  <section className="py-16 px-4 bg-white">
    <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-10 text-left">Making the Headlines</h2>
    <div className="grid md:grid-cols-3 gap-6">
      {headlines.map(({ title, desc, img, link }, i) => (
        <div key={i}>
          <Image src={img} alt={title} width={400} height={250} className="rounded " />
          <h4 className="text-md font-bold mt-2">{title}</h4>
          <p className="text-sm text-gray-600 mb-2">{desc}</p>
          {link && (
            <a href={link}>
              <button className="text-sm bg-blue-800 text-white px-4 py-2 rounded">Know more →</button>
            </a>
          )}
        </div>
      ))}
    </div>
  </section>
)

export default HeadlinesSection
