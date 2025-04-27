import Img from 'next/image'
import Link from 'next/link'

function Header() {
  return (
    <header className={'flex items-center justify-between px-4'}>
      <Link href={'/'}>
        <Img src='/logo.png' alt='logo-eni' width={57} height={57} />
      </Link>
      <nav
        className={
          'absolute top-0 left-1/2 z-10 -translate-x-1/2 bg-white' +
          ' flex justify-center gap-6 px-10 py-2 text-sm font-semibold text-black'
        }
        style={{
          clipPath: 'polygon(0% 0%, 100% 0%, 90% 100%, 15% 100%)',
        }}
      >
        <Link href={'/'}>Accueil</Link>
        <Link href={'/enseignants'}>Enseignants</Link>
        <Link href={'/mentions-parcours'}>Mentions et parcours</Link>
      </nav>
      <Link
        href={'/galerie'}
        className={
          'rounded-3xl border border-lime-800' +
          ' px-4 transition-all hover:border-white hover:text-lime-800' +
          ' duration-300'
        }
      >
        Galerie
      </Link>
    </header>
  )
}

export default Header
