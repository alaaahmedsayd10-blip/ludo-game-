export default async function handler(req, res) {
  // التحقق بتاع فيسبوك
  if (req.method === 'GET') {
    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    if (mode === 'subscribe' && token === 'highrise2026') {
      return res.status(200).send(challenge);
    } else {
      return res.sendStatus(403);
    }
  }

  // استقبال التنبيهات
  if (req.method === 'POST') {
    console.log("تنبيه وصل:", req.body);
    return res.status(200).send('EVENT_RECEIVED');
  }
}
