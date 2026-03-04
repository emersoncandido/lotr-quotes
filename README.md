# 🧙‍♂️ LotR Quotes API

A lightweight, containerized REST API built with **Node.js** and **Express** that serves iconic wisdom from some of the the greatest characters of Middle-earth. This is not intended to be a full collection of quotes, just a fun API for testing purposes.

[![Node.js CI](https://github.com/emersoncandido/lotr-quotes/actions/workflows/node-ci.yml/badge.svg)](https://github.com/emersoncandido/lotr-quotes/actions)
![Render](https://img.shields.io/badge/Render-Live-brightgreen)

---

## 🚀 Live Demo
> **Base URL:** `https://lotr-quotes.onrender.com`

---

## 🛠 Endpoints

| Endpoint | Method | Description |
| :--- | :--- | :--- |
| `/` | `GET` | **API Index:** Returns a list of all available routes. |
| `/characters` | `GET` | **Character List:** Returns names of characters in the system. |
| `/quotes/:name` | `GET` | **Character Quotes:** Returns all quotes for a specific character. |
| `/random` | `GET` | **Random Quote:** Returns one random quote from any character. |

---

## 📖 Usage Examples

### Get all avalilable characters list
**Request:** `GET /characters`

**Response:**
```json
["Theoden", "Bilbo", "Gandalf", "Sam"]
```

### Get quotes from a specific character
**Request:** `GET /quotes/gandalf`

**Response:**
```json
{
  "character": "gandalf",
  "quotes": [
    "A wizard is never late, nor is he early, he arrives precisely when he means to.",
    "The world is not in your books and maps. It's out there"
  ]
}
```

### Gets a random quote a random character
**Request:** `GET /random`

**Response:**
```json
{
  "character": "Theoden",
  "quote": "Arise! Arise, Riders of Théoden! Spears shall be shaken, shields shall be splintered!"
}
```

---

## 💻 Technical Stack
* **Runtime:** Node.js (v20+)
* **Framework:** Express
* **Testing:** Jest & Supertest
* **Containerization:** Docker
* **Deployment:** Render.com
* **CI/CD:** GitHub Actions

## 🛠 Local Development

1. **Clone the repository:**
```bash
git clone [https://github.com/emersoncandido/lotr-quotes.git](https://github.com/emersoncandido/lotr-quotes.git)
```

2. **Install dependencies:**
```bash
npm install
```

3. **Run tests:**
```bash
npm test
```

4. **Start the server:**
```bash
npm start
```

---

*"Even the smallest person can change the course of the future."*
