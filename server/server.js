const express = require('express');
const cors = require('cors');
const { buildSchema } = require('graphql');
const { graphqlHTTP } = require('express-graphql');
const {
    initAirtable,
    getAllOrders,
    getAllRevenue,
    getOrdersByMonth,
    getOrdersByStatus,
    getRecentOrders,
} = require('./airtable'); 


const root = {
    getAllOrders,
    getAllRevenue,
    getOrdersByMonth,
    getOrdersByStatus,
    getRecentOrders
};

const schema = buildSchema(`
    type Record {
        order_id: Int
        order_placed: String
        product_name: String
        price: Int
        first_name: String
        last_name: String
        address: String
        email: String
        order_status: String
    }

    type Records {
        data: [Record]
    }

    type OrdersTotal {
        total: Int
        data: [Record]
    }

    type Revenue {
        data: Float
    }

    type Query {
        getAllOrders: OrdersTotal
        getAllRevenue: Revenue
        getOrdersByMonth(month: Int): OrdersTotal
        getOrdersByStatus(status: String): OrdersTotal
        getRecentOrders(maxRecords: Int): OrdersTotal
    }
`);

const app = express();
app.use(cors());
app.use(
    '/graphql',
    graphqlHTTP({
        schema,
        rootValue: root,
        graphiql: true
    })
);

initAirtable();

app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000/graphql`)
);
  