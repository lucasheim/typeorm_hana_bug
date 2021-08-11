# TypeORM HANA Migration problem

Steps to reproduce problem

1. Run local HANA with `docker-compose up`, wait until it's fully operational. It should show "Startup finished!" in the logs
   - HANA is kinda huge, so it's good to setup your Docker to have 8GB+ of RAM.
2. Run `yarn install` or `npm install`
3. Run `yarn tsc` or `npx tsc` to generate js files from Typescript
4. Run `yarn typeorm migration:run` or `npx typeorm migration:run` to run migrations on the docker database
