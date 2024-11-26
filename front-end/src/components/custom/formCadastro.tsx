import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputMask from "react-input-mask";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { cadastroSchema } from "../../schemas/cadastroSchema";
import { z } from "zod";
import { Button } from "../ui/button";
import useCriarUsuario from "@/api/hooks/useCriarUsuario";
import useViaCep from "@/api/hooks/useViaCep";
import { useEffect, useState } from "react";
import AlertUsuarioCriado from "./alertUsuarioCriado";

type CadastroFormData = z.infer<typeof cadastroSchema>;

const FormCadastro = () => {
  const [alertVisible, setAlertVisible] = useState(false);
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

  const cep = form.watch("cep");
  const { data, error } = useViaCep(cep || "");

  const { mutate: criarUsuario, isError } = useCriarUsuario();

  useEffect(() => {
    if (data) {
      form.setValue("logradouro", data.logradouro || "");
      form.setValue("bairro", data.bairro || "");
      form.setValue("cidade", data.localidade || "");
      form.setValue("estado", data.uf || "");
    }
  }, [data, form]);

  const onSubmit = (data: CadastroFormData) => {
    criarUsuario(data, {
      onSuccess: () => {
        console.log("Usuário criado com sucesso!");
        setAlertVisible(true);
        form.reset();

        setTimeout(() => setAlertVisible(false), 3000);
      },
      onError: (error: any) => {
        if (error.response?.status === 409) {
          form.setError("cpf", { message: "CPF já cadastrado." });
        } else {
          console.error("Erro ao criar usuário:", error);
        }
      },
    });
  };

  return (
    <div className="relative">
      {alertVisible && (
        <div className="fixed min-w-[320px] top-4 left-1/2 transform -translate-x-1/2 z-50 p-4">
          <AlertUsuarioCriado />
        </div>
      )}
      <Card className="w-full max-w-sm mx-auto">
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
                      <InputMask
                        placeholder="Digite seu CPF"
                        mask="999.999.999-99"
                        value={field.value}
                        onChange={(e) => field.onChange(e.target.value)}
                      >
                        {(inputProps) => <Input {...inputProps} />}
                      </InputMask>
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
                    {error && <p className="text-red-500">Erro ao buscar o CEP.</p>}
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
                      <Input placeholder="Preenchido automaticamente" readOnly {...field} />
                    </FormControl>
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
                      <Input placeholder="Preenchido automaticamente" readOnly {...field} />
                    </FormControl>
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
                      <Input placeholder="Preenchido automaticamente" readOnly {...field} />
                    </FormControl>
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
                      <Input placeholder="Preenchido automaticamente" readOnly {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button className="w-full" type="submit">
                Enviar
              </Button>
            </form>
          </Form>
        </CardContent>

        <CardFooter>
          {isError && <p className="text-red-500">Erro ao enviar os dados. Tente novamente.</p>}
        </CardFooter>
      </Card>
    </div>
  );
};

export default FormCadastro;
