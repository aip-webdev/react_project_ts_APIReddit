import React from 'react';

export const pickFromSyntheticEvent =
  <T extends HTMLElement>() =>
  	<K extends keyof T>(key: K) =>
  		<E extends (t: T[K]) => void>(fn: E) =>
  			(e: React.SyntheticEvent<T>) =>
  				fn(e.currentTarget[key])
