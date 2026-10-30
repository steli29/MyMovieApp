import { EMPTY_VALUE } from './constants';

export const formatDate = (dateString: string): string => {
  if (!dateString || dateString === EMPTY_VALUE) {
    return EMPTY_VALUE;
  }

  const date = new Date(dateString);

  if (Number.isNaN(date.getTime())) {
    return EMPTY_VALUE;
  }

  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  });
};
