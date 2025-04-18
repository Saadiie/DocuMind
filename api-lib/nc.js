const ncOpts = {
  onError(error, req, res) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Something went wrong!' });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method ${req.method} not allowed` });
  },
};

export default ncOpts;
