export const isSquare = (num: number): boolean => {
  return num > 0 && Math.sqrt(num) % 1 === 0
}

export function isFibonacci (num: number): boolean {
  return num >= 1 && (isSquare((5*(num**2))-4) || isSquare((5*(num**2))+4))
}

export function isPrime (num: number): boolean {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false
  }
  return num > 1
}
