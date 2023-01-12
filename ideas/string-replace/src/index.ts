type StringReplace<
  TString extends string,
  TToReplace extends string,
  TReplacement extends string
> = TString extends `${infer TPrefix}${TToReplace}${infer TSuffix}`
  ? `${TPrefix}${TReplacement}${StringReplace<
      TSuffix,
      TToReplace,
      TReplacement
    >}`
  : TString;

type Result = StringReplace<"send_email_new", "_", "-">;

type CheckConditional =
  "send_email" extends `${infer TPrefix}${"_"}${infer TSuffix}`
    ? [TPrefix, TSuffix]
    : false;

type CheckReplacement =
  "cool_something" extends `${infer TPrefix}${"_"}${infer TSuffix}`
    ? `${TPrefix}${"-"}${TSuffix}`
    : "cool_something";
