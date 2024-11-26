import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cadastroSchema } from "@/schemas/cadastroSchema";
import { z } from "zod";

type CadastroFormData = z.infer<typeof cadastroSchema>;

interface DialogEditProps {
  open: boolean;
  onClose: () => void;
  user: CadastroFormData & { id: number } | null;
  onSave: (data: CadastroFormData & { id: number }) => void;
}

const DialogEdit: React.FC<DialogEditProps> = ({ open, onClose, user, onSave }) => {
  const form = useForm<CadastroFormData>({
    resolver: zodResolver(cadastroSchema),
    defaultValues: {
      nome: "",
      cpf: "",
      cep: "",
      logradouro: "",
      bairro: "",
      cidade: "",
      estado: "",
    },
  });

  useEffect(() => {
    if (user) {
      form.reset(user);
    }
  }, [user, form]);

  const onSubmit = (data: CadastroFormData) => {
    if (user) {
      const updatedData = { id: user.id, ...data };
      onSave(updatedData);
      onClose();
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar Usuário</DialogTitle>
          <DialogDescription>Altere as informações do usuário selecionado.</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="nome"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite o nome" {...field} />
                  </FormControl>
                  {form.formState.errors.nome && (
                    <p className="text-red-500">{form.formState.errors.nome.message}</p>
                  )}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cpf"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CPF</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite o CPF" {...field} />
                  </FormControl>
                  {form.formState.errors.cpf && (
                    <p className="text-red-500">{form.formState.errors.cpf.message}</p>
                  )}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cep"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CEP</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite o CEP" {...field} />
                  </FormControl>
                  {form.formState.errors.cep && (
                    <p className="text-red-500">{form.formState.errors.cep.message}</p>
                  )}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="logradouro"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Logradouro</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite o Logradouro" {...field} />
                  </FormControl>
                  {form.formState.errors.logradouro && (
                    <p className="text-red-500">{form.formState.errors.logradouro.message}</p>
                  )}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bairro"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bairro</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite o Bairro" {...field} />
                  </FormControl>
                  {form.formState.errors.bairro && (
                    <p className="text-red-500">{form.formState.errors.bairro.message}</p>
                  )}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cidade"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cidade</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite a Cidade" {...field} />
                  </FormControl>
                  {form.formState.errors.cidade && (
                    <p className="text-red-500">{form.formState.errors.cidade.message}</p>
                  )}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="estado"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Estado</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite o Estado" {...field} />
                  </FormControl>
                  {form.formState.errors.estado && (
                    <p className="text-red-500">{form.formState.errors.estado.message}</p>
                  )}
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button variant="outline" onClick={onClose}>
                Cancelar
              </Button>
              <Button type="submit" className="bg-blue-500 text-white">
                Salvar
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default DialogEdit;
