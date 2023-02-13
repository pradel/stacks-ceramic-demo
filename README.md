# stacks-ceramic-demo

A simple todos app built with Stacks and Ceramic ComposeDB.

Tech stack:

- stacks.js
- composeDB
- next.js
- relay
- mantine

## Getting Started

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the app.

## Ceramic setup

1. Install required dependencies `pnpm install -g @ceramicnetwork/cli @composedb/cli`
1. Generate a new private key `composedb did:generate-private-key`
1. Generate account `composedb did:from-private-key your-private-key`
1. Add the authenticated DID key to `~/.ceramic/daemon.config.json` in the `admin-dids` array
1. Start the ceramic node `CERAMIC_ENABLE_EXPERIMENTAL_COMPOSE_DB='true' pnpm dlx @ceramicnetwork/cli daemon`
1. Create composite `composedb composite:create ceramic/schema.graphql --output ceramic/composite.json --did-private-key your-private-key`
1. Compile composite `composedb composite:compile ceramic/composite.json ceramic/runtime-composite.json`
1. Start node `composedb graphql:server --ceramic-url=http://localhost:7007 --graphiql ceramic/runtime-composite.json --did-private-key=your-private-key --port=5005`
1. Deploy composite `composedb composite:deploy ceramic/composite.json --ceramic-url=http://localhost:7007 --did-private-key your-private-key`
1. Generate a runtime schema `pnpm dlx get-graphql-schema http://localhost:5005/graphql > ceramic/runtime-schema.graphql`
