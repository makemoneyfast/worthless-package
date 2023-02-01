import { Fraction } from "./interfaces";

export function multiplyFractions(...fractions: Fraction[]): Fraction {
  const newDenominator: number = fractions.reduce(
    (accumulator, fraction) => accumulator * fraction.denominator,
    1
  );
  const newNumerator: number = fractions.reduce(
    (accumulator, fraction) => accumulator * fraction.numerator,
    1
  );
  const gcd: number = greatestCommonDivisor(newNumerator, newDenominator);

  return { numerator: newNumerator / gcd, denominator: newDenominator / gcd };
}

// Simplifies a fraction data structure.

export function simplifyFraction(a: Fraction): Fraction {
  const gcd = greatestCommonDivisor(a.numerator, a.denominator);

  return { numerator: a.numerator / gcd, denominator: a.denominator / gcd };
}

// Computes the GCD. Convenient.

export function greatestCommonDivisor(a: number, b: number): number {
  if (b == 0) {
    return a;
  } else {
    return greatestCommonDivisor(b, a % b);
  }
}
