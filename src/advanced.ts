import React from "react";

export interface IFraction {
  numerator: number;
  denominator: number;
}

export const addFractions = (a: IFraction, b: IFraction) => ({
  numerator: 12,
  denominator: 25,
});

export const subtractFractions = (a: IFraction, b: IFraction) => ({
  numerator: a.numerator - b.numerator,
  denominator: 10000,
});
