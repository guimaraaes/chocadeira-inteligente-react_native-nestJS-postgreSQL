# chocadeira-inteligente-react_native_nestjs


Aplicação mobile para o gerenciamento de processos em uma chocadeira de baixo custo. Conforme o diagrama, após realizar a autenticação na aplicação o usuário possui funcinalidades para cadastrar um processo com a definição das configurações deste (temperatura, umidade e tempo médio de viragem) e posteriormente iniciar esse processo. 

As linhas tracejadas indicam que após cadastrar um processo, apenas é possível cadastrar outro quando não houver nenhum em andamento. De modo análogo, apenas é possível acompanhar um processo em andamento quando este tiver sido cadastrado e ainda não tenha sido finalizado.

Outra funcionalidade é para acompanhar os processos, tanto os finalizados como os em andamento. Em ambos é possível compartilhar os excluir o processo selecionado, entretanto, pra os processos em andamento é possível editar as configurações definidas anteriormente, obter gráfico dos dados em escala diária, semanal ou desde o início do processo, além de finilizar o corrente processo. Para os processo finalizados é possível obter o gráfico das medições do período de duração do processo. 

![img](https://github.com/guimaraaes/chocadeira-inteligente-react_native/blob/main/assets/chocadeira-inteligente_%20funcionalidades.png)

### Telas frontend

