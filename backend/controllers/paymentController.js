const catchAsyncErrors = require("../middleware/catchAsynchError");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
exports.processPayment = catchAsyncErrors(async (req, res, next) => {
  const myPayment = await stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: "inr",
    metadata: {
      company: "Ecommerce",
    },
  });

  res
    .status(200)
    .json({ success: true, client_secret: myPayment.client_secret });
});

exports.sendStripeApiKey = catchAsyncErrors(async (req, res, next) => {
  res.status(200).json({ stripeApiKey:"pk_test_51K4NynFtBlenmdN4CJRe9Um72f0aqUPus6INLWPpMArrJ7iaEwNPk6nqh0M8jUEG2Yw7N5q4rDhLyZ1CxuRIe0sP00j9uEH4VF"});
});