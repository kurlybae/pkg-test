import {multiply, subtract, sum} from "../services/calculator";

describe('Calculator Test', () => {
    it('sum', () => expect(sum(1, 1)).toEqual(2));
    it('subtract', () => expect(subtract(3, 1)).toEqual(2));
    it('multiply', () => expect(multiply(2, 1)).toEqual(2));// d
});
