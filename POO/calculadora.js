class Calculator {
  static sum(a, b) {
    return a + b;
  }

  static multiply(a, b) {
    return a * b;
  }
}
let number1 = parseFloat(prompt("Digite o primeiro número:"));
let number2 = parseFloat(prompt("Digite o segundo número:"));

console.log("Soma:", Calculator.sum(number1, number2));
console.log("Multiplicação:", Calculator.multiply(number1, number2));