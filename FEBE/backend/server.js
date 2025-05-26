const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/predict', (req, res) => {
  const { timeframe, confidence } = req.body;

  // Simulasi hasil prediksi (nanti bisa dihubungkan dengan model Python)
  const result = {
    predictedPrice: 1920.40,
    expectedChange: "+3.76%",
    investmentAdvice: "Consider buying gold as prices are expected to rise.",
    predictionDate: new Date(Date.now() + timeframe * 86400000).toDateString(),
  };

  res.json(result);
});

app.listen(PORT, () => {
  console.log(`Backend listening at http://localhost:${PORT}`);
});
