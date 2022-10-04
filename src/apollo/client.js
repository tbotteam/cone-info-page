import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

export const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/tbotteam/stable-exchange-v2',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const healthClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/index-node/graphql',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

// export const stakingClient = new ApolloClient({
//   link: new HttpLink({
//     uri: 'https://api.thegraph.com/subgraphs/name/way2rach/talisman',
//   }),
//   cache: new InMemoryCache(),
//   shouldBatch: true,
// })

export const blockClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/kybernetwork/bsc-blocks',
  }),
  cache: new InMemoryCache(),
})
