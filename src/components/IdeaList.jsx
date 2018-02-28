import React from 'react';
import { IdeaCard } from './';

export const IdeaList = ({ ideas }) =>
  Object.keys(ideas)
    .map(key => <IdeaCard key={key} idea={ideas[key]} />);
