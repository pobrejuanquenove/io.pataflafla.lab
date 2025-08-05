import { FlagsGrid } from '@/components/flags/';

const getFlags = async (
  limit = 20,
  offset = 0,
): Promise<[]> => {
  const data = await fetch(
    `https://restcountries.com/v3.1/all?fields=name,flags`,
  ).then((res) => res.json());
  console.log(data)
  return data
};
export default async function FlagPage() {
  const flags = await getFlags(150);
  return (
    <div className="flex flex-col">
      <FlagsGrid flags={flags} />
    </div>
  );
}
