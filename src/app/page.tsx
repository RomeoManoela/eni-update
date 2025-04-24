import Img from 'next/image'

function Home() {
  return (
    <div className='container mx-auto py-12'>
      <h1
        className='numeric glitch-effect text-center text-3xl tracking-[0.8rem] uppercase'
        data-text='École ingénieuse, la pépinière des élites informaticiennes'
      >
        École ingénieuse, la pépinière des élites informaticiennes
      </h1>

      <div className='mt-12 flex justify-center'>
        <p className='typing-effect numeric max-w-[80%] text-xl text-lime-400'>
          &gt; Bienvenue dans le futur de l&#39;informatique...
        </p>
      </div>
      <div className={'mt-16 grid grid-cols-5 gap-4'}>
        <div className={'bg-opacity-30 col-span-2 rounded-2xl bg-gray-900 p-1.5'}>
          <Img
            src={'/eni-2.jpg'}
            alt={'eni-2'}
            width={600}
            height={500}
            className={'rounded-2xl'}
          />
        </div>
        <div className={'col-span-3 ml-8'}>
          <h2 className={'mb-8 text-2xl tracking-widest text-lime-400'}>
            L&#39;Ecole Nationale d&#39;Informatique, votre passerelle vers l&#39;avenir de la
            technologie
          </h2>
          <p className={'text-2xl tracking-wider'}>
            Située au cœur de Fianarantsoa, notre université est dédiée à l&#39;excellence dans
            l&#39;enseignement de l&#39;informatique et à la formation de professionnels compétents
            et innovants. L’Ecole Nationale d’Informatique, en abrégé ENI, est un établissement
            d’enseignement supérieur rattaché académiquement et administrativement à l’Université de
            Fianarantsoa.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
