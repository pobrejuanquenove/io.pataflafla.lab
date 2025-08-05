import { FlagsGrid, SimpleFlag } from '@/components/flags/';
import Link from 'next/link';

const getFlags = async (
): Promise<SimpleFlag[]> => {
  const data = await fetch(
    `https://restcountries.com/v3.1/all?fields=name,flags`,
  ).then((res) => res.json());
  return data
};
export default async function FlagPage() {
  const flags = await getFlags();
  return (
    <div className="flex flex-col gap-5 p-7">
      <div className="bg-muted/50 rounded-xl p-7 grid">
        <h1 className="block text-2xl mb-3">
          ISR using{' '}
          <Link
            className="text-blue-300 hover:underline"
            href={'https://restcountries.com'}
            target="_blank"
          >
            REST Countries API
          </Link>
        </h1>
        <p className="block">
          This example fetches the first 150 entries from the API result at{' '}
          <span>build time</span> in order to cache the response.
        </p>
        <p className="block">
          Client side performance will be benefits by using this technique;
          also, images are lazy loaded; it means, they&apos;re loaded when
          appears in client viewport.
        </p>
        <h2 className="block text-xl my-3">Endpoints:</h2>
        <div className="bg-muted/50 p-4 rounded-md">
          <ul className="font-mono">
            <li>
              <span>
                /flags<span className="font-light ml-2 text-xs">(current)</span>
              </span>
            </li>
            <li>/flags/{`{name}`}</li>
          </ul>
        </div>
      </div>
      <FlagsGrid flags={flags} />
    </div>
  );
}
