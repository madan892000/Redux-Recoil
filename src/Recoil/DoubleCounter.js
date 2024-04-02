import React from 'react';
import { useRecoilValue } from 'recoil';
import { doubledCounter } from './Selector';

const DoubleCounter = () => {
  const doubledCount = useRecoilValue(doubledCounter);

  return <h2>Doubled Counter: {doubledCount}</h2>;
};

export default DoubleCounter;