const router = require("express").Router();
const Stripe = require("stripe");

const stripe = new Stripe("sk_test_your_key_here");

router.post("/checkout", async (req, res) => {
    const { amount } = req.body;

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        line_items: [{
            price_data: {
                currency: "usd",
                product_data: { name: "Table Booking" },
                unit_amount: amount * 100
            },
            quantity: 1
        }],
       success_url: "https://lumiere-frontend.onrender.com/index.html?success=true",
       cancel_url: "https://lumiere-frontend.onrender.com/index.html?cancel=true"
    });

    res.json({ url: session.url });
});

module.exports = router;