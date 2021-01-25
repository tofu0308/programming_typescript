declare module 'nearby-ferret-alerter' {
  export default function alert(loudness: 'soft'|'loud'):Promise<void>
  export function getFerretCount(): Promise<number>
}