
export default function handler(req, res) {
    const { quantity } = req.query;
    res.status(200).json({ quantity })
}