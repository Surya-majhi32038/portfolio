import { SendMassege } from '../utils/sendMessage.js';
exports.contact = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Validate input
        if (!name || !email || !message) {
            return res.status(400).json({ success: false, message: 'All fields are required' });
        }

        const useMsg = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
        // Send the message using the SendMsg function
        const SendMsg = await SendMassege(useMsg);
        if (!SendMsg) {
            return res.status(500).json({ success: false, message: 'Failed to send message' });
        }
        return res.status(200).json({ success: true, message: 'Thank you for contacting us!' });
    } catch (error) {
        return res.status(500).json({ success: false, message: 'An error occurred while processing your request' });
    }
}