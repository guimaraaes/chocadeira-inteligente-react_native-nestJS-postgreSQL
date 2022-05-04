# chocadeira-inteligente-react_native_nestjs

Aplicação mobile desenvolvida com [React Native](https://nestjs.com/), [NestJS](https://reactnative.dev/) e [PostgreSQL](https://www.postgresql.org/) para o gerenciamento de processos em uma chocadeira inteligente com ESP8266.


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

## Descrição das funcionalidades

Conforme o diagrama, após realizar a autenticação na aplicação o usuário possui funcinalidades para cadastrar um processo com a definição das configurações deste (temperatura, umidade e tempo médio de viragem) e posteriormente iniciar esse processo.

As linhas tracejadas indicam que após cadastrar um processo, apenas é possível cadastrar outro quando não houver nenhum em andamento. De modo análogo, apenas é possível acompanhar um processo em andamento quando este tiver sido cadastrado e ainda não tenha sido finalizado.

Outra funcionalidade é para acompanhar os processos, tanto os finalizados como os em andamento. Em ambos é possível compartilhar os excluir o processo selecionado, entretanto, pra os processos em andamento é possível editar as configurações definidas anteriormente, obter gráfico dos dados em escala diária, semanal ou desde o início do processo, além de finilizar o corrente processo. Para os processo finalizados é possível obter o gráfico das medições do período de duração do processo.

![img](https://github.com/guimaraaes/chocadeira-inteligente-react_native/blob/main/assets/chocadeira-inteligente_%20funcionalidades.png)

### :mailbox: Dúvidas? Me manda um [e-mail](sguimaraaes@gmail.com) 

<img src="https://raw.githubusercontent.com/guimaraaes/guimaraaes/master/assets/card-readme.png" >

### :globe_with_meridians: para me encontrar na web
[![LinkedIn](https://img.shields.io/badge/-LINKEDIN-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sara-guimar%C3%A3es-negreiros-aa2382155/)
[![GitHub](https://img.shields.io/badge/github-%23100000.svg?&style=for-the-badge&logo=github&logoColor=white)](https://guimaraaes.github.io/guimaraaes/)
[<img height="25" src="https://i.imgur.com/2iVxee6.png">![Lattes](https://img.shields.io/badge/lattes-%23100000?logoColor=blue&style=for-the-badge)](http://lattes.cnpq.br/7082901769077209)
