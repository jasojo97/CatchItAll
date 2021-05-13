const pgPool = require('pg').Pool

const queryLogin = new Pool({
    user:'postgres',
    host:'localhost',
    database: 'demo',
    password: 'vips',
    port: 3201,
});

const addvendor = (req, res) => {
    const {vid, name, address,contact, username}=req.body;
    queryLogin.query('INSERT INTO vendor(vid, name, address,contact, username) VALUES ($1,$2,$3,$4,$5)', [vid, name, address,contact, username], (error, result) => {
        if (error) {
            throw error;
        }
        res.status(201).send(`Vendor Added with ID: $(result.id)`)
        console.log('vendor signup has been added')
    });
}

const updatevendor = (req, res) => {
    const vid=parseInt(req.body.vid);
    const {name, address,contact, username} = req.body;
    queryLogin.query('UPDATE VENDOR SET name=$1, address=$2, contact=$3, username=$4, WHERE vid=$5', [name, address,contact, username], (error, result) => {
        if(error) {
            throw error
        }
        res.status(200).send(`Vendor Updated with ID: $(result.id)`)
        
    });
}

const addcustomer = (req, res) => {
    const {custid, name, address,contact, username}=req.body;
    queryLogin.query('INSERT INTO customer(custid, name, address,contact, username) VALUES ($1,$2,$3,$4,$5)', [vid, name, address,contact, username], (error, result) => {
        res.status(201).send(`Customer Added with ID: $(result.id)`)
        console.log('Customer signup has been added')
    });
}

const updatecustomer = (req, res) => {
    const {custid, name, address,contact, username}=req.body;
    queryLogin.query('INSERT INTO customer(custid, name, address,contact, username) VALUES ($1,$2,$3,$4,$5)', [vid, name, address,contact, username], (error, result) => {
        res.status(201).send(`Customer Added with ID: $(result.id)`)
        console.log('customer has been updated')
    });
}

