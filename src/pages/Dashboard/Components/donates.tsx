
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/Table/Table"



const donations = [
  {
    id: "1",
    donorName: "Teste",
    donorMessage: "Mensagem teste!",
    amount: 100,
    createdAt: new Date("2023-10-01T12:00:00Z"),
  },
]

export function DonationTable() {
  return (
    <>
      {/* Versão para desktop */}
      <div className="hidden lg:block text-gray-500 p-5">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-semibold text-gray-600">Nome do doador</TableHead>
              <TableHead className="font-semibold text-gray-600">Mensagem</TableHead>
              <TableHead className="text-center font-semibold text-gray-600">Valor (R$)</TableHead>
              <TableHead className="text-center font-semibold text-gray-600">Data da doação</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {donations.map((donation) => (
              <TableRow key={donation.id}>
                <TableCell className="">{donation.donorName}</TableCell>
                <TableCell className="max-w-72">{donation.donorMessage}</TableCell>
                <TableCell className="text-center">
                  {donation.amount}
                </TableCell>
                <TableCell className="text-center">
                  {donation.createdAt.toLocaleDateString('pt-BR')}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Versão para mobile */}
      <div className="lg:hidden space-y-4 w-[90%] m-auto mb-8 pt-5">
        {donations.map((donation) => (
          <Card key={donation.id}>
            <CardHeader>
              <CardTitle className="text-lg">{donation.donorName}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">{donation.donorMessage}</p>
              <div className="flex justify-between items-center">
                <span className="text-green-500 font-semibold">
                  {donation.amount}
                </span>
                <span className="text-sm text-muted-foreground">
                  {donation.createdAt.toDateString()}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  )
}

