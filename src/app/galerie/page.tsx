'use client'

import Img from 'next/image'
import { useState } from 'react'

interface Galerie {
  title: string
  description: string
  image: string[]
}

const galerie: Galerie[] = [
  {
    title: 'HIU 2025',
    description: '🏆 2em place au Hackathon InterUniversitaire à Madagascar',
    image: ['/galerie/HIU-2025-1.jpg', '/galerie/HIU-2025-2.jpg', '/galerie/HIU-2025-3.jpg'],
  },
  {
    title: 'Team DevLeka brille au GameJam Plus',
    description:
      '🏆 1ère place locale - Madagascar 🇲🇬\n' +
      '🔥 Top 5 en Afrique 🌍\n' +
      '🎯 Parmi les finalistes mondiaux - Afrique, Europe & Amérique Anglo-Sax.',
    image: ['/galerie/DevLeka.jpg'],
  },
  {
    title: 'Techfest-IIT Bombay 2024 🇮🇳',
    description:
      '🌟 Trois de nos étudiants représentent' +
      " l'ENI Fianarantsoa en Inde lors du Techfest-IIT Bombay 2024 ! 🇮🇳",
    image: ['/galerie/Bombay.jpg'],
  },
  {
    title: '🌟 Fierté de l’ENI Fianarantsoa | Excellence & Innovation 🌟',
    description:
      "Nous avons l'honneur d’annoncer que quatre de nos étudiants ont brillamment obtenu " +
      'la certification internationale Google Cloud – Associate Cloud Engineer (ACE) ☁️ ✔️',
    image: ['/galerie/Google-Cloud.jpg'],
  },
  {
    title: '💻 ViavyTech',
    description: '',
    image: ['/galerie/ViavyTech-1.jpg', '/galerie/ViavyTech-2.jpg'],
  },
  {
    title: 'Reception novices',
    description: '',
    image: [
      '/galerie/Reception-1.jpg',
      '/galerie/Reception-2.jpg',
      '/galerie/Reception-3.jpg',
      '/galerie/Reception-4.jpg',
    ],
  },
]

function Page() {
  // État pour suivre l'image principale pour chaque élément de galerie
  const [mainImages, setMainImages] = useState<{ [key: number]: string }>({})

  // Fonction pour changer l'image principale
  const changeMainImage = (galleryIndex: number, newImageSrc: string) => {
    setMainImages((prev) => ({
      ...prev,
      [galleryIndex]: newImageSrc,
    }))
  }

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1
        className='numeric glitch-effect mb-12 text-center text-3xl tracking-wider uppercase'
        data-text='Galerie'
      >
        Galerie
      </h1>

      <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {galerie.map((item, index) => {
          // Utiliser l'image principale stockée dans l'état ou l'image par défaut
          const currentMainImage = mainImages[index] || item.image[0]

          return (
            <div
              key={index}
              className='flex flex-col overflow-hidden rounded-lg bg-[#001a00] shadow-lg transition-all duration-300 hover:shadow-green-500/20'
            >
              <div className='relative h-64 w-full'>
                <Img src={currentMainImage} alt={item.title} fill className='object-cover' />
              </div>
              <div className='flex-grow p-4'>
                <h2 className='text-xl font-semibold text-lime-400'>{item.title}</h2>
                <p className='mt-2 whitespace-pre-line text-gray-300'>{item.description}</p>
                {item.image.length > 1 && (
                  <div className='mt-4 flex gap-2'>
                    {item.image.map((img, imgIndex) => (
                      <div
                        key={imgIndex}
                        className={`relative h-16 w-16 cursor-pointer transition-all duration-300 ${
                          img === currentMainImage
                            ? 'ring-2 ring-lime-400'
                            : 'opacity-80 hover:opacity-100'
                        }`}
                        onClick={() => changeMainImage(index, img)}
                      >
                        <Img
                          src={img}
                          alt={`${item.title} - image ${imgIndex + 1}`}
                          fill
                          className='rounded object-cover'
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Page
