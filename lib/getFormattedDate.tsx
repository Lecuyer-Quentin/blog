//! Dont forget to import Intl.DateTimeFormat polyfill in your app
export default function getFormattedDate(dateString: string): string {
  let date = new Date(dateString);
  if (isNaN(date.getTime())) {
    throw new Error(`Invalid date string: ${dateString}`);
  }
  return new Intl.DateTimeFormat('fr-FR', {
    dateStyle: 'full'
  }).format(date);
}