# Backend

---

Questo modulo si svolge il 14 giugno, l'orario di massima è il seguente:

Orario | Modulo
--- | ---
9:00 - 10:45  | [REST](https://github.com/mapio/fp-spa-2019/tree/master/moduli/backend/01-rest) [![github](../img/github.png)](https://codesandbox.io/s/github/mapio/fp-spa-2019/tree/master/moduli/backend/01-rest/frontend)
11:00 - 13:00 | [GraphQL](https://github.com/mapio/fp-spa-2019/tree/master/moduli/backend/02-graphql) [![github](../img/github.png)](https://codesandbox.io/s/github/mapio/fp-spa-2019/tree/master/moduli/backend/02-graphql/frontend)
13:45 - 17:00 | **Prova finale** (e *questionario di valutazione*)

## Software

Per evitare di implementare la parte di backend useremo due *mock*:
[json-server](https://github.com/typicode/json-server) per la parte REST e
[json-graphql-server](https://github.com/marmelab/json-graphql-server) per la
parte GraphQL. Usando [JSON Generator](https://next.json-generator.com/) si
possono produrre dati di test casuali (ma verosimili e secondo uno schema dato) in
formato JSON.

Chi fosse interessato a sviluppare dei backend realistici in ECMAScript può basarsi su [Apollo server](https://www.apollographql.com/docs/apollo-server/) e [GraphQL Yoga](https://github.com/prisma/https://github.com/prisma/graphql-yoga) (basato sul precedente server, ma d'uso più semplice); sono ovviamente possibili soluzioni basate su linguaggi diversi, come ad esempio [Graphene](https://github.com/graphql-python/graphene) in Python.

## Riferimenti

Una buona introduzione a GraphQL è data dal [tuorial
ufficiale](https://graphql.org/learn/) al linguaggio (il corso si limita alla
parte relativa alle *query*, non considerando la parte relativa a *mutation* e *subscription*). Per fare pratica si può scegliere dall'[elenco di API pubbliche](https://github.com/APIs-guru/graphql-apis) un endpoint con cui è possibile sperimentare.

Per la parte di integrazione con Vue verranno usati:

* nel caso REST, sia le [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) che [axios](https://github.com/axios/axios),
* nel caso GraphQL verrà usata l'integrazione [vue-apollo](https://github.com/Akryum/vue-apollo) (basato su [apollo-client](htthttps://github.com/apollographql/apollo-client)).
