import Img from 'next/image'

function Home() {
  return (
    <div className='container mx-auto'>
      <h1
        className='numeric glitch-effect text-center text-2xl tracking-[0.2rem] uppercase md:text-3xl md:tracking-[0.8rem]'
        data-text='École ingénieuse, la pépinière des élites informaticiennes'
      >
        École ingénieuse, la pépinière des élites informaticiennes
      </h1>

      <div className='mt-8 flex justify-center'>
        <p className='typing-effect numeric max-w-[85%] text-lime-400 md:max-w-[60%] md:text-2xl md:tracking-[0.4rem]'>
          &gt; Bienvenue dans le futur de l&#39;informatique...
        </p>
      </div>
      <div className={'mt-8 items-center md:mt-16 md:grid md:grid-cols-5 md:gap-4'}>
        <Img
          src={'/eni-2.jpg'}
          alt={'eni-2'}
          width={900}
          height={700}
          className={'rounded-2xl md:col-span-2'}
        />
        <div className={'mt-4 w-full md:col-span-3 md:mt-0 md:ml-8'}>
          <h2
            className={'mb-4 text-xl tracking-widest text-lime-400 md:mb-8 md:text-2xl lg:text-4xl'}
          >
            L&#39;<span className={'text-white'}>E</span>cole{' '}
            <span className={'text-white'}>N</span>ationale d&#39;
            <span className={'text-white'}>I</span>nformatique, votre passerelle vers l&#39;avenir
            de la technologie
          </h2>
          <p className={'text-base md:text-xl'}>
            Située au cœur de Fianarantsoa, notre université est dédiée à l&#39;excellence dans
            l&#39;enseignement de l&#39;informatique et à la formation de professionnels compétents
            et innovants. L&#39;Ecole Nationale d&#39;Informatique, en abrégé ENI, est un
            établissement d&#39;enseignement supérieur rattaché académiquement et administrativement
            à l&#39;Université de Fianarantsoa.
          </p>
        </div>
      </div>
      <div className={'mt-12 flex flex-col-reverse md:grid md:grid-cols-5 md:gap-4'}>
        <div className={'mt-6 md:col-span-3 md:mt-0'}>
          <h1
            className={'mb-4 text-2xl tracking-widest text-lime-400 uppercase md:mb-8 md:text-4xl'}
          >
            Mission et vision
          </h1>
          <p className={'text-base md:text-xl'}>
            Notre mission est de former une génération de professionnels de l&#39;informatique
            créatifs et éthiques, prêts à exceller dans un monde numérique en constante évolution.
            Nous nous engageons à contribuer au développement durable de Madagascar en offrant une
            éducation de qualité qui transcende les frontières. Notre Vision est d&#39;être reconnus
            comme un centre d&#39;excellence en informatique, formant des leaders influents dans
            l&#39;industrie technologique mondiale. Nous aspirons à créer un environnement
            d&#39;apprentissage dynamique et inclusif, favorisant l&#39;innovation et contribuant au
            progrès socio-économique de notre nation et du monde.
          </p>
        </div>
        <div className={'md:col-span-2'}>
          <Img
            src={'/directeur.jpg'}
            alt={'directeur'}
            className={'w-full rounded-2xl'}
            width={900}
            height={700}
          />
        </div>
      </div>
      <div className={'mt-8 items-center md:mt-16 md:grid md:grid-cols-5 md:gap-4'}>
        <Img
          src={'/Game.jpg'}
          alt={'Game'}
          width={900}
          height={700}
          className={'rounded-2xl md:col-span-2'}
        />
        <div className={'mt-4 w-full md:col-span-3 md:mt-0 md:ml-8'}>
          <h2
            className={'mb-4 text-xl tracking-widest text-lime-400 md:mb-8 md:text-2xl lg:text-4xl'}
          >
            Vie Étudiante Dynamique
          </h2>
          <p className={'text-base md:text-xl'}>
            L&#39;expérience étudiante à l&#39;ENI va au-delà des salles de classe. Des clubs
            d&#39;informatique aux compétitions technologiques, notre campus est un terrain fertile
            pour cultiver des passions, établir des connexions significatives et créer des souvenirs
            durables.
          </p>
        </div>
      </div>
      <div className='mt-16'>
        <h2 className='mb-6 text-center text-2xl tracking-widest text-lime-400 uppercase md:text-3xl'>
          Nous trouver
        </h2>
        <div className='w-full overflow-hidden rounded-lg border border-lime-900/50 shadow-lg shadow-lime-900/20'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.5693839020694!2d47.09088797485732!3d-21.45522798575204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21e7bed737f377b5%3A0xb8558e55587dd811!2sEcole%20Nationale%20d&#39;Informatique!5e0!3m2!1sfr!2smg!4v1697553991549!5m2!1sfr!2smg'
            width='100%'
            height='450'
            style={{ border: 0 }}
            allowFullScreen
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            className='w-full'
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Home
