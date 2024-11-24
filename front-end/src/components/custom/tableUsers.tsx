import { useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import DialogEdit from "./dialogEdit"; 

interface User {
  nome: string;
  cpf: string;
  cep: string;
  logradouro?: string;
  bairro?: string;
  cidade?: string;
  estado?: string;
}

const TableUsers = () => {
  const users: User[] = [
    {
      nome: "John Doe",
      cpf: "12345678901",
      cep: "12345678",
      logradouro: "Rua Exemplo",
      bairro: "Centro",
      cidade: "São Paulo",
      estado: "SP",
    },
    {
      nome: "Jane Smith",
      cpf: "98765432100",
      cep: "87654321",
      logradouro: "Avenida Exemplo",
      bairro: "Zona Sul",
      cidade: "Rio de Janeiro",
      estado: "RJ",
    },
    {
      nome: "Bob Johnson",
      cpf: "11223344556",
      cep: "66554433",
      logradouro: "Praça Exemplo",
      bairro: "Bairro Alto",
      cidade: "Curitiba",
      estado: "PR",
    },
  ];

  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleEdit = (user: User) => {
    setSelectedUser(user);
    setOpen(true);
  };

  const handleSave = (user: User) => {
    console.log("Usuário salvo:", user);
    setOpen(false);
  };

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nome</TableHead>
            <TableHead className="hidden sm:table-cell">CPF</TableHead>
            <TableHead>CEP</TableHead>
            <TableHead className="hidden md:table-cell">Logradouro</TableHead>
            <TableHead className="hidden lg:table-cell">Bairro</TableHead>
            <TableHead className="hidden lg:table-cell">Cidade</TableHead>
            <TableHead className="hidden xl:table-cell">Estado</TableHead>
            <TableHead>Ações</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {users.map((user, index) => (
            <TableRow
              key={index}
              className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
            >
              <TableCell>{user.nome}</TableCell>
              <TableCell className="hidden sm:table-cell">{user.cpf}</TableCell>
              <TableCell>{user.cep}</TableCell>
              <TableCell className="hidden md:table-cell">
                {user.logradouro}
              </TableCell>
              <TableCell className="hidden lg:table-cell">{user.bairro}</TableCell>
              <TableCell className="hidden lg:table-cell">{user.cidade}</TableCell>
              <TableCell className="hidden xl:table-cell">{user.estado}</TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant="outline"
                    className="text-blue-500"
                    onClick={() => handleEdit(user)}
                  >
                    Editar
                  </Button>
                  <Button variant="outline" className="text-red-500">
                    Excluir
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <DialogEdit
        open={open}
        onClose={() => setOpen(false)}
        user={selectedUser}
        onSave={handleSave}
      />
    </div>
  );
};

export default TableUsers;
