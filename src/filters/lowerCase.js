export default function(value) {
  return typeof value === 'string' ? value.toLowerCase() : value;
}
