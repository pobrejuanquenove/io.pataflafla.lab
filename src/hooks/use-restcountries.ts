import { Flag } from '@/components/flags/interfaces/flag';
import { SimpleFlag } from '@/components/flags/interfaces/simple';
import { notFound } from 'next/navigation';
import * as React from 'react';
const getFlags = async (
): Promise<SimpleFlag[]> => {
  const data = await fetch(
    `https://restcountries.com/v3.1/all?fields=name,flags`,
  ).then((res) => res.json());
  return data
};
export function useRestCountriesAll() {
  return {};

}


const getFlag = async (name: string): Promise<Flag> => {

  try {
    const flag = await fetch(`https://restcountries.com/v3.1/name/${name}`, {
      cache: 'force-cache',
    }).then((response) => response.json());
    return flag[0];
  } catch (error) {
    console.log(error)
    notFound();
  }
};
export function useRestCountriesByName() {
  return {};
}
