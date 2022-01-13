const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);


export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            
            client.messages
                    .create({
                        body: 'NEW ORDER! www.torofusiongrill.com/log',
                        from: '+19378892658',
                        to: '+16615678089'
                    }).then(message => 
                        res.status(200).json(message.sid));

            
        } catch (err) {
            console.log(err.message)
            res.status(500).json({statusCode: 500, message: err.message});
        }
    } else {
        res.setHeader('Allow', 'GET');
        res.status(405).end('Method Not Allowed');
    }
}