# 🐾 PetLegal SPA

## Descrição

O PetLegal SPA é um projeto académico desenvolvido para uma ONG fictícia de proteção animal. A aplicação foi construída utilizando HTML5, CSS3 e JavaScript puro (Vanilla JS), seguindo boas práticas de desenvolvimento web, acessibilidade e controlo de versões com GitFlow.

O objetivo do projeto é disponibilizar uma plataforma para divulgação das ações da ONG, apresentação dos seus projetos e registo de apoiadores através de um formulário interativo.

---

## Funcionalidades

- Navegação SPA (Single Page Application)
- Cadastro de apoiadores
- Validação de formulários
- Máscaras para CPF e telefone
- Armazenamento de dados com LocalStorage
- Modal de confirmação com SweetAlert2
- Design responsivo
- Modo escuro (Dark Mode)
- Persistência do tema escolhido através do LocalStorage
- Recursos de acessibilidade (WCAG)
- Navegação por teclado
- Skip Link para acesso rápido ao conteúdo principal

---

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- SweetAlert2
- Vite
- Git
- GitHub

---

## Estrutura do Projeto

```text
PetLegal/
│
├── css/
│   └── style.css
│
├── js/
│   ├── app.js
│   └── mascara.js
│
├── images/
│
├── html/
│   ├── home.html
│   ├── projetos.html
│   └── cadastro.html
│
├── index.html
├── README.md
├── package.json
├── package-lock.json
│
├── public/
└── src/
```

---

## Acessibilidade

O projeto foi desenvolvido com foco na acessibilidade e conformidade com as recomendações WCAG.

### Recursos implementados

- Estrutura semântica com:
  - `<header>`
  - `<nav>`
  - `<main>`
  - `<section>`
  - `<footer>`

- Formulários acessíveis:
  - Labels associadas aos campos
  - Utilização de fieldsets e legends

- Navegação por teclado:
  - Ordem lógica de foco
  - Destaque visual através da pseudo-classe `:focus`

- Skip Link:
  - Permite saltar diretamente para o conteúdo principal

- Compatibilidade com leitores de ecrã

- Modo escuro com melhoria do contraste visual

---

## Modo Escuro

Foi implementado um sistema de alternância entre tema claro e escuro.

### Características

- Alteração dinâmica das cores da interface
- Persistência da preferência do utilizador através do LocalStorage
- Melhor contraste visual para leitura
- Compatibilidade com os requisitos de acessibilidade WCAG

---

## GitFlow

Durante o desenvolvimento foi adotado o modelo GitFlow para organização das funcionalidades.

### Branches utilizadas

- `main` → versão estável da aplicação
- `develop` → integração contínua das funcionalidades
- `feature/formulario`
- `feature/localstorage`
- `feature/spa`
- `feature/acessibilidade`
- `feature/vite-build`

### Convenção de Commits

Foram utilizados Conventional Commits para padronização do histórico:

```text
feat: adiciona funcionalidade
fix: corrige erro
docs: atualiza documentação
build: configura processo de build
```

---

## Build de Produção

O projeto utiliza o Vite como bundler para otimização e geração da versão de produção.

### Instalação

```bash
npm install
```

### Ambiente de Desenvolvimento

```bash
npm run dev
```

Servidor disponível em:

```text
http://localhost:5173
```

### Build de Produção

```bash
npm run build
```

Os ficheiros otimizados são gerados automaticamente na pasta:

```text
dist/
```

### Benefícios da Build

- Minificação de CSS
- Minificação de JavaScript
- Otimização de recursos estáticos
- Melhor desempenho em produção

---

## Como Executar

1. Clone o repositório:

```bash
git clone https://github.com/carlossilvahe/petlegal-spa.git
```

2. Entre na pasta do projeto:

```bash
cd petlegal-spa
```

3. Instale as dependências:

```bash
npm install
```

4. Execute o servidor de desenvolvimento:

```bash
npm run dev
```

5. Abra o navegador em:

```text
http://localhost:5173
```

---

## Versionamento

O projeto segue o versionamento semântico (Semantic Versioning):

```text
MAJOR.MINOR.PATCH
```

Exemplo:

```text
v1.0.0
```

Onde:

- MAJOR → alterações incompatíveis
- MINOR → novas funcionalidades
- PATCH → correções de erros

---

## Autor

**Carlos Henrique da Silva**

Projeto desenvolvido para fins académicos.