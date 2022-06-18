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

<img src="https://raw.githubusercontent.com/guimaraaes/guimaraaes/master/assets/card-readme.png" >

### :globe_with_meridians: para me encontrar na web
[![LinkedIn](https://img.shields.io/badge/-LINKEDIN-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sara-guimar%C3%A3es-negreiros-aa2382155/)
[![GitHub](https://img.shields.io/badge/github-%23100000.svg?&style=for-the-badge&logo=github&logoColor=white)](https://guimaraaes.github.io/guimaraaes/)
[<img height="25" src="https://i.imgur.com/2iVxee6.png">![Lattes](https://img.shields.io/badge/lattes-%23100000?logoColor=blue&style=for-the-badge)](http://lattes.cnpq.br/7082901769077209)
