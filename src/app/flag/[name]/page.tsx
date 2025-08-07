import { Flag, SimpleFlag } from '@/components/flags';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type Params = Promise<{ name: string }>;

const getFlags = async (): Promise<SimpleFlag[]> => {
  const data = await fetch(
    `https://restcountries.com/v3.1/all?fields=name,flags`,
  ).then((res) => res.json());
  return data;
};

// static renderiza en build time!
export async function generateStaticParams() {
  const flags: SimpleFlag[] = (await getFlags()).slice(0, 5);
  return flags.map((flag) => ({ name: flag.name.common }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
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
    console.log(error);
    notFound();
  }
};

export default async function FlagPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const currentFlag = await getFlag(name);

  return (
    <div className="max-w-[85rem] container mx-auto px-4 md:px-6 2xl:max-w-[1400px] py-24 lg:py-32">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14 flex flex-col items-center">
        <div className='flex flex-row gap-15 mb-1'>
          <Image
            alt={currentFlag.flags.alt ?? ''}
            src={currentFlag.flags.svg}
            width={200}
            height={100}
            className="mb-2"
          />
          <Image
            alt={'coat of arms'}
            src={currentFlag.coatOfArms.svg}
            width={100}
            height={100}
            className="mb-2"
          />
        </div>
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
          {currentFlag.name.common}
        </h2>
        <p className="mt-1 text-muted-foreground">{`${currentFlag.name.official} / ${currentFlag.subregion} / ${currentFlag.region}`}</p>
        <p className="mt-1 text-muted-foreground"><Link href={currentFlag.maps.googleMaps} target='_blank' className='hover:underline'><span className='text-xs'>googlemap</span></Link> <Link href={currentFlag.maps.openStreetMaps} target='_blank' className='hover:underline'><span className='text-xs'>openstreetmaps</span></Link></p>

      </div>
    </div>
  );
}
