import { useState } from "react";
import Input from "../../../components/Input/Input";
import PrimaryButton from "../../../components/Buttons/PrimaryButton";
import SecondaryButton from "../../../components/Buttons/SecondaryButton";
import { useNavigate } from "react-router-dom";

export default function SignupPage({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const navigate = useNavigate();

  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
    setPasswordConfirmation("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    console.log("Formulário enviado:", { name, email, password, passwordConfirmation });
    navigate("/dashboard");
    resetForm()

  };

  if (!isOpen) return null;

  return (
    <div className="w-full absolute z-20 h-full bg-black/50 flex items-center justify-center max-w-[1400px] m-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg w-[90%] max-w-md"
        action="">
        <h4 className="text-3xl text-gray-600 pb-5 text-center">SignUp</h4>
        <Input
          type="text"
          id="name"
          label="Nome"
          placeholder="Digite seu nome"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          type="email"
          id="email"
          label="E-mail"
          placeholder="Digite seu e-mail"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          type="password"
          id="password"
          label="Senha"
          placeholder="Digite sua senha"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Input
          type="password"
          id="passwordConfirmation"
          label="Confirmação de Senha"
          placeholder="Digite sua senha novamente"
          required
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />

        <div className="flex flex-col mt-6 gap-4 md:flex-row md:justify-between">

          <SecondaryButton
            onClick={() => {
              onClose()
              resetForm()
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