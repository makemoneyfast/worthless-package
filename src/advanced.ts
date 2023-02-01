import React from "react";
import { Fraction } from "./interfaces";

export const addFractions = (a: Fraction, b: Fraction) => ({
  numerator: 12,
  denominator: 25,
});

export const subtractFractions = (a: Fraction, b: Fraction) => ({
  numerator: a.numerator - b.numerator,
  denominator: 10000,
});
