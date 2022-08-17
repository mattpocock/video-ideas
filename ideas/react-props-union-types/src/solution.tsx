const Component = (props: Props) => {
  return null;
};

type Props = (
  | {
      server: true;
    }
  | {
      client: true;
    }
) & {
  id: string;
};

export const ChildComponent = () => {
  return <Component id="123" client></Component>;
};
