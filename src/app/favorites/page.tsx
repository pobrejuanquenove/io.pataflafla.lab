import Link from 'next/link';
import { FavoriteGrid } from '@/components/flags/client/FavoriteGrid';

export default async function FavoritePage() {
  return (
    <div className="flex flex-col gap-5 p-7">
      <div className="bg-muted/50 rounded-xl p-7 grid">
        <h1 className="block text-2xl mb-3">
          Working with <Link href={'https://redux-toolkit.js.org'} target='_blank'>Redux Toolkit</Link>
        </h1>
        <p className="block">
          This example fetches the first 150 entries from the API result at{' '}
          <span>build time</span> in order to cache the response. In other{' '}
          words, reduces the server load by serving prerendered static pages.
        </p>
        <p className="block">
          Client side performance will be benefits by this feature. Also,{' '}
          images are lazy loaded; it means, they&apos;re loaded when appears{' '}
          in client viewport.
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
      <FavoriteGrid />
    </div>
  );
}
