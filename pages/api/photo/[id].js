export default function handler(req, res) {
  const { id } = req.query
  res.json({ id: req.query.id });
}