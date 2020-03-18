# Server template

This is a simple server template to for my students to start projects quickly.

## How to use this template

1. Create a new project based on this template using the `Use this template` button

![HOW_TO_USE](https://user-images.githubusercontent.com/20372832/77003323-70966180-695d-11ea-8abe-b362d57135f3.gif)

2. Clone the app

```
git clone git@github.com:YOUR_GITHUB_NAME/YOUR_PROJECT_NAME.git
```

3. cd into your project

```
cd YOUR_PROJECT_NAME
```

4. install dependencies

```
npm install
```

5. Configure your database in `config/config.json`

The default assumes a postgres database with

- username: postgres
- password: secret

```json
// config/config.json
{
  "development": {
    "username": "postgres",
    "password": "secret",
    "database": "YOUR_PROJECT_NAME_HERE_development",
    "host": "localhost",
    "dialect": "postgres",
    "operatorsAliases": "0"
  }
}
```

6. Create database, run migrations & seed data

`package.json` contains a script for this

```bash
npm run initdev
```

Or run the commands seperately

```bash
npx sequelize-cli db:create
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

7. start server with `nodemon` (recommended for development)

```
npm run dev
```

8. or start normally

```
npm start
```

## History of this project

- [Setup of the server](https://github.com/Codaisseur/express-template/commit/cd2f790fbab6c561300163466a074fd09a35f704)
- [Adding a README](https://github.com/Codaisseur/express-template/pull/1)
