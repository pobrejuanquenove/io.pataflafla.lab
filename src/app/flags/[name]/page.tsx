import { Flag, SimpleFlag } from '@/components/flags';
import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';

type Params = Promise<{ name: string }>;


const getFlags = async (
): Promise<SimpleFlag[]> => {
  const data = await fetch(
    `https://restcountries.com/v3.1/all?fields=name,flags`,
  ).then((res) => res.json());
  return data
};

// static renderiza en build time!
export async function generateStaticParams() {
  const flags:SimpleFlag[] = (await getFlags()).slice(0, 5);
  return flags.map( (flag) => ({name: flag.name.common }))
}

export async function generateMetadata({ params }: { params: Params }):Promise<Metadata> {
  try {
    const { name } = await params;
    //const flag = await getFlag(name);
    return {
      title: `#${name} - ${name}`,
      description: `improve`,
    };
  } catch (error) {
    return {
      title: 'Página de error',
      description: `${error}`,
    };
  }
}

const getFlag = async (name: string): Promise<Flag> => {

  try {
    const flag = await fetch(`https://restcountries.com/v3.1/name/${name}`, {
      cache: 'force-cache',
    }).then((response) => response.json());
    return flag[0];
  } catch (error) {
    console.log(error)
    notFound();
  }
};

export default async function FlagPage({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;
  const currentFlag = await getFlag(name);

  return (
    <div className="flex mt-5 flex-col items-center text-slate-800">
      <div className="relative flex flex-col items-center rounded-[20px] w-[700px] mx-auto bg-stone-950 bg-clip-border  shadow-lg  p-3">
        <div className="mt-2 mb-8 w-full">
          <h1 className="px-2 text-3xl font-bold text-stone-100 capitalize">
            {name}
          </h1>
          <div className="flex flex-col justify-center items-center">

            { currentFlag.flags && <Image
              src={currentFlag.flags.png}
              width={150}
              height={150}
              alt={currentFlag.flags.alt}
              className="mb-5"
            />
            }
{/*
            <div className="flex flex-wrap">
              {pokemon.moves.map((move) => (
                <p key={move.move.name} className="mr-2 capitalize">
                  {move.move.name}
                </p>
              ))}
            </div>
            */}
          </div>
        </div>
{/**
        <div className="grid grid-cols-2 gap-4 px-2 w-full">
          <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg ">
            <p className="text-sm text-gray-600">Types</p>
            <div className="text-base font-medium text-navy-700 flex">

              {flag.types.map((type) => (
                <p key={type.slot} className="mr-2 capitalize">
                  {type.type.name}
                </p>
              ))}

            </div>
          </div>

          <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg ">
            <p className="text-sm text-gray-600">Peso</p>
            <span className="text-base font-medium text-navy-700 flex">
              {pokemon.weight}
            </span>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg">
            <p className="text-sm text-gray-600">Regular Sprites</p>
            <div className="flex justify-center">
              <Image
                src={pokemon.sprites.front_default}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />

              <Image
                src={pokemon.sprites.back_default}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg">
            <p className="text-sm text-gray-600">Shiny Sprites</p>
            <div className="flex justify-center">
              <Image
                src={pokemon.sprites.front_shiny}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />

              <Image
                src={pokemon.sprites.back_shiny}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />
            </div>
          </div>
        </div>
                        */}
      </div>
    </div>
  );
}
