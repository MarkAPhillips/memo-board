import React from 'react';
import { IdeaCard } from './';

export const IdeaList = ({ ideas }) =>
  ideas.map(item => <IdeaCard key={item.id} idea={item} />);
