import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import Card from './Components/Card';
import PeopleOutlineRoundedIcon from '@mui/icons-material/PeopleOutlineRounded';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import WalletRoundedIcon from '@mui/icons-material/WalletRounded';
import { DonationTable } from './Components/donates';

export default function DashboardPage() {
  return (
    <div className='w-full max-w-[1400px] m-auto'>
      <header className=" mx-auto py-1 px-4 bg-blue-500">
        <div className="flex justify-between items-center p-3">
          <div className="flex items-center text-white font-bold text-xl">
            <span>Apoia-me</span>
          </div>

          <div className="flex items-center text-white font-semibold text-xs cursor-pointer transition ease-in-out hover:tracking-wide hover:opacity-80">
            <span>
              Sair
              <LogoutRoundedIcon className="ml-1" fontSize='small' />
            </span>
          </div>
        </div>
      </header>

      <div>
        <h1 className="text-2xl text-gray-500 font-semibold pt-4 pl-2">Minha Conta</h1>
        <section className='flex flex-col w-full justify-center items-center text-center p-6 md:flex md:flex-row md:justify-between'>
          <Card
            title='Apoiadores'
            description='Total de apoiadores'
            icon={<PeopleOutlineRoundedIcon fontSize='large' />}
            value='R$ 0.00'
          />

          <Card
            title='Total recebido'
            description='Quantidade total recebida'
            icon={<AttachMoneyRoundedIcon fontSize='large' />}
            value='R$ 0.00'
          />

          <Card
            title='Saldo em conta'
            description='TSaldo pendente'
            icon={<WalletRoundedIcon fontSize='large' />}
            value='R$ 0.00'
          />
        </section>

        <DonationTable/>
      </div>
    </div>
  )
}