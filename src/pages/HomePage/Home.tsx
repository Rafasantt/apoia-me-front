import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import { DrawerDialogDemo } from "./Components/FormSignup";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DrawerDialogLogin } from './Components/FormLogin';

export default function HomePage() {
    const [open, setOpen] = useState(false);
    const [openLogin, setOpenLogin] = useState(false)

  const handleNavigate = () => {
    setOpen(true);  // Abrir o dialog/drawer ao clicar no botão
  };

  const handleClose = () => {
    setOpen(false);  // Fechar o dialog/drawer
  };

    const handleLogin = () => {
    setOpenLogin(true);  // Abrir o dialog/drawer ao clicar no botão
  };

  const handleCloseLogin = () => {
    setOpenLogin(false);  // Fechar o dialog/drawer
  };


  return (
    <div className="flex w-full min-h-screen bg-gradient-to-b from-white to-gray-50 max-w-[2000px] m-auto">
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
                  <Button
                    onClick={handleNavigate}
                    size={"lg"}
                    className='bg-blue-500 hover:bg-blue-600 cursor-pointer '
                  >
                    Começar agora
                    <ArrowForwardIcon fontSize='small' />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <div className="hidden md:block md:w-[45%] min-h-screen relative">
        <span onClick={handleLogin}
        className='absolute right-0 text-md mx-auto py-1 px-4 font-bold text-white cursor-pointer'>
          Login
          <LoginRoundedIcon className='ml-1' fontSize='small'/>
          </span>
        <img
          className="md:w-full h-screen min-w-[400px]"
          src="./BgTeste.png"
          alt="Background"
        />
      </div>

      <DrawerDialogDemo isOpen={open} onClose={handleClose} />
      <DrawerDialogLogin isOpen={openLogin} onClose={handleCloseLogin}/>
    </div>
  )
}