# Projeto com compartilhamento de bibliotecas

## Instalação

Clone o repositório e acesse a pasta de shared-library

    cd /shared-library

Instale as dependências necessárias:

    yarn install

Execute o comando para iniciar um link da biblioteca secundária:

    yarn link

Navegue até o repositório da aplicação principal:

    cd /main-app

Instale as dependências necessárias:

    yarn install

Execute o comando para linkar a aplicação secundária com a principal:

    yarn link shared-library

Rode a aplicação principal:

    yarn run dev
