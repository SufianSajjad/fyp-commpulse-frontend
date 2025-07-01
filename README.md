# CommPulse – Frontend Interface

This is the frontend of **CommPulse**, an intelligent meeting quality monitoring system. It allows authenticated users to access meeting summaries, sentiment metrics, speaker breakdowns, and more through a modern and responsive user interface.

## 🌐 Features

- 🔐 Secure Login with JWT Tokens
- 📊 Dashboard with Meeting Metrics
- 😊 Sentiment Visualization per Speaker
- 🧠 Speaker Diarization Output Viewer
- 📝 Summary Viewer with Agenda Tags
- 🕒 Timestamped Highlights Panel

## 🧰 Tech Stack

- **Language**: JavaScript
- **Framework**: React.js
- **Styling**: TailwindCSS / Bootstrap (as used)
- **Auth**: JWT (handled via backend)
- **API Integration**: Axios

## 🗂️ Project Structure

```
commpulse-frontend/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   └── App.jsx
├── public/
└── package.json
```

## 🛠️ Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/yourusername/commpulse-frontend.git
cd commpulse-frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the App

```bash
npm start
```

The app should now run at `http://localhost:3000`

## 🔒 Environment Variables

Create a `.env` file in the root and configure:

```
REACT_APP_API_URL=http://localhost:5000
```

Adjust as needed for your backend URL.

## 📌 License

This is a Final Year Project for FAST NUCES. Not intended for commercial use.
