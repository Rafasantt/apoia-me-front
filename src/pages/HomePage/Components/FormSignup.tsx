import { useForm } from "react-hook-form";
import Input from "../../../components/Input/Input";
import PrimaryButton from "../../../components/Buttons/PrimaryButton";
import SecondaryButton from "../../../components/Buttons/SecondaryButton";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const signupSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("E-mail inválido").min(1, "E-mail é obrigatório"),
  password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
  passwordConfirmation: z.string(),
}).refine((data) => data.password === data.passwordConfirmation, {
  path: ["passwordConfirmation"],
  message: "As senhas não são identicas",
})

type SignupFormDataSchema = z.infer<typeof signupSchema>;

export default function SignupPage({ isOpen, onClose }: { isOpen: boolean; onClose: () => void; }) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<SignupFormDataSchema>({
    resolver: zodResolver(signupSchema),
  })
  const navigate = useNavigate();

  const handleCreatAccount = (data: SignupFormDataSchema) => {
    console.log(data);
    navigate("/dashboard");
  };

  if (!isOpen) return null;

  return (
    <div className="w-full absolute z-20 h-full bg-black/50 flex items-center justify-center max-w-[1400px] m-auto">
      <form
        onSubmit={handleSubmit(handleCreatAccount)}
        className="bg-white p-5  rounded-lg w-[90%] max-w-md"
      >
        <h4 className="text-3xl text-gray-600 pb-5 text-center">SignUp</h4>
        <Input
          type="text"
          label="Nome"
          placeholder="Digite seu nome"
          {...register("name")}
          error={errors.name?.message}
        />

        <Input
          type="email"
          label="E-mail"
          placeholder="Digite seu e-mail"
          {...register("email")}
          error={errors.email?.message}
        />

        <Input
          type="password"
          label="Senha"
          placeholder="Digite sua senha"
          {...register("password")}
          error={errors.password?.message}
        />

        <Input
          type="password"
          label="Confirmação de Senha"
          placeholder="Digite sua senha novamente"
          {...register("passwordConfirmation")}
          error={errors.passwordConfirmation?.message}
        />

        <div className="flex flex-col mt-6 gap-4 md:flex-row md:justify-around">
          <SecondaryButton
            onClick={() => {
              onClose()
              reset()
            }}
            className="md:w-[40%]"
          >
            Cancelar
          </SecondaryButton>

          <PrimaryButton
            className="md:w-[40%]"
          >
            Salvar
          </PrimaryButton>
        </div>
      </form>
    </div>
  )
}