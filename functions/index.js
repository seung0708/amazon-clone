const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require('stripe')('sk_test_51I6SY3Gjbath9vdawfzUrXbXMkLHD1Bp1MjfCb5sHtUywv3bmQlNhCKjyWdNtcque94udQchcXrFLpvvbzd1f3AF009nNXJGAF')

// App config
const app = express();


// Middleware
app.use(cors({orgin: true}));
app.use(express.json());

//API Route

app.get('/', (request , response) => response.status(200).send ('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Received', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunits of the currency
        currency: "usd",
    });
    //OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})

exports.api = functions.https.onRequest(app)

// Example Endpoint
//http://127.0.0.1:5001/clone-3f8ea/us-central1/api