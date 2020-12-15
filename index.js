import express from 'express';
//import schema from './schema';
import { graphqlHTTP } from  'express-graphql';
//import resolvers from './resolvers';
import { schema } from './data/newschema'

const app =express();

app.get('/', (req, res) => {
    res.send('Graphql is amazing!');
});

//const root = resolvers;
/*
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
*/

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));


app.listen(8080, () => console.log('Running on server port localhost:8080/graphql'));