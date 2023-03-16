import { z } from "zod";

const LoginFormSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  confirmPassword: z.string(),
});

const useForm = <TValues>(
  schema: z.Schema<TValues>,
  onSubmit: (values: TValues) => void
) => {
  return {
    onSubmit: (values: unknown) => {
      const newValues = schema.parse(values);
      onSubmit(newValues);
    },
  };
};

const form = useForm(LoginFormSchema, (values) => {
  console.log(values);
});

const otherForm = useForm(
  z.object({
    name: z.string(),
  }),
  (values) => {
    console.log(values);
  }
);
