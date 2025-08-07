'use client';
import { SimpleFlag } from '../interfaces/simple';
import { useAppSelector, useAppDispatch } from '@/store';
import { FlagCard } from '../card';
import { useState } from 'react';
import { FlagsGrid } from '../grid';

export const FavoriteGrid = () => {
  const favoriteFlags = useAppSelector((state) =>
    Object.values(state.favorites),
  );
  const [flags, setFlags] = useState(favoriteFlags);

  return (
    <div className="flex flex-wrap gap-5 items-stretch justify-center">
      <>
        {flags.length ? (
          <FlagsGrid flags={flags} />
        ) : (
          <span>No flag</span>
        )}
      </>
    </div>
  );
};
