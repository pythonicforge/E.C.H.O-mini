const express = require("express");
const natural = require("natural");
const fs = require("fs");

const app = express();
const port = 3000;

// Load dataset from a JSON file
const dataset = JSON.parse(fs.readFileSync("data.json"));

// Precompute TF-IDF for the dataset's questions
const tokenizer = new natural.WordTokenizer();
const tfidf = new natural.TfIdf();

// Add all questions to the TF-IDF model
dataset.forEach(entry => {
  tfidf.addDocument(entry.question);
});

// Function to find the best matching answer
function findBestMatch(query) {
  let bestMatchIndex = -1;
  let bestScore = -1;

  tfidf.tfidfs(query, function(i, score) {
    if (score > bestScore) {
      bestScore = score;
      bestMatchIndex = i;
    }
  });

  // If the best score is below a threshold, return a fallback message
  if (bestScore < 0.2) {
    return "I'm sorry, I couldn't find an answer to that question.";
  }

  return dataset[bestMatchIndex].answer;
}

// API endpoint to ask a question
app.get("/ask", (req, res) => {
  const query = req.query.query;
  if (!query) {
    return res.status(400).json({ error: "Query parameter is required." });
  }
  
  const answer = findBestMatch(query);
  res.json({ answer: answer });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
