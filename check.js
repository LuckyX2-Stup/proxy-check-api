export default function handler(req, res) {
  const { ip, port, host = 'speed.cloudflare.com', tls = 'true' } = req.query;
  res.status(200).json({
    ip,
    port,
    host,
    tls,
    message: 'Proxy check API is working!',
  });
}