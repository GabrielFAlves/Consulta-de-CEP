# Cadastro de Usuários

Este é um projeto React para o cadastro de usuários utilizando tecnologias modernas, incluindo **React Hook Form**, **React Query** e **shadcn/ui** para criar uma interface de usuário estilosa e funcional.

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
