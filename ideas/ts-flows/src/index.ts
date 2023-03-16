interface FlowBuilder<TId> {
  global: {
    strict: () => {
      __type: "strict";
      __global: true;
    };
    listen: <T extends string, P>(
      type: T,
      listener: (payload: P) => any
    ) => {
      __type: "listener";
      type: T;
      payload: P;
      __global: true;
    };
  };
  goto: <T extends TId>(id: T) => void;
  strict: () => {
    __type: "strict";
    __global: false;
  };
  listen: <T extends string, P>(
    type: T,
    listener: (payload: P) => any
  ) => {
    __type: "listener";
    type: T;
    payload: P;
    __global: false;
  };
  id: <T extends string>(
    id: T
  ) => {
    __type: "id";
    id: T;
  };
  data: <T>() => {
    __type: "data";
    data: T;
  };
}

type IsNever<T> = [T] extends [never] ? 1 : 0;

type FlowSteps<TId extends string = string> = readonly ((
  f: FlowBuilder<TId>
) => readonly any[])[];

const createFlow = <const T extends FlowSteps<GetIds<T>>>(
  ...steps: T
): T => {
  return {} as any;
};

type ToTupleOfResults<T> = T extends readonly [
  (arg: any) => infer THead,
  ...infer TRest
]
  ? [THead, ...ToTupleOfResults<TRest>]
  : [];

type ToIds<T> = [T] extends [never] ? 'woweeeee' : T extends readonly any[]
  ? T[number] extends infer TMember extends any[]
    ? Extract<
        TMember[number],
        {
          __type: "id";
          id: string;
        }
      >["id"]
    : never
  : never;

type GetIds<T> = ToIds<ToTupleOfResults<T>>;

type Yeah = readonly [
  (f: FlowBuilder<string>) => (
    | {
        __type: "strict";
        __global: true;
      }
    | {
        __type: "id";
        id: "loading";
      }
    | {
        __type: "data";
        data: {
          userId: string;
        };
      }
  )[],
  (f: FlowBuilder<string>) => {
    __type: "data";
    data: {
      id: string;
    };
  }[]
];

type Ids = GetIds<Yeah>;

const result = createFlow(
  (f) => [
    f.global.strict(),
    f.id("loading"),
    f.data<{ userId: string }>(),
  ],
  (f) => [
    f.data<{
      id: string;
    }>(),
  ]
);

type IdsFromResult = GetIds<typeof result>;


export {}