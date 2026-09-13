# CortexAI

An intelligent, multi-agent AI assistant platform built with modern full-stack technologies. CortexAI routes queries to specialized agents—for chat, coding, web search, document processing, and more—delivering contextual, professional responses with code artifacts and visual outputs.

## 🎯 Project Vision

CortexAI is a production-ready AI platform that demonstrates:
- **Microservices Architecture**: Modular, scalable backend services
- **AI Agent Orchestration**: LangChain-powered routing between specialized AI agents
- **Real-time State Management**: Redis-backed sessions and Redux frontend state
- **Multi-model LLM Integration**: Groq, Google Gemini, OpenRouter, and more
- **Full-Stack Development**: Professional React + Node.js application

> **Status**: Active development — features and services are being incrementally built and enhanced.

---

## 🚀 Key Features

### 🤖 Specialized AI Agents
- **Chat Agent**: Conversational AI with web search context integration
- **Coding Agent**: Project generation, code review, debugging, optimization, and documentation
- **Search Agent**: Web search with Tavily API integration for real-time information
- **Vision Agent** *(in progress)*: Image analysis and processing
- **PDF Agent** *(in progress)*: Document understanding and extraction
- **PPT Agent** *(in progress)*: Presentation analysis

### 🔐 Secure Authentication & Sessions
- Firebase authentication integration
- Redis-backed session management
- Middleware-based request protection
- Cross-service user context propagation

### 💻 Modern Frontend
- React 19 with Vite for blazing-fast development
- Redux Toolkit for predictable state management
- Monaco Editor for code editing and visualization
- Tailwind CSS for responsive, modern UI
- Real-time markdown rendering with syntax highlighting

### 🏗️ Production Architecture
- Express API Gateway with request routing and proxying
- Microservices-based backend (Auth, Chat, Agent)
- Redis for distributed caching and session storage
- Docker Compose for local development

---

## 🛠️ Tech Stack

### Frontend
- **React 19** — Modern UI framework
- **Vite** — Lightning-fast build tool
- **Redux Toolkit** — State management
- **Tailwind CSS** — Utility-first styling
- **Monaco Editor** — Professional code editor
- **Axios** — HTTP client
- **Firebase** — Authentication
- **React Markdown & Syntax Highlighter** — Rich content rendering

### Backend
- **Node.js** — Runtime environment
- **Express 5** — Web framework
- **LangChain** — AI/LLM orchestration
- **LangGraph** — Agentic workflows
- **MongoDB** — Document database
- **Redis** — Session & cache store
- **Mongoose** — MongoDB ODM

### AI & LLM Integrations
- **Groq** — Fast LLM inference (GPT-OSS-120B)
- **Google Gemini** — Multimodal AI
- **OpenRouter** — Multi-model access (DeepSeek, etc.)
- **Tavily** — Web search engine

---

## 📁 Project Structure

```
cortexAI/
├── backend/
│   ├── gateway/                 # Express API Gateway
│   │   ├── index.js            # Main server, routing
│   │   ├── middleware/          # Auth protection, session validation
│   │   ├── controllers/         # User endpoints
│   │   └── utils/              # Proxy utilities
│   ├── services/
│   │   ├── auth/               # Firebase auth, user registration/login
│   │   ├── chat/               # Message persistence, conversation history
│   │   └── agent/              # LangGraph workflow, agent orchestration
│   │       ├── agents/         # Specialized AI agents (chat, coding, search, etc.)
│   │       ├── graph/          # State machine & routing logic
│   │       └── config/         # LLM models, memory, Tavily integration
│   ├── shared/
│   │   └── redis/              # Redis client configuration
│   └── docker-compose.yml      # Local Redis service
├── frontend/
│   ├── vite-project/           # React + Vite application
│   │   ├── src/
│   │   │   ├── App.jsx         # Root component
│   │   │   ├── pages/          # Page components
│   │   │   ├── redux/          # Redux slices & store
│   │   │   └── features/       # API client functions
│   │   ├── package.json
│   │   └── vite.config.js
│   └── package.json
└── README.md
```

---

## 🔄 How It Works

### Request Flow
```
User Input (React UI)
    ↓
Axios → API Gateway (Express)
    ↓
Auth Middleware (validate Redis session)
    ↓
Route to Service (/api/chat, /api/agent, /api/auth)
    ↓
Agent Service (LangGraph workflow)
    ↓
Router (classify request intent)
    ↓
Specialized Agent (Chat, Coding, Search, etc.)
    ↓
LLM Inference (Groq/Gemini/OpenRouter)
    ↓
Response + Artifacts (code, images, markdown)
    ↓
User Sees Result
```

### Agent Orchestration (LangGraph)
The agent service uses **LangGraph** to manage complex workflows:
1. **Router** classifies incoming prompts into agent types
2. **Conditional edges** route to specialized agents
3. **Chat Agent** handles general conversation with search context
4. **Coding Agent** generates projects, reviews code, optimizes, documents
5. **Search Agent** fetches web results via Tavily
6. Results are saved to MongoDB and returned to frontend

---

## 🚦 Getting Started

### Prerequisites
- Node.js 18+
- Redis (via Docker)
- Environment variables (API keys for LLMs)

### Setup & Run

#### Backend

1. **Start Redis**
```bash
cd backend
docker-compose up -d
```

2. **Auth Service**
```bash
cd backend/services/auth
npm install
npm run dev  # Runs on port 3001 (or custom PORT env var)
```

3. **Chat Service**
```bash
cd backend/services/chat
npm install
npm run dev  # Runs on port 3002
```

4. **Agent Service**
```bash
cd backend/services/agent
npm install
npm run dev  # Runs on port 3003
```

5. **API Gateway**
```bash
cd backend/gateway
npm install
npm run dev  # Runs on port 3000
```

#### Frontend

```bash
cd frontend/vite-project
npm install
npm run dev  # Runs on http://localhost:5173
```

### Environment Variables

Create `.env` files in each service:

**backend/gateway/.env**
```
PORT=3000
FRONTEND_URL=http://localhost:5173
AUTH_SERVICE=http://localhost:3001
CHAT_SERVICE=http://localhost:3002
AGENT_SERVICE=http://localhost:3003
REDIS_URL=redis://localhost:6379
```

**backend/services/auth/.env**
```
PORT=3001
MONGO_URI=mongodb://...
FIREBASE_PROJECT_ID=your-project-id
REDIS_URL=redis://localhost:6379
```

**backend/services/chat/.env**
```
PORT=3002
MONGO_URI=mongodb://...
REDIS_URL=redis://localhost:6379
```

**backend/services/agent/.env**
```
PORT=3003
GROQ_API_KEY=your-groq-key
GOOGLE_API_KEY=your-google-key
OPENROUTER_API_KEY=your-openrouter-key
TAVILY_API_KEY=your-tavily-key
CHAT_SERVICE=http://localhost:3002
REDIS_URL=redis://localhost:6379
```

---

## 🎓 Skills Demonstrated

### Backend Architecture & Design Patterns
✅ **Microservices Architecture** — Modular, independently deployable services  
✅ **API Gateway Pattern** — Request routing, middleware orchestration, cross-service proxy  
✅ **Middleware Stack** — CORS, authentication, request logging (Morgan), cookie parsing  
✅ **Session Management** — Redis-backed stateless sessions with distributed validation  
✅ **Error Handling** — Consistent error responses across services  

### AI & LLM Engineering
✅ **LangChain Framework** — LLM chains, agents, memory, and tools  
✅ **LangGraph** — State machine workflows for agentic systems  
✅ **Multi-Model Integration** — Groq, Google Gemini, OpenRouter APIs  
✅ **Intent Classification** — Routing user requests to specialized agents  
✅ **Prompt Engineering** — System prompts for consistent, high-quality outputs  
✅ **Memory Management** — Conversation history, context persistence  

### Frontend Development
✅ **React 19 Fundamentals** — Hooks, component composition, lifecycle  
✅ **State Management** — Redux Toolkit for predictable app state  
✅ **HTTP Requests** — Axios integration with error handling  
✅ **Authentication Flow** — Session management and protected components  
✅ **UI Components** — Monaco Editor, Markdown rendering, syntax highlighting  
✅ **Responsive Design** — Tailwind CSS responsive utilities  

### Full-Stack & DevOps
✅ **Node.js & Express** — RESTful API design, middleware patterns  
✅ **Database Integration** — MongoDB with Mongoose, Redis for caching  
✅ **Environment Configuration** — Dotenv for secure credential management  
✅ **Docker & Containerization** — Docker Compose for local development  
✅ **Development Tools** — Vite, Nodemon, ESLint  

### Software Engineering Practices
✅ **Code Organization** — Separation of concerns (controllers, services, utilities)  
✅ **Reusable Modules** — Shared Redis client, proxy utilities  
✅ **Async/Await Patterns** — Promise-based error handling  
✅ **API Design** — Clean request/response structures  
✅ **Configuration Management** — Environment-specific settings  

---

## 📈 Roadmap

- [ ] **Vision Agent** — Image analysis, OCR, visual understanding
- [ ] **PDF Agent** — Document extraction, Q&A over PDFs
- [ ] **PPT Agent** — Presentation analysis and summarization
- [ ] **Database Optimization** — Query indexing, caching strategies
- [ ] **Testing Suite** — Unit tests (Jest), integration tests
- [ ] **WebSocket Support** — Real-time streaming responses
- [ ] **Authentication Enhancements** — 2FA, SSO, OAuth2
- [ ] **Production Deployment** — Kubernetes, CI/CD pipelines
- [ ] **Monitoring & Logging** — Observability stack (ELK, Sentry)

---

## 🤝 Contributing

This is an active learning project. Feedback, suggestions, and improvements are welcome!

---

## 📝 License

ISC

---

## 👨‍💻 Author

**Neel654**  
Building intelligent AI systems | Full-stack development | LLM engineering

---

## 📞 Get in Touch

Have ideas, questions, or want to collaborate? Feel free to open an issue or reach out!
