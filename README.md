# TypeScript Apollo Server

This is a TypeScript Apollo Server project. It uses the Apollo Server library to create a GraphQL server.

## Project Structure

- `index.ts`: This is the entry point of the application. It sets up the Apollo Server and starts it.
- `Domain/schema.ts`: This file contains the GraphQL schema definitions.
- `Application/resolvers.ts`: This file contains the resolvers for the GraphQL schema.
- `Infrastructure/SpaceXDatabase.ts`: This file contains the setup for the SpaceXDatabase data source.

## Setup

1. Clone the repository.
2. Run `npm install` to install the dependencies.
3. Run `npm start` to start the server.

## Usage

Once the server is running, you can access the GraphQL playground at `http://localhost:4000`.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Acknowledgments
- [SpaceX API](https://github.com/r-spacex/SpaceX-API)
- [GeoDataSource API](https://www.geodatasource.com/web-service/location-search)
