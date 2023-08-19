/**
 * const,let等の変数宣言
 */
// var val1 = "var変数";
// console.log(val1)

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能性
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 ="let変数"　;
// console.log(val2);

// //letは上書きが可能
// val2 =  "let変数を上書き";
// console.log(val2);

// //letは再宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// //const変数は上書き不可
// //  val3 = "const変数を上書き"

// const val3 = "const変数を再宣言";


// const val4 = {
//   name: "ジャケえ",
//   age: 28,
// };
// val4.name = "jek";
// val4.adress = "Hiroshima";
// console.log(val4);

// const val5 = ['dog', 'cat'];
// val5[0] = 'bird'
// val5.push("mokey");
// console.log(val5);



/**
 * テンプレート文字列
 */
// const name = "田中"; // 例として「田中」という名前を代入
// const age = 25; // 例として「25」という年齢を代入

// const message1 = "私の名前は" + name + "です。年齢は" + age + "です";
// console.log(message1);

// const message2 = `私の名前は${name}です。私の年齢は${age}です。`;
// console.log(message2);

// /**
//  * アロー関数
//  */
// //従来の関数
// // function func1(str){
// //   return str;
// // }
// const func1 = function(str) {
//   return str; 
// }
// console.log(func1("func1です"));

// // アロー関数
// const func2 = str => str;
// console.log(func2("func2です"));

// const func3 = (num1, num2) => num1 + num2;

// console.log(func3(10,20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "ジャケえ",
//   age: 28,
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const {name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const myProfile = ['ジェキェ', 28];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です。`;
// console.log(message4);

/**
 * デフォルト値
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん`);
// sayHello("ジェキェ");

/**
 * スプレッド構文 ...
 */
//　配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1)

// const sumFunc =(num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console

/**
 * mapやfilterを使った配列の処理
 */


