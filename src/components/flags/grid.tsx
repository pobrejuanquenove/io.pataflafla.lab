import { SimpleFlag } from './interfaces/simple'
import { FlagCard } from './card';

interface Props {
  flags: SimpleFlag[];
}
export  const FlagsGrid = ({flags}:Props) => {
  return (
      <div className="flex flex-wrap gap-5 items-stretch justify-center">
        {flags.map((flag:SimpleFlag) => (
        // <Image
        //   key={pokemon.id}
        //   src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
        //   width={100}
        //   height={100}
        //   alt={`${pokemon.name}`}
        // />
        //<span key={pokemon.id}></span>
          <FlagCard key={flag.name.common} {...flag} />
        ))
        }
        </div>
  )
}
