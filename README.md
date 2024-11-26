# Consulta de CEP e Gerenciamento de Endereços

Este é um teste técnico em React para o cadastro de usuários utilizando tecnologias modernas, incluindo **React Hook Form**, **React Query** e **shadcn/ui** para criar uma interface de usuário estilosa e funcional.

---

## Funcionalidades

### Frontend
- **Formulário de Cadastro**:
  - Campos para Nome, CPF e CEP.
  - Validação em tempo real com **React Hook Form** e **Zod**.
  - Preenchimento automático de endereço (Logradouro, Bairro, Cidade, Estado) ao inserir um CEP válido.
  - Máscara para CPF com formatação antes de salvar no banco.
  - Exibição de mensagens de alerta após o cadastro bem-sucedido.

- **Listagem de Endereços Salvos**:
  - Exibição de uma tabela com os usuários cadastrados e seus respectivos endereços.
  - Opção para editar em um formulário dedicado.

- **Edição de Endereços**:
  - Alteração de dados como Nome, CPF, CEP, Logradouro, Bairro, Cidade e Estado.
  - Integração completa com o backend para salvar as alterações.

- **Interface Responsiva**:
  - Layout responsivo, funcionando em dispositivos de diferentes tamanhos de tela.
  - Design estilizado com **shadcn/ui** e **Tailwind CSS**.

### Backend
- **API REST**:
  - Endpoints para operações CRUD:
    - `POST /usuarios`: Criação de um novo usuário.
    - `GET /usuarios`: Recuperação da lista de usuários.
    - `PUT /usuarios/{id}`: Atualização de informações de um usuário.
    - `DELETE /usuarios/{id}`: Exclusão de usuários.

- **Conexão com API ViaCEP**:
  - Validação e busca de informações de endereço com base no CEP inserido.

- **Banco de Dados**:
  - Persistência das informações em um banco relacional (MySQL).
  - Tabela `usuarios` com os campos:
    - `id`: Chave primária.
    - `nome`: Nome do usuário.
    - `cpf`: CPF formatado.
    - `cep`: CEP do endereço. (único)
    - `logradouro`: Nome da rua.
    - `bairro`: Bairro do usuário.
    - `cidade`: Cidade do usuário.
    - `estado`: Estado do usuário.
    - `data_criacao`: Timestamp de criação.

---

## Tecnologias Utilizadas

### Frontend
- **React**: Biblioteca para construção de interfaces de usuário.
- **React Hook Form**: Gerenciamento de formulários e validação.
- **React Query**: Gerenciamento de estado para chamadas assíncronas.
- **shadcn/ui**: Conjunto de componentes UI estilizados com Tailwind CSS.
- **Zod**: Validação de esquemas.
- **Axios**: Realização de chamadas HTTP para APIs.

### Backend
- **Spring Boot**: Framework para construção de APIs REST.
- **MySQL**: Banco de dados relacional para persistência dos dados.
- **API ViaCEP**: Serviço de busca de endereços baseado em CEP.

---

## Estrutura de Pastas

```plaintext
src/
├── api/              # Hooks para chamadas à API
│   ├── hooks/        # React Query hooks
│   ├── apiClient.ts  # Configuração do Axios
├── components/       # Componentes reutilizáveis
│   ├── ui/           # Componentes do shadcn/ui
│   ├── custom/       # Componentes personalizados
├── schemas/          # Schemas de validação Zod
├── pages/            # Páginas principais
└── App.tsx           # Componente principal
```

---

# Passo a Passo para Rodar o Programa

Siga os passos abaixo para configurar e executar o projeto localmente.

---

## Pré-requisitos

- **Node.js** v18+.
- **NPM** ou **Yarn**.
- **MySQL** configurado.

---

## Passo 1: Configurar o Banco de Dados

1. **Inicie o MySQL** e crie o banco de dados necessário:
   ```sql
   CREATE DATABASE solution_db;
   ```

2. **Configure o backend**:

    - Edite o arquivo `application.properties` e insira as credenciais do MySQL:
      ```properties
      spring.datasource.url=jdbc:mysql://localhost:3306/solution_db
      spring.datasource.username=seu_usuario
      spring.datasource.password=sua_senha
      ```

3. **Inicie o backend com o Spring Boot**:

    - Certifique-se de que o backend está rodando em [http://localhost:8080](http://localhost:8080).

---

### Passo 2: Configurar e Iniciar o Frontend

1. **Clone o repositório do projeto**:
   ```bash
   git clone https://github.com/GabrielFAlves/Solution-TI.git
   ```

2. **Acesse a pasta do frontend**:
    ```bash
    cd Solution-TI/front-end
    ```

3. **Instale as dependências**:
    ```bash
    npm install
    ```

4. **Inicie o servidor de desenvolvimento**:
    ```bash
    npm run dev
    ```
  
5. **Acesse o aplicativo no navegador**:
  - Abra http://localhost:5173 para visualizar a aplicação.