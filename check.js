export default function handler(req, res) {
  const { ip, port, host = 'speed.cloudflare.com', tls = 'true' } = req.query;

  if (!ip || !port) {
    return res.status(400).json({ error: "IP dan Port wajib diisi!" });
  }

  res.status(200).json({
    ip,
    port,
    host,
    tls,
    status: 'Proxy check API is working!',
  });
}
