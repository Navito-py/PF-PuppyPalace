const request = require ('request');

const auth ={
     user: process.env.PAYPAL_CLIENT, 
     pass: process.env.PAYPAL_SECRET 

}
let paymentData = {};
const createPayment = (req, res) => {

    const body = {
        intent: 'CAPTURE',
        purchase_units: [{
            amount: {
                currency_code: 'USD', //https://developer.paypal.com/docs/api/reference/currency-codes/
                value: '10'
            }
        }],
        application_context: {
            brand_name: `Vipets`,
            landing_page: 'NO_PREFERENCE', // Default, para mas informacion https://developer.paypal.com/docs/api/orders/v2/#definition-order_application_context
            user_action: 'PAY_NOW', // Accion para que en paypal muestre el monto del pago
            return_url: `https://vipets.herokuapp.com/payment/execute-payment`, // Url despues de realizar el pago
            cancel_url: `https://vipets.herokuapp.com/payment/cancel-payment` // Url despues de realizar el pago
        }
    }
    //https://api-m.sandbox.paypal.com/v2/checkout/orders [POST]

    request.post(`${process.env.PAYPAL_API}/v2/checkout/orders`, {
        auth,
        body,
        json: true
    }, (err, response) => {
        console.log(err);
        res.json({ data: response.body.links[1].href })
    })
    
}
const executePayment = (req, res) => {
    const token = req.query.token; //<-----------

    request.post(`${process.env.PAYPAL_API}/v2/checkout/orders/${token}/capture`, {
        auth,
        body: {},
        json: true
    }, (err, response) => {
        paymentData = response.body;
        if(response.body.status === 'COMPLETED'){
            res.redirect('https://vipets.vercel.app/home/profile')
        } else {
            res.send('error');
        }
        
    })
};


module.exports = {
    createPayment,
    executePayment
}