import { Terminal } from "lucide-react";
import { AlertDescription, Alert, AlertTitle } from "../ui/alert";


export default function AlertComponent() {
  return (
    <Alert variant="default">
      <Terminal />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components and dependencies to your app using the cli.
      </AlertDescription>
    </Alert>
  )
}