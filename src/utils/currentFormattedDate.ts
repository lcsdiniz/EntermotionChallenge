export default function currentFormattedDate() {
  const date = new Date();

  return new Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  }).format(date)
}