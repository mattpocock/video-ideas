// CLASSES

class MyClass {}

class MyOtherClass extends MyClass {}

// INTERFACES

interface MyInterface {}

interface MyOtherInterface extends MyInterface {}

// GENERIC CONSTRAINTS

type ArrayMember<T extends any[]> = T[number];

type Yeah = ArrayMember<string[]>;
//   ^?

// CONDITIONAL TYPES

type RemoveA<T> = T extends "a" ? never : T;

type Letters = RemoveA<"a" | "b" | "c">;
