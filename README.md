# Bem-vindo ao retroStation

O RetroStation é uma plataforma de compra de jogos do playStation 2, projetada para reviver a era de ouro dos games.


![Captura de tela 2024-11-18 113700](https://github.com/user-attachments/assets/0cb8f29d-6fb4-482d-92d2-839f0179729f)

## Funcionalidades

- Cadastro e login de Usuários com validações.
- Sistema de compras com biblioteca de jogos adquiridos.
- Validação de idade para jogos restritos.
- Carrinho de compras.
- Perfil para editar dados da conta do usuário logado, adição de uma imagem de um avatar ao seu perfil.

## Tecnologias usadas
O projeto foi desenvolvido utilizando as seguintes tecnologias e ferramentas:

- **React**: Biblioteca JavaScript para criação de interfaces.
- **Next.js**: Framework para renderização do lado do servidor (SSR) e rotas dinâmicas.
- **TypeScript**: Superset do JavaScript, trazendo tipagem estática ao projeto.
- **Tailwind CSS**: Framework para estilização rápida e responsiva.
- **React Hook Form**: Biblioteca para gerenciar formulários e validações.
- **Zod**: Ferramenta para validação e parsing de dados.
- **SessionStorage**: Armazena dos dados temporáriamente para não pegar nenhuma informação dos usuários.

## Como rodar o projeto
- **Pré-requisitos**
- Node.js instalado.
- **Passos para rodar:**
```bash
# Clone o repositório
git clone https://github.com/jefersonlaurentino/retrostation.git

# Acesse a pasta do projeto
cd retrostation

# Ou baixe o projeto em formato .zip e extraia.

# E dentro do projeto instale as dependências necessárias
npm install

# Inicie o servidor de desenvolvimento
npm run dev
