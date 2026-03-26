# E-sports Tournament Management API

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)
![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=Swagger&logoColor=white)

A comprehensive RESTful API for managing E-sports tournaments, teams, matches, and player statistics for Valorant competitions. Built with Node.js, Express, and MongoDB.

## 📋 Description

This API provides a complete backend solution for E-sports tournament management. It handles user authentication, team creation and management, tournament organization, match scheduling, score tracking, and competitive leaderboards. The API is designed with security best practices, input validation, pagination, and comprehensive documentation.

## ✨ Key Features

- **JWT Authentication** - Secure user registration and login with JSON Web Tokens
- **Role-based Access Control** - Protected routes with middleware authentication
- **Team Management** - Create teams, add players (5-man roster limit for Valorant)
- **Tournament System** - Create tournaments, register teams, track status
- **Match Scheduling** - Schedule matches between teams, update scores and winners
- **Player Statistics** - Track wins, losses, kills, deaths, and matches played
- **Competitive Leaderboard** - Top 10 players ranked by wins
- **Input Validation** - Robust validation using express-validator
- **Pagination & Filtering** - Advanced results with sorting and field selection
- **Security Headers** - Helmet, CORS, rate limiting, NoSQL injection protection
- **Error Handling** - Global error handler with custom error responses
- **API Documentation** - Interactive Swagger UI at `/api-docs`
- **Database Seeder** - Quick population with dummy data for testing

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **ODM**: Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcryptjs
- **Validation**: express-validator
- **Security**: Helmet, CORS, express-rate-limit, express-mongo-sanitize, xss-clean
- **Documentation**: Swagger UI Express
- **Development**: Nodemon

## 🚀 Getting Started (Local Development)

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/lostxmusafir/26-03.git
   cd 26-03/esports-tournament-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   NODE_ENV=development
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/esports-tournament
   JWT_SECRET=your_super_secret_jwt_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

   The server will start on `http://localhost:5000`

## 🔧 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `NODE_ENV` | Environment mode | `development` or `production` |
| `PORT` | Server port | `5000` |
| `MONGO_URI` | MongoDB connection string | `mongodb://localhost:27017/esports-tournament` |
| `JWT_SECRET` | Secret key for JWT tokens | `your_super_secret_key_min_32_chars` |

## 🌱 Database Seeding

Populate the database with dummy data for testing:

**Import dummy users:**
```bash
npm run data:import
```

This creates 3 users including:
- **DreamAdmin** (admin@dream.com / password: 123456) - Radiant rank
- **ShadowStrike** (shadow@strike.com / password: shadow123) - Immortal rank
- **PhantomAce** (phantom@ace.com / password: phantom123) - Diamond rank

**Destroy all data:**
```bash
npm run data:destroy
```

## 📚 API Documentation

Interactive Swagger UI documentation is available after starting the server:

```
http://localhost:5000/api-docs
```

### API Endpoints

#### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login and get JWT token

#### Users
- `GET /api/users/me` - Get current user profile (Protected)
- `GET /api/users/leaderboard` - Get top 10 players by wins

#### Teams
- `POST /api/teams` - Create a new team (Protected)
- `GET /api/teams` - Get all teams
- `POST /api/teams/:id/add-player` - Add player to team (Protected, Captain only)

#### Tournaments
- `POST /api/tournaments` - Create a new tournament (Protected)
- `GET /api/tournaments` - Get all tournaments (with pagination)
- `POST /api/tournaments/:id/register` - Register team for tournament (Protected)

#### Matches
- `POST /api/matches` - Schedule a new match (Protected)
- `GET /api/matches` - Get all matches
- `PUT /api/matches/:id/score` - Update match score and winner (Protected)

## 🔒 Security Features

- **Helmet**: Sets various HTTP headers for security
- **CORS**: Cross-Origin Resource Sharing enabled
- **Rate Limiting**: 100 requests per 10 minutes
- **NoSQL Injection Protection**: Sanitizes user input
- **XSS Protection**: Prevents cross-site scripting attacks
- **Password Hashing**: bcrypt with salt rounds
- **JWT Authentication**: Secure token-based authentication

## 📁 Project Structure

```
esports-tournament-api/
├── _data/              # Dummy data for seeding
├── config/
│   └── db.js           # MongoDB connection
├── controllers/        # Route handlers
├── middleware/          # Custom middleware
├── models/             # Mongoose schemas
├── routes/             # Express routes
├── utils/              # Utility functions
├── index.js            # Entry point
├── seeder.js           # Database seeder
├── swagger.json        # API documentation
├── package.json
└── README.md
```

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Dream** - E-sports Tournament API

---

⭐ Star this repository if you found it helpful!