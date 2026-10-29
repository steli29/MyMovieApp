export const formatMovieRuntime = (runtime: string): string => {
  const minutes = parseInt(runtime, 10);

  if (Number.isNaN(minutes)) {
    return runtime;
  }

  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  if (hours === 0) {
    return `${remainingMinutes}m`;
  }

  return remainingMinutes > 0 ? `${hours}h ${remainingMinutes}m` : `${hours}h`;
};
