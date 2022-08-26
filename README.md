# testing-what-is-impossible
Um repo pra gente brincar de teste.


## Rodando o projeto com Docker
```shell
  docker build . -t testing
```

Depois disso basta, rodar a imagem para acessar o terminal:
```shell
docker run -v $(pwd):/app -it testing /bin/bash
```

:::warning:::
Você precisa rodar `yarn` na raiz do projeto dentro do container, para que seja instaladas as dependencias.
:::

Com isso podemos partir para os testes:
```shell
yarn test --watch
```
### O que tem nesse repo?

Temos varios testes quebrados, que faltam você realiar o mock do jest.
Além disso temos o `challenge.test.ts` que não tem testes implementados e serve para você praticar.
