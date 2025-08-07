import Link from 'next/link';
import { SimpleFlag } from './interfaces/simple';
import { Avatar, AvatarImage } from '../ui/avatar';
import { Card, CardContent } from '../ui/card';
import { FlagToggle } from './client/toggle';

export const FlagCard = ({ flags, name }: SimpleFlag) => {

  return (
    <Card className="w-full max-w-sm bg-muted/70 shadow-none border hover:border-red-200">
      <CardContent className="flex flex-row items-center justify-between py-2 pr-3">
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12">
            <AvatarImage about={flags.alt} src={flags.svg} />
          </Avatar>
          <div className="flex flex-col gap-1">
            <span className="text-[15px] leading-none font-semibold">
              {name.official}
            </span>
            <Link
              className="text-sm leading-none text-muted-foreground hover:text-blue-300"
              href={`flag/${name.common.toLowerCase()}`}
            >
              {`@${name.common.toLowerCase()}`}
            </Link>
          </div>
        </div>
        <FlagToggle flags={flags} name={name} />
      </CardContent>
    </Card>
  );
};
