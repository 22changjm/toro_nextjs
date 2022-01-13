import Stripe from 'stripe';
import {buffer} from 'micro';
import firebaseInit from '../../../firebase/initFirebase';
import { getDatabase, ref, onValue, set, get} from "firebase/database";


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(req, res) {
    if (req.method === 'POST') {
        let event;
        const app = firebaseInit();
        const db = getDatabase(app);
        try {
            const rawBody = await buffer(req);
            const signature = req.headers['stripe-signature'];

            event = stripe.webhooks.constructEvent(
                rawBody.toString(),
                signature,
                process.env.STRIPE_WEBHOOK_SECRET
            );
        } catch (err) {
            res.status(400).send(`Webhook Error: ${err.message}`)
        }

        if (event.type === 'checkout.session.completed') {
            const session = event.data.object;
            const incompleteRef = ref(db, 'incomplete/' + session.id);
            get(incompleteRef).then(async (snapshot)=> {
                if (snapshot.exists()) {
                    set(ref(db, 'complete/' + session.id), snapshot.val())
                    const accountSid = process.env.TWILIO_ACCOUNT_SID;
                    const authToken = process.env.TWILIO_AUTH_TOKEN;
                    const client = require('twilio')(accountSid, authToken);
                    await client.messages.create({
                        body: 'NEW ORDER! www.torofusiongrill.com/log',
                        from: '+19378892658',
                        to: '+16615678089'
                    }).then(()=> {res.json({received: true})});
                }
            })
        }


    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}