const { TransactionRequestType, AuthorizationType, CreateTransactionRequest } = require('authorizenet');
require('dotenv').config();

const apiLoginKey = process.env.API_LOGIN_ID;
const transactionKey = process.env.TRANSACTION_KEY;

const paymentController = {
  processPayment: async (req, res) => {
    const { cardNumber, expiry, cvc } = req.body;

    const merchantAuthenticationType = {
      name: apiLoginKey,
      transactionKey: transactionKey,
    };

    const creditCard = {
      cardNumber,
      expirationDate: expiry,
      cardCode: cvc,
    };

    const paymentType = {
      creditCard: creditCard,
    };

    const transactionRequest = {
      transactionType: TransactionRequestType.AUTH_CAPTURE,
      payment: paymentType,
      amount: '10.00', // Change this to the actual amount
    };

    const createRequest = new CreateTransactionRequest();
    createRequest.transactionRequest = transactionRequest;
    createRequest.merchantAuthentication = merchantAuthenticationType;

    try {
      const response = await createRequest.execute();
      if (response.messages.resultCode === 'Ok') {
        // Payment successful
        return res.render('success'); // Render success view
      } else {
        // Payment failed
        return res.render('failure'); // Render failure view
      }
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).send('Internal Server Error');
    }
  },
};

module.exports = paymentController;
