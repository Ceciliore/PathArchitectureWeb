# Path Architecture Web

Este projeto representa a interface web da aplicação de gerenciamento de palestras desenvolvida para o Trabalho de Conclusão de Curso intitulado "Evolução Arquitetônica: Uma análise comparativa entre as principais formas de arquitetar software". A aplicação foi construída utilizando React com TypeScript e foi projetada para funcionar de forma compatível com diferentes modelos arquiteturais de backend: Monólito, Monólito Modular, Microsserviços e SOA.

## Tecnologias Utilizadas

- React (com TypeScript)
- Axios para comunicação com APIs REST
- React Router DOM para navegação entre rotas
- Docker (em ambiente de produção)

## Estrutura do Projeto

```
path-architecture-web/
├── build/               # Versão compilada para produção (gerada por `npm run build`)
├── public/              # Arquivos públicos como index.html e ícones
├── src/                 # Código-fonte da aplicação
│   ├── components/      # Componentes reutilizáveis
│   ├── pages/           # Páginas principais da aplicação
│   ├── services/        # Lógica de comunicação com as APIs
│   ├── App.tsx          # Componente principal
│   └── index.tsx        # Ponto de entrada da aplicação
├── .env                 # Variáveis de ambiente
├── package.json         # Dependências e scripts
├── tsconfig.json        # Configurações do TypeScript
```

## Como Executar Localmente

1. Instale as dependências:

```bash
npm install
```

2. Configure o arquivo `.env`:

Crie um arquivo `.env` com a seguinte variável:

```env
REACT_APP_API_URL
```

A URL deve apontar para o backend correspondente (monólito, gateway de microsserviços ou middleware SOA).

3. Inicie a aplicação:

```bash
npm start
```

O projeto será executado em `http://localhost:3000`.

## Integração com o Backend

O front-end foi desenvolvido para consumir um conjunto padronizado de rotas REST em formato JSON. Ele se mantém inalterado em todas as versões do backend:

- No Monólito, a build do front é servida diretamente pela pasta `/build` do backend via Express.
- Em Microsserviços, a comunicação é feita via um API Gateway que centraliza todas as chamadas.
- Em SOA, é utilizado um middleware REST → SOAP, garantindo compatibilidade com o protocolo SOAP/XML do ESB.

## Scripts Disponíveis

- `npm start` - Inicia a aplicação em modo desenvolvimento
- `npm run build` - Gera uma build otimizada para produção
- `npm test` - Executa testes (caso configurado)
- `npm run eject` - Expõe as configurações ocultas do Create React App

## Telas da Aplicação

As principais telas desenvolvidas incluem:

- Tela de login e registro
- Listagem de palestras
- Criação de palestras (modo administrador)
- Visualização de detalhes e comentários
- Tela de perfil com histórico

## Licença

Projeto acadêmico desenvolvido para fins educacionais — CEFET/RJ.