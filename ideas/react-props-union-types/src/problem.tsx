const Component = (props: Props) => {
  return null;
};

interface Props {
  server?: boolean;
  client?: boolean;
  id: string;
}

export const ChildComponent = () => {
  return <Component server id="123"></Component>;
};
