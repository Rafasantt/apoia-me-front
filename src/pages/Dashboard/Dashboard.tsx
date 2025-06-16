import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded'
import PeopleOutlineRoundedIcon from '@mui/icons-material/PeopleOutlineRounded'
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded'
import WalletRoundedIcon from '@mui/icons-material/WalletRounded'
import { DonationTable } from './Components/donates'
import DashboardCard from './Components/Card'
import { DrawerDialogUrl } from './Components/Url'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function DashboardPage() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const handleShowDialog = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleLogout = () => {
    navigate('/')
  }

  return (
    <div className='w-full max-w-[1400px] m-auto'>
      <DrawerDialogUrl isOpen={open} onClose={handleClose} />
      <header className=" mx-auto bg-blue-500 py-1 px-4">
        <div className="flex justify-between items-center p-3">
          <div className="flex items-center text-white font-bold text-xl">
            <span>Apoia-me</span>
          </div>

          <div className="flex items-center text-white font-semibold text-xs">
            <span className='mr-5 cursor-pointer' onClick={handleShowDialog}>
              Minha Url
            </span>

            <span className='cursor-pointer' onClick={handleLogout}>
              Sair
              <LogoutRoundedIcon className="ml-1" fontSize='small' />
            </span>
          </div>
        </div>
      </header>

      <div>
        <h1 className="text-2xl text-gray-500 font-semibold pt-4 pl-2">Minha Conta</h1>
        <section className='flex flex-col w-full justify-center items-center text-center mt-5 md:flex md:flex-row md:justify-around'>
          <DashboardCard
            title='Apoiadores'
            description='Total de apoiadores'
            icon={<PeopleOutlineRoundedIcon fontSize='large' />}
            value='0'
            className='bg-gradient-to-br from-blue-500 to-blue-400 text-white border-blue-500'
          />

          <DashboardCard
            title='Total recebido'
            description='Quantidade total recebida'
            icon={<AttachMoneyRoundedIcon fontSize='large' />}
            value='R$ 0.00'
          />

          <DashboardCard
            title='Saldo em conta'
            description='Saldo pendente'
            icon={<WalletRoundedIcon fontSize='large' />}
            value='R$ 0.00'
          />
        </section>

        <section>
          <h1 className="text-2xl text-gray-500 font-semibold pt-4 pl-2">Ultimas Movimentações</h1>
          <DonationTable />
        </section>
      </div>
    </div>
  )
}