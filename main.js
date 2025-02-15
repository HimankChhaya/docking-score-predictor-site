// This script listens for form submissions, sends the SMILES string to your API,
// and displays the predicted docking score.
document.getElementById('predictForm').addEventListener('submit', async (event) => {
  event.preventDefault();
  const smiles = document.getElementById('smiles').value;
  
  // Replace this URL with the endpoint where your Flask (or other) backend is hosted.
  const apiUrl = 'https://your-api-endpoint.com/predict';
  
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ smiles })
    });
    
    if (!response.ok) {
      throw new Error(`Server error: ${response.statusText}`);
    }
    
    const data = await response.json();
    document.getElementById('result').innerText = 
      'Predicted docking score: ' + data.predicted_docking_score;
  } catch (error) {
    document.getElementById('result').innerText = 
      'Error: ' + error.message;
  }
});
