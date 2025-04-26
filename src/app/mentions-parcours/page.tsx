function MentionParcours() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1
        className='numeric glitch-effect mb-12 text-center text-3xl tracking-wider uppercase'
        data-text='Mentions et parcours'
      >
        Mentions et parcours
      </h1>

      <div className='mx-auto mb-16 max-w-4xl rounded-lg border border-lime-900/50 bg-black/30 p-6 backdrop-blur-sm'>
        <h2 className='mb-6 text-xl leading-relaxed'>
          La formation en vue de l&#39;obtention du diplôme de Licence Professionnelle en
          Informatique a été mise en place à l&#39;
          <span className='font-bold text-lime-400'>ENI</span> avec trois (3) mentions de formation
        </h2>

        <div className='mt-8 grid grid-cols-1 gap-4 md:grid-cols-3'>
          <div className='rounded border border-lime-400/30 bg-lime-900/20 p-4 backdrop-blur-sm transition-all duration-300 hover:border-lime-400'>
            <p className='flex items-center text-lg'>
              <span className='mr-2 text-lime-400'>➣</span>
              <span className='font-semibold'>Informatique</span>
            </p>
          </div>
          <div className='rounded border border-lime-400/30 bg-lime-900/20 p-4 backdrop-blur-sm transition-all duration-300 hover:border-lime-400'>
            <p className='flex items-center text-lg'>
              <span className='mr-2 text-lime-400'>➣</span>
              <span className='font-semibold'>Intelligence Artificielle</span>
            </p>
          </div>
          <div className='rounded border border-lime-400/30 bg-lime-900/20 p-4 backdrop-blur-sm transition-all duration-300 hover:border-lime-400'>
            <p className='flex items-center text-lg'>
              <span className='mr-2 text-lime-400'>➣</span>
              <span className='font-semibold'>Expertise Digitale</span>
            </p>
          </div>
        </div>
      </div>

      <div className='space-y-16'>
        <div className='rounded-lg border border-lime-900/50 bg-black/30 p-6 backdrop-blur-sm'>
          <h2 className='mb-6 text-xl leading-relaxed'>
            La mention <span className='font-bold text-lime-400'>Informatique</span> est destinée
            aux étudiants titulaires du diplôme de Baccalauréat Série (D, C, S), Série Technique et
            Technologique (Génie Civil ou Industriel). La formation se fera en présentiel. Elle
            comporte trois (3) parcours :
          </h2>

          <div className='ml-4 space-y-3'>
            <p className='group flex items-start'>
              <span className='mr-2 text-lime-400 transition-colors duration-300 group-hover:text-white'>
                ➣
              </span>
              <span className='transition-colors duration-300 group-hover:text-lime-300'>
                Génie Logiciel et base de Données (GB) – (Licence et Master)
              </span>
            </p>
            <p className='group flex items-start'>
              <span className='mr-2 text-lime-400 transition-colors duration-300 group-hover:text-white'>
                ➣
              </span>
              <span className='transition-colors duration-300 group-hover:text-lime-300'>
                Administration des Système et réseaux (ASR) – (Licence et Master)
              </span>
            </p>
            <p className='group flex items-start'>
              <span className='mr-2 text-lime-400 transition-colors duration-300 group-hover:text-white'>
                ➣
              </span>
              <span className='transition-colors duration-300 group-hover:text-lime-300'>
                Informatique Générale (IG) – (Licence et Master)
              </span>
            </p>
          </div>
        </div>

        <div className='rounded-lg border border-lime-900/50 bg-black/30 p-6 backdrop-blur-sm'>
          <h2 className='mb-6 text-xl leading-relaxed'>
            La mention{' '}
            <span className='font-bold text-lime-400'>Intelligence Artificielle (IA)</span> est
            destinée aux étudiants titulaires du diplôme de licence (Bac +3) en Mathématiques ou en
            Statistiques ou en Informatique, etc. La formation se fera en présentiel. Elle comporte
            deux (2) parcours :
          </h2>

          <div className='ml-4 space-y-3'>
            <p className='group flex items-start'>
              <span className='mr-2 text-lime-400 transition-colors duration-300 group-hover:text-white'>
                ➣
              </span>
              <span className='transition-colors duration-300 group-hover:text-lime-300'>
                Gouvernance et Ingénierie de Données (GID) – (Master)
              </span>
            </p>
            <p className='group flex items-start'>
              <span className='mr-2 text-lime-400 transition-colors duration-300 group-hover:text-white'>
                ➣
              </span>
              <span className='transition-colors duration-300 group-hover:text-lime-300'>
                Objets connectés et Cybersécurité (OCC) – (Master)
              </span>
            </p>
          </div>
        </div>

        <div className='rounded-lg border border-lime-900/50 bg-black/30 p-6 backdrop-blur-sm'>
          <h2 className='mb-6 text-xl leading-relaxed'>
            La mention <span className='font-bold text-lime-400'>Expertise</span> est destinée aux
            étudiants titulaires du diplôme de Baccalauréat toute série pour le niveau Licence et
            aux étudiants titulaires du diplôme de licence (Bac +3) en Mathématiques ou en
            Statistiques ou en Informatique, etc pour le niveau Master. La formation se fera en
            ligne. Elle comporte deux (2) parcours :
          </h2>

          <div className='ml-4 space-y-3'>
            <p className='group flex items-start'>
              <span className='mr-2 text-lime-400 transition-colors duration-300 group-hover:text-white'>
                ➣
              </span>
              <span className='transition-colors duration-300 group-hover:text-lime-300'>
                Métier du Digital (MDi) – (Licence et Master)
              </span>
            </p>
            <p className='group flex items-start'>
              <span className='mr-2 text-lime-400 transition-colors duration-300 group-hover:text-white'>
                ➣
              </span>
              <span className='transition-colors duration-300 group-hover:text-lime-300'>
                Audit des systèmes d'Information (ASI) – (Master)
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MentionParcours
