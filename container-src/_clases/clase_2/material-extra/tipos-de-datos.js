const dataTypes = [
    { Value: 42, Type: typeof 42 },               // Number
    { Value: "Hello, World!", Type: typeof "Hello, World!" },  // String
    { Value: true, Type: typeof true },           // Boolean
    { Value: undefined, Type: typeof undefined }, // Undefined
    { Value: null, Type: typeof null },           // Null (special case, returns "object")
    { Value: Symbol("id"), Type: typeof Symbol("id") }, // Symbol
    { Value: BigInt(9007199254740991), Type: typeof BigInt(9007199254740991) }, // BigInt
    { Value: { name: "Alice" }, Type: typeof { name: "Alice" } }, // Object
    { Value: [1, 2, 3], Type: typeof [1, 2, 3] }, // Array (typeof returns "object")
    { Value: function() {}, Type: typeof function() {} }, // Function
];

console.table(dataTypes);

