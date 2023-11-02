export const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

export const formatAddress = (address: string) => address.replaceAll(', ', '\n');
