#  Expense Tracker (Full-Stack MERN)

A minimal full-stack Expense Tracker application that allows users to record, view, filter, and analyze personal expenses. The application is designed with production-like reliability considerations, including retry-safe expense creation and correct handling of monetary values.

---

##  Live Demo


| **Live demo link** | [Click Me](<https://expense-tracker-frontend-ozbz.onrender.com>) |

---

##  Features

- **Create New Expenses**: Record expenses with precise details:
  - Amount (handled with monetary precision)
  - Category
  - Description
  - Date
- **View Expense List**: See a comprehensive list of all recorded transactions.
- **Advanced Filtering**: Filter expenses by specific categories (e.g., Food, Transport, Utilities).
- **Sorting**: Automatically sorts expenses by the newest date first.
- **Total Calculation**: Real-time view of total expenses for the currently visible (filtered) list.
- **Reliability**: Implements **Idempotency-Key** to handle network retries and refreshes safely without creating duplicate entries.

---

## Tech Stack

| Area | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend** | **React (Vite)** | Fast, modern UI development |
| | **TailwindCSS** | Utility-first styling for clean design |
| | **Axios** | HTTP client for API requests |
| **Backend** | **Node.js** | Runtime environment |
| | **Express.js** | Web framework for API routes |
| | **MongoDB (Mongoose)** | NoSQL database with schema modeling |
| **Deployment** | **Render** | Full  Stack deployment|
---

## API Endpoints

### 1. Authentication
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/auth/register` | Register a new user |
| `POST` | `/api/auth/login` | Login and set HTTP-only cookie |
| `POST` | `/api/auth/logout` | Clear auth cookie |
| `GET` | `/api/auth/me` | Get current user profile |

### 2. Expenses
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/expenses` | Create a new expense (Protected) |
| `GET` | `/api/expenses` | Get user's expenses (Protected) |

**Query Parameters for GET:**
- `category`: Filter by category name
- `sort`: `date_desc` (default)

---

##  Data Design Decisions

### Security & Privacy
- **HTTP-Only Cookies**: JWTs are stored in `httpOnly` cookies rather than `localStorage`. This prevents client-side scripts from accessing sensitive tokens, mitigating XSS risks.
- **User Scoping**: All expense queries are scoped to the authenticated user ID (`req.user.id`), ensuring strict data privacy between accounts.

### Monetary Precision
- **MongoDB Decimal128**: We use the `Decimal128` type for the `amount` field to ensure accuracy for financial calculations, avoiding standard floating-point errors.

### Reliability
- **Idempotency Keys**: To handle flaky networks, the API accepts an `Idempotency-Key` header. Repeated requests with the same key return the original response instead of creating duplicates.

---

##  Running Locally

Follow these steps to set up the project on your local machine.

### Prerequisites
- Node.js (v14+)
- MongoDB (Local or Atlas URI)

### 1. Backend Setup
```bash
cd backend
npm install
# Create environment file
touch .env
```
### Add the following to `backend/.env`:
```env
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secure_random_string
NODE_ENV=development
```
###  Start the server
```
npm run dev
```

### 2. Frontend Setup
```
cd frontend
npm install
# Create environment file
touch .env
```
### Start the react server
```
npm run dev
```

## 3.Deployment Notes

- **Backend**: Deployed on Render Web Service.
- **Frontend**: Deployed on Render Static Site / Vercel.
- **CORS Configuration**: The backend is strictly configured to allow requests only from the frontend origin.
- **Production Cookies**:
  In production (`NODE_ENV=production`), cookies are configured with:
  - `secure: true` (Sent only over HTTPS)
  - `sameSite: "none"` (Required for cross-site cookie usage in modern browsers)
##  Trade-offs (Timebox Decisions)

| Decision | Context |
| :--- | :--- |
| **Minimal UI** | Styling is functional but kept minimal to prioritize correctness, authentication flow, and reliability. |
| **No Automated Tests** | Integration tests were deferred to focus on delivering a complete full-stack feature set within the time constraint. |
| **Deferred Features** | Pagination and advanced analytics dashboards are planned for future iterations. |
---

##  Author

**Shamik Mandal**