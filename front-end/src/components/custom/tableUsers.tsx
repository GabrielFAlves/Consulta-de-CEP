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
import useUsuarios from "@/api/hooks/useUsuarios";
import useAtualizarUsuario from "@/api/hooks/useAtualizarUsuario";
import useDeletarUsuario from "@/api/hooks/useDeletarUsuario";

interface User {
  id: number;
  nome: string;
  cpf: string;
  cep: string;
  logradouro?: string;
  bairro?: string;
  cidade?: string;
  estado?: string;
}

const TableUsers = () => {
  const { data: users, isLoading, isError } = useUsuarios();
  const atualizarUsuario = useAtualizarUsuario();
  const deletarUsuario = useDeletarUsuario();
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleEdit = (user: User) => {
    setSelectedUser(user);
    setOpen(true);
  };

  const handleSave = (data: User) => {
    atualizarUsuario.mutate(data, {
      onSuccess: () => {
        console.log("Usuário atualizado:", data);
        setOpen(false);
      },
      onError: (error) => {
        console.error("Erro ao atualizar usuário:", error);
      },
    });
  };

  const handleDelete = (userId: number) => {
    deletarUsuario.mutate(userId, {
      onSuccess: () => {
        console.log("Usuário excluído com sucesso!");
      },
      onError: (error) => {
        console.error("Erro ao excluir usuário:", error);
      },
    });
  };

  if (isLoading) return <p>Carregando...</p>;
  if (isError) return <p>Erro ao carregar dados.</p>;

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
          {users?.map((user: User) => (
            <TableRow key={user.id}>
              <TableCell>{user.nome}</TableCell>
              <TableCell className="hidden sm:table-cell">{user.cpf}</TableCell>
              <TableCell>{user.cep}</TableCell>
              <TableCell className="hidden md:table-cell">{user.logradouro}</TableCell>
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
                  <Button
                    variant="outline"
                    className="text-red-500"
                    onClick={() => handleDelete(user.id)}
                  >
                    Excluir
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {selectedUser && (
        <DialogEdit
          open={open}
          onClose={() => setOpen(false)}
          user={selectedUser}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default TableUsers;
