# WARP FRONT END TEST SERVER

## _DEV ONLY_

## The server has 2 aspects its a GraphQL and REST API in One

Its a Simple Express Server with Apollo GraphQL Strapped On

The Server serves Static Data from `data.js`

Static Assets are served from `/public`

`https://warpfrontendtestserver.herokuapp.com/public/${IMAGENAME}`

`IMAGENAME = manufacturer + _ + model`

#### REST

To view the Docs for REST Run the app and navigate to `http://localhost:4000/api-docs#/` || `https://warpfrontendtestserver.herokuapp.com/api-docs#/`

Rest has 2 GET calls to `/vehicles` (All vehicles) and `/vehicle/:id` (All vehicles)

#### GraphQL

To view the GraphQL Playground nav to `http://localhost:4000/graphql` || `https://warpfrontendtestserver.herokuapp.com/graphql`

GraphQL has 2 queries `allVehicles` (All vehicles) and `aVehicle` (All vehicles)
