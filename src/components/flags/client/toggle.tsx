'use client'

import { useAppDispatch, useAppSelector } from '@/store';
import { toggleFavorites } from '@/store/flags/favorites';
import { Button } from '@/components/ui/button';
import { SimpleFlag } from '../interfaces/simple';
import { Heart, HeartFill } from 'geist-icons';

export const FlagToggle = ({ flags, name }: SimpleFlag) => {
  const { common } = name;
  const isFavorite = useAppSelector((state) => !!state.favorites[common]);
  const dispatch = useAppDispatch();

  const onToggleClick = () => {
    dispatch(toggleFavorites({flags, name}))
  };

  return (
    <Button
      onClick={onToggleClick}
      variant="ghost"
      className="text-red-300 hover:text-red-400"
    >
      {isFavorite ? <HeartFill /> : <Heart />}
    </Button>
  );
};
