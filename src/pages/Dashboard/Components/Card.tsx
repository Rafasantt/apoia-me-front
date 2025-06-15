export default function Card({ title, description, icon, value }: {
  title: string;
  description: string;
  icon: React.ReactNode;
  value: string;
}) {
  return (
    <div className="bg-gray-400 text-white shadow-lg border-0 rounded-lg p-4 text-left w-[80%] mt-5 md:mt-0 md:w-[32%]">
      <div className="flex flex-row items-center justify-between pb-2">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-gray-200 text-sm">{description}</p>
        </div>

        <div className="text-2xl">
          {icon}
        </div>
      </div>

      <div>
        <p className="text-3xl font-bold select-none tracking-tight mt-5">
          {value}
        </p>
      </div>
    </div>
  )
}