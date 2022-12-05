const Airtable = require('airtable');
let base;

// order_id: Int
//         order_placed: String
//         product_name: String
//         price: Int
//         first_name: String
//         last_name: String
//         address: String
//         email: String
//         order_status: String

const initAirtable = () => {
    if (base) {
        return { tableBase: base };
    }
    const AUTH_TOKEN = 'keygI0Kw5Hplh1reB';
    const AIRTABLE_BASE = 'app8wLQrrIMrnn673';
    
    Airtable.configure({
      endpointUrl: 'https://api.airtable.com',
      apiKey: AUTH_TOKEN
    });
  
    base = Airtable.base(AIRTABLE_BASE);

    return {
        tableBase: base,
    };
};

module.exports = {
    initAirtable,
    getAllOrders: async () => {
        const { tableBase } = initAirtable();
        const records = await tableBase('Orders').select({
            fields: ['order_id']
        }).all();

        return {
            total: records.length,
            data: records.map((item) => item.fields)
        };
    },

    getAllRevenue: async () => {
        const { tableBase } = initAirtable();
        const records = await tableBase('Orders').select({
            fields: ['price']
        }).all();

        return {
            data: records.reduce((acc, cur) => (acc + cur.fields.price), 0).toFixed(2)
        }
    },
    
    getOrdersByMonth: async ({ month }) => {
        const { tableBase } = initAirtable();
        const records = await tableBase('Orders').select({
            filterByFormula: `MONTH({order_placed}) = ${month}`,
            fields: ['order_id']
        }).all();

        return {
            total: records.length,
            data: records.map((item) => item.fields),
        };
    },

    getOrdersByStatus: async ({ status }) => {
        const { tableBase } = initAirtable();

        const records = await tableBase('Orders').select({
            filterByFormula: `{order_status} = "${status}"`,
            fields: ['order_id'],
        }).all();

        return {
            total: records.length,
            data: records.map((item) => item.fields),
        };
    },

    getRecentOrders: async ({ maxRecords }) => {
        const { tableBase } = initAirtable();

        const records = await tableBase('Orders').select({
            sort: [{field: "order_placed", direction: "desc"}],
            maxRecords
        }).all();

        return {
            total: records.length,
            data: records.map((item) => item.fields)
        };
    }
};