import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type CardProps = {
  title: string
  description: string
  icon?: React.ReactNode
  value?: string
  className?: string
}

export default function DashboardCard(data: CardProps) {
  return (
    <Card className={`border-[1px] border-gray-200 text-gray-600 shadow-sm  text-left w-[90%] mb-8 md:w-[32%] ${data.className}`}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle>{data.title}</CardTitle>
          <CardDescription>{data.description}</CardDescription>
        </div>
        {data.icon}
      </CardHeader>
      <CardFooter>
        <p className="text-2xl">{data.value}</p>
      </CardFooter>
    </Card>
  )
}