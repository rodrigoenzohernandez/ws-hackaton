# Don Piponne - Modern Website

A modern redesign of the Don Piponne website featuring a React frontend with Material UI and a NestJS backend with MongoDB.

## 🏗️ Project Structure

```
ws-hackaton/
├── piponne-app/          # Frontend React application
├── piponne-back/         # Backend NestJS API
├── docker-compose.yml    # Docker production configuration
└── docker-compose.dev.yml # Docker development configuration
```

## 🚀 Tech Stack

### Frontend (piponne-app)
- **React 18** with Hooks
- **Material-UI (MUI)** for modern UI components
- **React Router** for navigation
- **Axios** for API communication

### Backend (piponne-back)
- **NestJS** framework
- **MongoDB** with Mongoose ODM
- **Class Validator** for DTO validation
- **TypeScript** for type safety

### Infrastructure
- **Docker** for containerization
- **Docker Compose** for orchestration
- **Nginx** for frontend serving

## 📋 Prerequisites

- Node.js 18 or higher
- Docker and Docker Compose
- npm or yarn

## 🛠️ Quick Start

### Using Docker (Recommended)

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ws-hackaton
   ```

2. **Start all services with Docker Compose**
   ```bash
   # Production mode
   docker-compose up -d

   # Development mode (with hot reload for backend)
   docker-compose -f docker-compose.dev.yml up -d
   ```

3. **Access the applications**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:3001/api
   - MongoDB: localhost:27017

4. **Stop all services**
   ```bash
   docker-compose down
   # or
   docker-compose -f docker-compose.dev.yml down
   ```

### Local Development (Without Docker)

#### Backend Setup

1. **Navigate to backend directory**
   ```bash
   cd piponne-back
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment file**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with your configuration:
   ```
   PORT=3001
   NODE_ENV=development
   MONGODB_URI=mongodb://localhost:27017/piponne
   CORS_ORIGIN=http://localhost:3000
   ```

4. **Start MongoDB** (if not using Docker)
   ```bash
   # Using homebrew on macOS
   brew services start mongodb-community
   ```

5. **Start the backend**
   ```bash
   npm run start:dev
   ```

#### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd piponne-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment file**
   ```bash
   cp .env.example .env
   ```
   Edit `.env`:
   ```
   REACT_APP_API_URL=http://localhost:3001/api
   ```

4. **Start the frontend**
   ```bash
   npm start
   ```

## 📁 Project Details

### Frontend Features

- **Home Page**: Hero section with featured products and services
- **Products Page**: Catalog of all products with filtering
- **Shop Page**: E-commerce placeholder (coming soon)
- **Viandas Page**: Corporate meal services information
- **Company Page**: About us and company values
- **Contact Page**: Contact form with information
- **Product Detail**: Individual product pages

### Backend API Endpoints

#### Products
- `GET /api/products` - List all active products
- `GET /api/products?category=Eventos` - Filter by category
- `GET /api/products/:id` - Get product details
- `POST /api/products` - Create product
- `PATCH /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product

#### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - List all messages
- `GET /api/contact/:id` - Get message details
- `PATCH /api/contact/:id/status` - Update message status

#### Health Check
- `GET /api/health` - API health status

## 🎨 Design Decisions

### Color Palette
- **Primary**: Red (#d32f2f) - Traditional Italian food color
- **Secondary**: Amber (#ffa000) - Warmth and hospitality
- **Background**: Light gray (#f5f5f5)

### Architecture Principles
- **Single Responsibility**: Each module focuses on one concern
- **Modular Design**: Clear separation between frontend and backend
- **DRY**: Reusable components and services
- **Type Safety**: TypeScript throughout the backend

## 🧪 Testing

### Backend Tests
```bash
cd piponne-back
npm run test
npm run test:e2e
npm run test:cov
```

### Frontend Tests
```bash
cd piponne-app
npm test
```

## 📦 Building for Production

### Using Docker
```bash
docker-compose up --build
```

### Manual Build

**Backend:**
```bash
cd piponne-back
npm run build
npm run start:prod
```

**Frontend:**
```bash
cd piponne-app
npm run build
# Files will be in the build/ directory
```

## 🔧 Environment Variables

### Backend (.env)
- `PORT` - API port (default: 3001)
- `NODE_ENV` - Environment mode
- `MONGODB_URI` - MongoDB connection string
- `CORS_ORIGIN` - Allowed CORS origin

### Frontend (.env)
- `REACT_APP_API_URL` - Backend API URL

## 📝 Development Scripts

### Backend
- `npm run start` - Start in production mode
- `npm run start:dev` - Start with hot reload
- `npm run build` - Build the application
- `npm run lint` - Lint the code

### Frontend
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Write/update tests
4. Submit a pull request

## 📄 License

MIT

## 👥 Contact

For questions or support, please contact:
- **Phone**: 4248-3095 / 115-452-4341
- **Address**: Lugano 80, Lomas de Zamora, Buenos Aires

---

**Note**: This is a modern redesign of the original Don Piponne website (https://donpiponne.com.ar/)
