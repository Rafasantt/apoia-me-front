import PrimaryButton from "../../components/Buttons/PrimaryButton";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SignupPage from "./Components/FormSignup";
import { useState } from "react";

export default function HomePage() {
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const handleNavigate = () => {
    setIsSignupOpen(true);
  }


  return (
    <div className="flex w-full min-h-screen bg-gradient-to-b from-white to-gray-50 max-w-[1400px] m-auto">
      <div className="flex flex-col md:w-[55%] w-full min-h-screen">
        <header className="container mx-auto py-1 px-4">
          <div className="flex items-center">
            <div className="flex items-center text-blue-500 font-bold text-xl">
              <span>Apoia-me</span>
            </div>
          </div>
        </header>

        <main className="flex-1 flex md:items-center md:justify-center">
          <div className="container mx-auto px-4 py-12 md:py-24">
            <div className="max-w-3xl">
              <div className="text-center space-y-9 md:text-left">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-600">
                  Receba apoio de quem acredita em você.
                </h1>

                <p className="text-lg text-gray-600 max-w-2xl">
                  Na Apoia-me, você cria seu perfil, compartilha seu link exclusivo e recebe doações de quem quer te apoiar. Simples, seguro e direto.
                </p>

                <div>
                  <PrimaryButton
                    onClick={handleNavigate}
                  >
                    Começar agora
                    <ArrowForwardIcon className="ml-2 h-4 w-4" />
                  </PrimaryButton>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <div className="hidden md:block md:w-[45%] min-h-screen relative">
        <img
          className="md:w-full h-screen min-w-[400px]"
          src="./BgTeste.png"
          alt="Background"
        />
      </div>

      <SignupPage
        isOpen={isSignupOpen}
        onClose={() => setIsSignupOpen(false)}
      />
    </div>
  )
}