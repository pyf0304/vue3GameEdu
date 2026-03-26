// declare module 'jsmind' {
//   interface Mind {
//     add_root(node: any): any;
//     // 其他可能的方法和属性
//   }

//   const jsMind: {
//     new (options: any): Mind;
//     // 其他可能的方法和属性
//   };

//   export = jsMind;
// }
// declare module 'jsmind/es6/jsmind' {
//   const jsMind: any;
//   export = jsMind;
// }
declare module 'jsmind' {
  const jsMind: any;
  export default jsMind;
}
