export default function handler(req, res) {
    const cookies = req.headers.cookie || '';
    const hasCookie = cookies.includes('_src=1');

    if (hasCookie) {
        // Daha önce gelmiş — direkt index
        res.setHeader('Location', '/index.html');
    } else {
        // gate.html'e gönder — fragment varsa index, yoksa da index
        // (index.html zaten bot tespiti yapıyor)
        res.setHeader('Location', '/gate.html');
    }
    res.status(302).end();
}
