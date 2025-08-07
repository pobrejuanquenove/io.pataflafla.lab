import { SimpleFlag } from './interfaces/simple';
import { FlagCard } from './card';

interface Props {
  flags: SimpleFlag[];
}
export const FlagsGrid = ({ flags }: Props) => {

  return (
    <div className="flex flex-wrap gap-5 items-stretch justify-center">
      {flags.map((flag: SimpleFlag, v) => (
        <FlagCard key={v} flags={flag.flags} name={flag.name} />
      ))}
    </div>
  );
};
