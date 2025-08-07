import Image from 'next/image';
import { SimplePokemon } from './interfaces/simple';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from '../ui/card';
import { InfoIcon, MoreVerticalIcon } from 'lucide-react';
import {
  HeartIcon,
  MessageCircleIcon,
  MoreHorizontalIcon,
  ShareIcon,
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Button } from '../ui/button';
import Link from 'next/link';
//import { IoHeartOutline } from 'react-icons/io5';

interface Props {
  pokemon: SimplePokemon;
}

// <div className="mx-auto right-0 mt-2 w-60">
//   <div className="bg-white rounded overflow-hidden shadow-lg">
//     <div className="flex flex-col items-center text-center p-6 bg-gray-800 border-b">
//       <Image
//         src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
//         width={100}
//         height={100}
//         alt={`${name}`}
//       />
//       <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{name}</p>
//       <div className="mt-5">
//         <Link href={`pokemons/${ name }`} className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100">
//           +más
//         </Link>
//       </div>
//     </div>
//     <div className="border-b">
//       <Link
//         href=""
//         className="px-4 py-2 hover:bg-gray-100 flex item-center"
//       >
//         <div className="text-red-600">
//           {/*<IoHeartOutline */}
//         </div>
//         <div className="pl-3">
//           <p className="text-sm font-medium text-gray-800 leading-none">
//             No es favorito
//           </p>
//         </div>
//       </Link>
//     </div>
//   </div>
// </div>

export const PokemonCard = ({ pokemon }: Props) => {
  const { id, name } = pokemon;
  return (
    <Card className="w-full max-w-md shadow-none gap-0 p-0">
      <CardHeader className="flex flex-row items-center justify-between py-4 pr-3">
        <CardTitle className='capitalize'>{name}</CardTitle>
        <Link href={`pokemon/${ name }`} className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground p-2">
          <span className="hidden sm:inline text-xs">more</span>
          <MoreVerticalIcon />
        </Link>
      </CardHeader>
      <CardContent className="p-0">
        <div className="aspect-video bg-muted border-y flex items-center justify-center">
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            width={100}
            height={100}
            alt={`${name}`}
          />
        </div>
        <div className="pt-3 pb-4 px-6">
          <h2 className="font-semibold">Exploring New Horizons</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Had an amazing time discovering hidden gems! 🌄 Can&apos;t wait to
            share more from this journey.{' '}
            <span className="text-blue-500">#Wanderlust</span>{' '}
            <span className="text-blue-500">#NatureLovers</span>
          </p>
        </div>
      </CardContent>
      <Separator />
      <CardFooter className="py-4 pr-3 justify-end">
        <Button variant="ghost" className="text-muted-foreground">
          <span className="hidden sm:inline text-xs">Like</span> <HeartIcon />
        </Button>
      </CardFooter>
    </Card>
  );
};
