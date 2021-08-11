# TypeORM HANA Migration problem

Steps to reproduce problem

1. Run local HANA with `docker-compose up`, wait until it's fully operational. It should show "Startup finished!" in the logs
   - HANA is kinda huge, so it's good to setup your Docker to have 8GB+ of RAM.
2. Run `yarn install` or `npm install`
3. Run `yarn build` or `npm build` to generate js files from Typescript
4. Run `yarn migration:run` or `npm run migration:run` to run migrations on the docker database
5. Run `yarn test-hana-client` or `npm run test-hana-client` to run the hana-client test
