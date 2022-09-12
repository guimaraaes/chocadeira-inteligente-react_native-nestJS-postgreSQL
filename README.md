# chocadeira-inteligente-react_native_nestjs

Aplicação mobile desenvolvida com [React Native](https://nestjs.com/), [NestJS](https://reactnative.dev/) e [PostgreSQL](https://www.postgresql.org/) para o gerenciamento de processos em uma [chocadeira inteligente com ESP8266](https://github.com/guimaraaes/chocadeira-inteligente-sistema-embarcado).


## Quick Start

Para iniciar a aplicação no seu computador é necessário ter o Docker instalado e seguir os seguintes passos:

```bash
# clone o repertório na sua máquina local
git clone github.com/guimaraaes/chocadeira-inteligente-react_native-nestJS-postgreSQL.git

# Direcione-se para o diretório
cd chocadeira-inteligente-react_native-nestJS-postgreSQL

# Construa a aplicação utilizando Docker
docker-compose build

# Compile a aplicação utilizando Docker
docker-compose up
```

Além disso, no diretório raiz é necessário iniciar tanto o backend como o frontend com ``` npm start ```.

## Documentação da api com swagger
No back-end temos as reguintes rotas HTTP conforme documentação com Swagger:

![img](https://github.com/guimaraaes/chocadeira-inteligente-react_native/blob/main/assets/swagger1.png)
![img](https://github.com/guimaraaes/chocadeira-inteligente-react_native/blob/main/assets/swagger2.png)
![img](https://github.com/guimaraaes/chocadeira-inteligente-react_native/blob/main/assets/swagger3.png)

## Telas do app mobile

Após realizar a autenticação na aplicação o usuário possui funcinalidades para cadastrar um processo com a definição das configurações deste (temperatura, umidade e tempo médio de viragem) e posteriormente iniciar esse processo. Após cadastrar um processo, apenas é possível cadastrar outro quando não houver nenhum em andamento.

Outra funcionalidade é para acompanhar os processos, tanto os finalizados como os em andamento através de gráficos com as informações diárias de temperatura e umidade. Pra os processos em andamento é possível editar as configurações definidas anteriormente.

![img](https://github.com/guimaraaes/chocadeira-inteligente-react_native/blob/main/assets/telas.png)

### :mailbox: Dúvidas? Me manda um [e-mail](sguimaraaes@gmail.com) 
