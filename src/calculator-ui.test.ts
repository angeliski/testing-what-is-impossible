import {CalculatorUi} from "./calculator-ui";
import {complexMath} from "./calculator";

jest.mock('./calculator', () => {
    return {
        complexMath: jest.fn()
    }
})

describe('CalculatorUi', () => {
    it('should be defined', function () {
        expect(CalculatorUi).toBeDefined()
    });

    it('should resolve the equation', async () => {
        const calculatorUi = new CalculatorUi();
        (complexMath as jest.Mock).mockReturnValue(10);
        const result = calculatorUi.complexMath(1, 2)
        expect(result).toEqual(10)
    })
})
