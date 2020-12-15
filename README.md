# GraphQL Learning Exercise

## Environment Setup.

- Open your Favourite Editor. In my case i am using Visual Studio Code 
- Create a workspace directory and open the worksapce directory from your workspace
- Initialize the worksapce with npm
> npm init
> npm install --save-dev babel-cli babel-preset-env babel-preset-stage-0
> npm install express express-graphql graphql nodemon
- Configure the package.json to start the nodemon script as follows
```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon ./index.js --exec babel-node -e js"
  },
```
Add the start script as specified above in the package.json This will start the server
- At later point in time if you need to use graphql tools to create schema
The contents before the start of the graphql tools are commented and in schema and resolver
> npm install graphql-tools

- Install MongoDB
> npm install mongoose

- Install sqllite
> npm install sqlite3 sequelize lodash casual