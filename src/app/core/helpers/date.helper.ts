export function convertStringToISODate(value: string): string {
  if (value.includes('-')) return value;
  const day = value.slice(0, 2);
  const month = value.slice(2, 4);
  const year = value.slice(4, 8);

  return `${year}-${month}-${day}`;
}
