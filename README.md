# Zipcode

Zipcode is a Fullstack App.
It's backend includes Apollo Server 3, Postgres, TypeGraphql and Express
It's frontend includes Apollo client 3, Create React App, GoogleMaps among others

## Pre-Requisites

Docker
Docker Compose
NodeJS v14.19.0

## Installation

1. Set the database running docker compose.
   The database will be created and started

```bash
docker-compose up
```

2. Run the backend on the folder with the same name

```bash
yarn start
```

2. Run the frontend on the folder with the same name

```bash
yarn start
```

## Usage

[Access](http://localhost:3000)

Search for the zipcode you want!

## Future Improvements

- Better error management
- Better UI look and feel
- Better environmental variables management
- Better deployment with just 1 command.
- Auto refresh
- Map markers
- Unit tests
