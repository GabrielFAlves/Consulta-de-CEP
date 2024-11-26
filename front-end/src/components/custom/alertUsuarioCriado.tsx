import { Terminal } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";

const AlertUsuarioCriado = () => {
  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Usuário cadastrado!</AlertTitle>
      <AlertDescription>
        Agora você pode acessar a lista de usuários cadastrados.
      </AlertDescription>
    </Alert>
  );
};

export default AlertUsuarioCriado;