import {CalculatorUi} from "./calculator-ui";

describe('CalculatorUi', () => {
    it('should be defined', function () {
        expect(CalculatorUi).toBeDefined()
    });

    it('should resolve the equation', async () => {
        const calculatorUi = new CalculatorUi();
        const result = calculatorUi.complexMath(1, 2)
        expect(result).toEqual(10)
    })
})
