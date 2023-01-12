import { GetStaticProps, InferGetStaticPropsType } from "next";

export const getStaticProps = () => {
  return {
    props: {
      id: "123",
    },
  };
} satisfies GetStaticProps;

export default function Page(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  props;
  // ^?
}
