import Img from 'next/image'

type Person = {
  nomPrenoms: string
  titre: string
  contact: string
  photo: string
}

const personnes: Person[] = [
  {
    nomPrenoms: 'MAHATODY Thomas',
    titre: 'Professeur',
    contact: 'tsmahatody@gmail.com',
    photo: '/Enseignants/Thomas.jpg',
  },
  {
    nomPrenoms: 'RAFAMANTANANTSOA Fontaine',
    titre: 'Professeur',
    contact: 'fontainerafamant@yahoo.fr',
    photo: '/Enseignants/Fontaine.jpg',
  },
  {
    nomPrenoms: 'RAMAMONJISOA Andriantiana Bertin Olivier',
    titre: 'Professeur Titulaire',
    contact: 'bertinram@yahoo.fr',
    photo: '/Enseignants/Bertin.jpg',
  },
  {
    nomPrenoms: 'RABETAFIKA Louis Haja',
    titre: 'Maître de Conférences',
    contact: 'rlouishaja@gmail.com',
    photo: '/Enseignants/Haja.jpg',
  },
  {
    nomPrenoms: 'RATIARSON Venot',
    titre: 'Maître de Conférences',
    contact: 'r_venot@yahoo.fr',
    photo: '/Enseignants/Venot.jpg',
  },
  {
    nomPrenoms: 'RALAIVAO Jean Christian',
    titre: 'Maître de Conférences',
    contact: 'ralaivao.christian@gmail.com',
    photo: '/Enseignants/Christian.jpg',
  },
  {
    nomPrenoms: 'DIMBISOA William Germain',
    titre: 'Maître de Conférences',
    contact: 'dwiiliamger@gmail.com',
    photo: '/Enseignants/William.jpg',
  },
  {
    nomPrenoms: 'RATIANANTITRA Volatiana Marielle',
    titre: 'Maître de Conférences',
    contact: 'volatianamarielle@yahoo.fr',
    photo: '/Enseignants/Volatiana.jpg',
  },
  {
    nomPrenoms: 'RAKOTOASIMBAHOAKA Antsa Cyprienna',
    titre: 'Maître de Conférences',
    contact: 'rakotoas.cyprienna@gmail.com',
    photo: '/Enseignants/Cyprienna.jpg',
  },
  {
    nomPrenoms: 'RAZAFIMAHATRATRA Hajarisena',
    titre: 'Maître de Conférences',
    contact: 'hajarisena@yahoo.fr',
    photo: '/Enseignants/Hajarisena.jpg',
  },
  {
    nomPrenoms: 'GILANTE Gesazafy',
    titre: 'Assistant d’Enseignement Supérieur et de recherche',
    contact: 'guyzaho@gmail.com',
    photo: '/Enseignants/Gesazafy.jpg',
  },
  {
    nomPrenoms: 'RAZAFINDRAMONJA Clément Aubert',
    titre: 'Assistant d’Enseignement Supérieur et de recherche',
    contact: 'kleman.ober@gmail.com',
    photo: '/Enseignants/Clement.jpg',
  },
]

function Enseignants() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1
        className='numeric glitch-effect mb-12 text-center text-3xl tracking-wider uppercase'
        data-text='Nos Enseignants'
      >
        Nos Enseignants
      </h1>

      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {personnes.map((personne: Person, index: number) => (
          <div
            key={index}
            className='flex flex-col overflow-hidden rounded-lg bg-[#001a00] shadow-lg transition-all duration-300 hover:shadow-green-500/20'
          >
            <div className='relative h-64 w-full'>
              <Img src={personne.photo} alt={personne.nomPrenoms} fill className='object-cover' />
            </div>
            <div className='flex-grow p-4'>
              <h2 className='text-xl font-semibold text-lime-400'>{personne.nomPrenoms}</h2>
              <p className='mt-1 text-gray-300'>{personne.titre}</p>
              <p className='mt-2 text-sm text-gray-400'>{personne.contact}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Enseignants
