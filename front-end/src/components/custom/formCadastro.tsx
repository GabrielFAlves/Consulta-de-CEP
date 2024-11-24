import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { cadastroSchema } from "../../schemas/cadastroSchema";
import { z } from "zod";
import { Button } from "../ui/button";

type CadastroFormData = z.infer<typeof cadastroSchema>;

const FormCadastro = () => {
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

  const onSubmit = (data: CadastroFormData) => {
    console.log("Dados enviados:", data);
  };

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Cadastro de Usuário</CardTitle>
        <CardDescription>Informe os dados abaixo para realizar o cadastro</CardDescription>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="nome"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite seu nome" {...field} />
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
                    <Input placeholder="Digite seu CPF" {...field} />
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
                    <Input placeholder="Digite seu CEP" {...field} />
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
                    <Input placeholder="Digite seu Logradouro" {...field} />
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
                    <Input placeholder="Digite seu Bairro" {...field} />
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
                    <Input placeholder="Digite seu Cidade" {...field} />
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
                    <Input placeholder="Digite seu Estado" {...field} />
                  </FormControl>
                  {form.formState.errors.estado && (
                    <p className="text-red-500">{form.formState.errors.estado.message}</p>
                  )}
                </FormItem>
              )}
            />

            <Button className="w-full" type="submit">Enviar</Button>
          </form>
        </Form>
      </CardContent>

      <CardFooter />
    </Card>
  );
};

export default FormCadastro;
