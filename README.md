# Desafio 2: Compra de ingressos para show

Desenvolver uma aplicação web que permita aos usuários comprar ingressos para um show. O show possui dois setores, com preços distintos: pista (sem rgeserva de lugar) e cadeira (com reserva do número da cadeira). A aplicação deve permitir ao usuário comprar quantos ingressos quiser, exibindo o valor total dos ingressos selecionados. A aplicação deve atualizar em tempo real a quantidade de ingressos disponíveis em cada setor, além de exibir as cadeiras já ocupadas e as cadeiras disponíveis para compra. Não é necessário desenvolver o fluxo de pagamento, apenas uma simulação de compra.

## Decisões técnicas

O React é facilita a criação de componentes interativos no frontend, como formulários de compra de ingressos, onde a experiência do usuário é fluida e dinâmica.

O NestJS oferece uma estrutura modular baseada em TypeScript que facilita a manutenção e escalabilidade da aplicação. O NestJS também facilita a criação da APIs RESTful.

O MongoDB, sendo um banco de dados NoSQL, é ideal para dados de eventos, shows e ingressos, que podem variar de estrutura e crescer de forma escalável. Também oferece alta disponibilgidade e capacidade de escalabilidade horizontal, o que é importante para um sistema de ingressos que pode ter picos de tráfego em dias de shows populares.

Tailwind CSS permite um design rápido e personalizável. Você pode criar interfaces responsivas e modernas sem a necessidade de escrever muito CSS customizado.

O Material UI fornece componentes pré-estilizados e acessíveis, como botões e tabs, que agilizam a criação de interfaces funcionais, alinhadas com as práticas recomendadas de design de interface.

## Executando o projeto

Na raiz do projeto execute o comando abaixo:

```bash
docker-compose up --build -d
```

Acesse o client em: `http://localhost:3000` </br>
Acesse a api em: `http://localhost:8000`

## Postman Collection

Link com para o Postman: [https://www.postman.com/solar-escape-339420/workspace/konnect/collection/17205015-e4fa994d-c592-480f-97c7-b2f016dffa15?action=share&creator=17205015](https://www.postman.com/solar-escape-339420/workspace/konnect/collection/17205015-e4fa994d-c592-480f-97c7-b2f016dffa15?action=share&creator=17205015)
