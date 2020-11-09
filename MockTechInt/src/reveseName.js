function reverseMyName(str) {
  return str.split("").reverse().join("");
}

const Test = (fun, result) => console.log(reverseMyName(fun) === result);

Test("A", "A");
Test("Michael Jackson", "noskcaJ leahciM");
Test("Alvian Zachry Faturrahman", "namharrutaF yrhcaZ naivlA");
Test("", "");
