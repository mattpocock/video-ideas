/**
 * Specify whether the component should be hidden
 *
 * @example
 *
 * <Component hidden />
 */
const Component = (props: { hidden: boolean }) => {};

const OtherComponent = () => {
  return <Component hidden />;
};
