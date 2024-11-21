# _ECHO-mini_

ECHO-mini is a conversational assistant backend for answering questions about **Hardik Jaiswal**. Built using **Express.js**, **Natural.js**, and **Cors**, this backend uses a TF-IDF-based approach to find the most relevant answers from a predefined dataset.

## _Features_

- **Question Matching**: Uses TF-IDF (Term Frequency-Inverse Document Frequency) to determine the best-matching answers.
- **Custom Dataset**: Answers common questions about Hardik Jaiswal.
- **REST API**:
  - Health Check Endpoint
  - Question-Answering Endpoint
- **Error Handling**: Returns appropriate responses for unmatched routes and missing query parameters.


## _Getting Started_

Follow the instructions below to set up and run the project on your local machine.

### _Prerequisites_

Make sure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** (comes with Node.js)


### _Installation_

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd echo-portfolio-backend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the server**:
   ```bash
   node index.js
   ```

4. **Access the server**:
   The server runs on [http://localhost:3000](http://localhost:3000) by default.


## _API Endpoints_

### 1. Health Check
**URL**: `/`  
**Method**: `GET`  
**Description**: Checks if the server is online.  
**Response**:
```json
{
  "status": "Server is online"
}
```


### 2. Ask a Question
**URL**: `/ask`  
**Method**: `GET`  
**Query Parameter**:  
- `query` (string): The question to ask ECHO.  

**Example Request**:
```http
GET /ask?query=Who%20is%20Hardik
```

**Example Response**:
```json
{
  "answer": "Hardik Jaiswal is a python developer with a keen interest in AI, ML and robotics."
}
```

If no match is found:
```json
{
  "answer": "I'm sorry, I couldn't find an answer to that question."
}
```

### 3. Catch-All Route
Handles unmatched routes.  
**Response**:
```json
{
  "error": "Route not found"
}
```


## _Technologies Used_

- **[Express.js](https://expressjs.com/)**: Web framework for Node.js.
- **[Natural.js](https://github.com/NaturalNode/natural)**: A Natural Language Processing library for Node.js.
- **[Cors](https://github.com/expressjs/cors)**: Middleware for enabling Cross-Origin Resource Sharing (CORS).


## _Future Enhancements_

- **Dynamic Dataset**: Allow dynamic addition of questions and answers.
- **Database Integration**: Store the dataset in a database for scalability.
- **Improved NLP**: Use a more advanced model (e.g., GPT) for better question matching.
- **Authentication**: Add token-based authentication for secure API access.


## _Contributing_

Contributions are welcome! If you find a bug or want to add a feature, please follow these steps:

1. Fork the repository.
2. Create a new branch (`feature/your-feature-name`).
3. Commit your changes.
4. Open a pull request.


## -License_

This project is licensed under the [MIT License](LICENSE).


## _Author_

Developed by **Hardik Jaiswal**.  
Feel free to connect via:

- [GitHub](https://github.com/pythonicforge)
- [LinkedIn](https://linkedin.com/in/pseudopythonic)
