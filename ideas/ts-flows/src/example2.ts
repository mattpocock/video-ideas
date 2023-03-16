import { F } from "ts-toolbelt";

interface FlowConfig<TId extends string = string> {
  id?: TId;
  goto?: F.NoInfer<TId> | "prev" | "next";
}

type FlowSteps<TId extends string = string> =
  readonly FlowConfig<TId>[];

const createFlow = <const T extends FlowSteps<GetIds<T>>>(
  ...steps: T
): T => {
  return {} as any;
};

type GetIds<T extends readonly FlowConfig[]> = GetId<
  T[number]
>;

type GetId<T extends FlowConfig> = T extends {
  id: infer TId extends string;
}
  ? TId
  : never;

const flow = createFlow(
  {
    goto: "next",
  },
  {
  }
);

type IdsFromResult = GetIds<typeof flow>;

export {};
