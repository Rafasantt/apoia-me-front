import FormDonation from "./Components/FormDonation";

export default function Donation() {
  return (
    <div className="flex w-full min-h-screen bg-gradient-to-b from-white to-gray-50 max-w-[2000px] m-auto">
      <div className="hidden md:block md:w-[45%] min-h-screen relative">
        <img
          className="md:w-full h-screen min-w-[400px]"
          src="/BgDonate.png"
          alt="Background"
        />
      </div>

      
      <div className='absolute top-0 w-full bg-blue-500 p-3 md:bg-transparent max-w-[1400px]'>
        <header className="container mx-auto py-1 px-4">
          <div className="flex items-center">
            <div className="flex items-center text-white font-bold text-xl">
              <span>Apoia-me</span>
            </div>
          </div>
        </header>
      </div>


      <div className="flex justify-center items-center md:w-[55%] w-full min-h-screen">
        <FormDonation/>
      </div>

      {/* <DrawerDialogDemo isOpen={open} onClose={handleClose} />
      <DrawerDialogLogin isOpen={openLogin} onClose={handleCloseLogin}/> */}
    </div>
  )
}