const stringLeng=require('./script.js')
const reverseSt=require('./reverse.js')
const Call=require('./calculator.js')
const capital=require('./capital.js')
const Calc=new Call()
test('test string length',()=>{
    expect(stringLeng('one')).toBe(3);
});

test('stringLength throws an error if the string is too short', () => {
    expect(() => stringLeng('')).toThrowError('one error It should be in betwen 1 and 10');
  });
  
test('stringLength throws an error if the string is too long', () => {
    expect(() => stringLeng('12345678901')).toThrowError('one error It should be in betwen 1 and 10');
  });

test('string reverse',()=>{
    expect(reverseSt("reverse")).toBe("esrever");
})
describe('my calc',()=>{
    test('should add numbers correctly', () => {
        expect(Calc.add(2, 2)).toEqual(4);
      });
    
      test('should subtract numbers correctly', () => {
        expect(Calc.subtract(2, 2)).toEqual(0);
      });
    
      test('should multiply numbers correctly', () => {
        expect(Calc.multiply(2, 2)).toEqual(4);
      });
    
      test('should divide numbers correctly', () => {
        expect(Calc.divide(2, 2)).toEqual(1);
      });
})
test('capitalize',()=>{
    expect(capital('five')).toBe('Five')
})
  