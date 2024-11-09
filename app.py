from fastapi import FastAPI
from typing import List
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import json
import numpy as np

app = FastAPI()

# Load your dataset
with open('data.json', 'r') as f:
    dataset = json.load(f)

# Precompute TF-IDF vectors for the dataset answers
vectorizer = TfidfVectorizer()
corpus = [entry["question"] for entry in dataset]
tfidf_matrix = vectorizer.fit_transform(corpus)

def find_best_match(query: str) -> str:
    query_vector = vectorizer.transform([query])
    cosine_similarities = cosine_similarity(query_vector, tfidf_matrix).flatten()
    
    # Get the index of the most similar question
    best_match_index = np.argmax(cosine_similarities)
    best_score = cosine_similarities[best_match_index]
    
    # Set a threshold to ignore low similarity scores
    if best_score < 0.2:  # Adjust this threshold as needed
        return "I'm sorry, I couldn't find an answer to that question."
    
    return dataset[best_match_index]["answer"]

@app.get("/ask")
def ask_question(query: str):
    answer = find_best_match(query)
    return {"answer": answer}
