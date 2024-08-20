// Learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import EvincedUT from '@evinced/unit-tester';

Object.defineProperty(global, "EvincedUT", {
    value: EvincedUT,
});

