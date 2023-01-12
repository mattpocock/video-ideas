type AnyName = string;
type CoolName = "matt" | "fred" | "brian" | "louise";
type MattsName = "matt";

// Covariance: when you can specify a narrower type in that position

type FuncWithReturnType = () => CoolName;

const func2: FuncWithReturnType = (): MattsName => {
  return {} as any;
};

// Contravariance: when you can specify a wider type in that position

type FuncWithArg = (name: CoolName) => void;

const func: FuncWithArg = (name: AnyName) => {};
