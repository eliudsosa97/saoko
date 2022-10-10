const {suma, capicua, palindromo} = require('../op-suma');

test('adds 1 + 2 to equal 3', () => {
    expect(suma(1, 2)).toBe(3);
});
test('adds -1 + -20 to equal -21', () => {
    expect(suma(-1, -20)).toBe(-21);
});

test('oso', () => {
    expect(palindromo('oso')).toBe('oso');
});

