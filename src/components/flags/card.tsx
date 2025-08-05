import Image from 'next/image';
import { SimpleFlag } from './interfaces/simple';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from '../ui/card';
import { InfoIcon } from 'lucide-react';
//import { IoHeartOutline } from 'react-icons/io5';

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

export const FlagCard = ({ flags, name }: SimpleFlag) => {

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>{name.common}</CardTitle>
        <CardDescription></CardDescription>
        <CardAction><InfoIcon /></CardAction>
      </CardHeader>
      <CardContent>
        <Image
         src={`${flags.png}`}
         width={100}
         height={100}
         alt={`${flags.alt}`}
       />
      </CardContent>
      <CardFooter>
        <p>{flags.alt}</p>
      </CardFooter>
    </Card>
  );
};
