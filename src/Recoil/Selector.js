import { selector } from 'recoil';
import { RecoilItem } from './RecoilItem';

export const doubledCounter = selector({
  key: 'doubledCounter',
  get: ({ get }) => {
    const count = get(RecoilItem);
    return count * 2;
  },
});