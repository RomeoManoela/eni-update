import Img from 'next/image'
import Link from 'next/link'

function Header() {
  return (
    <header className={'mb-8 flex items-center justify-between md:px-4'}>
      <Link href={'/'}>
        <Img
          src='/logo.png'
          alt='logo-eni'
          width={57}
          height={57}
          className={'h-[40px] w-[40px] md:h-[55px] md:w-[55px]'}
        />
      </Link>
      <nav
        className={
          'absolute top-0 left-1/2 z-10 -translate-x-1/2 bg-black/80 backdrop-blur-sm' +
          ' flex justify-between gap-4 px-8 py-2 text-sm font-semibold text-lime-400 md:gap-6 md:px-12' +
          ' md:text-base'
        }
        style={{
          clipPath: 'polygon(0% 0%, 100% 0%, 90% 100%, 15% 100%)',
        }}
      >
        <Link href={'/'} className='transition-colors duration-300 hover:text-white'>
          Accueil
        </Link>
        <Link href={'/enseignants'} className='transition-colors duration-300 hover:text-white'>
          Enseignants
        </Link>
        <Link
          href={'/mentions-parcours'}
          className='transition-colors duration-300 hover:text-white'
        >
          Parcours
        </Link>
      </nav>
      <Link
        href={'/galerie'}
        className={
          'rounded-3xl border border-lime-800' +
          ' px-1 transition-all hover:border-white hover:text-lime-800 md:px-4' +
          ' text-sm duration-300 md:text-base'
        }
      >
        Galerie
      </Link>
    </header>
  )
}

export default Header
