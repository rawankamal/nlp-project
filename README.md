# NLP Project: URL Sentiment Analysis

## Final Project

### Overview
This project is a web application that analyzes URLs using the MeaningCloud API. It validates the URL, sends it to the API for sentiment analysis, and displays the results to the user.

### Features
- URL validation
- Sentiment analysis using the MeaningCloud API
- Displays analysis results including:
  - Agreement
  - Subjectivity
  - Confidence
  - Irony
  - Score tag
- Responsive design with a loading spinner

### Technologies Used
- **Frontend**: HTML, CSS (SCSS), JavaScript (ES6)
- **Backend**: Node.js, Express.js
- **Build Tools**: Webpack, Babel
- **HTTP Client**: Axios
- **API**: MeaningCloud

### Installation

1. **Clone the repository**:
   ```sh
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies**:
   ```sh
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory and add your MeaningCloud API key:
   ```plaintext
   API_KEY=your_meaningcloud_api_key
   ```

4. **Run the development server**:
   ```sh
   npm run dev
   ```

5. **Build for production**:
   ```sh
   npm run build
   ```

### Usage

1. Open the application in your browser at `http://localhost:8080`.
2. Enter a URL in the input field and click **Analyze**.
3. View the analysis results displayed on the page.
