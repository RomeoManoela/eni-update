import Link from 'next/link'

function Footer() {
  return (
    <footer className='mt-8 border-t border-lime-900/30 bg-black/30 py-8 backdrop-blur-sm'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
          <div>
            <h3 className='mb-2 text-lg font-semibold text-lime-400'>ENI Fianarantsoa</h3>
            <p className='text-sm text-gray-300'>
              École Nationale d&#39;Informatique
              <br />
              Université de Fianarantsoa
              <br />
              Madagascar
            </p>
          </div>

          <div>
            <h3 className='mb-2 text-lg font-semibold text-lime-400'>Liens rapides</h3>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link href='/' className='text-gray-300 transition-colors hover:text-lime-400'>
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href='/enseignants'
                  className='text-gray-300 transition-colors hover:text-lime-400'
                >
                  Enseignants
                </Link>
              </li>
              <li>
                <Link
                  href='/mentions-parcours'
                  className='text-gray-300 transition-colors hover:text-lime-400'
                >
                  Mentions et parcours
                </Link>
              </li>
              <li>
                <Link
                  href='/galerie'
                  className='text-gray-300 transition-colors hover:text-lime-400'
                >
                  Galerie
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='mb-2 text-lg font-semibold text-lime-400'>Contact</h3>
            <ul className='space-y-2 text-sm text-gray-300'>
              <li>Adresse: BP 1487 Tanambao Fianarantsoa, Madagascar</li>
              <li>Email: eni@eni.mg</li>
              <li>Téléphone: +261 38 75 444 31</li>
            </ul>
          </div>
        </div>

        <div className='mt-4 border-t border-lime-900/30 pt-6 text-center'>
          <p className='text-sm text-gray-400'>
            &copy; 2025 École Nationale d&#39;Informatique Fianarantsoa. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
