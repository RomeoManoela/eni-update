type GradeDefinition = {
  nationalGrade: string
  definition: string
}

const gradeDefinitions: GradeDefinition[] = [
  {
    nationalGrade: '18.00/20 or above',
    definition: 'HONORABLE – Outstanding level, often reserved for the best results',
  },
  {
    nationalGrade: '16.00 – 17.99/20',
    definition: 'VERY GOOD – Excellent mastery with few mistakes',
  },
  {
    nationalGrade: '14.00 – 15.99/20',
    definition: 'GOOD – Solid performance with a satisfactory grasp of the subject',
  },
  {
    nationalGrade: '12.00 – 13.99/20',
    definition: 'FAIRLY GOOD – Acceptable knowledge and skills',
  },
  {
    nationalGrade: '10.00 – 11.99/20',
    definition: 'PASSABLE – Just enough to pass, but without deep mastery',
  },
]

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
                Audit des systèmes d&#39;Information (ASI) – (Master)
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className='mt-16 rounded-lg border border-lime-900/50 bg-black/30 p-6 backdrop-blur-sm'>
        <h1 className='mb-6 text-2xl font-bold text-lime-400'>ENI Grading Scale</h1>
        <div className='space-y-4'>
          {gradeDefinitions.map((grade, index) => (
            <div
              key={index}
              className='flex flex-col rounded border border-lime-400/30 bg-lime-900/10 p-4 backdrop-blur-sm transition-all duration-300 hover:border-lime-400'
            >
              <div className='flex items-center'>
                <span className='mr-2 text-lime-400'>➣</span>
                <span className='font-semibold'>{grade.nationalGrade}</span>
              </div>
              <p className='mt-2 pl-6 text-gray-300'>{grade.definition}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MentionParcours
