import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const lineItems = req?.body?.items ?? []
            const tip = req?.body?.tip ?? 0
            lineItems.forEach(element => {element['tax_rates'] = ['txr_1MJqraAMCx4NZbAhmtFpKGPs']})
            
            const product = await stripe.products.create({
                name: 'Gratuity',
                default_price_data: {
                    currency: 'usd',
                    unit_amount: tip
                }
              });

            lineItems.push({
                price: product['default_price'],
                quantity: 1,
            })

            const session = await stripe.checkout.sessions.create({
                mode: 'payment',
                payment_method_types: ['card'],
                line_items: lineItems,
                success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${req.headers.origin}/order`,
                expires_at: Math.round(Date.now() / 1000) + 3600,
            });

            res.status(200).json(session);
        } catch (err) {
            console.log(err.message)
            res.status(909).json({statusCode: 909, message: err.message});
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}