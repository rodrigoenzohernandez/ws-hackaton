# Setup Guide - Don Piponne Website

This guide will help you set up and run the Don Piponne website on your local machine.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **Docker Desktop** - [Download](https://www.docker.com/products/docker-desktop/)
- **Git** - [Download](https://git-scm.com/)

## 🚀 Option 1: Quick Start with Docker (Recommended)

This is the easiest way to get everything running.

### Step 1: Clone the Repository
```bash
cd ~/repos
git clone <your-repo-url> ws-hackaton
cd ws-hackaton
```

### Step 2: Start All Services
```bash
# Start everything (Frontend, Backend, Database)
docker-compose up -d

# View logs
docker-compose logs -f
```

### Step 3: Access the Application
- **Frontend**: Open http://localhost:3000 in your browser
- **Backend API**: http://localhost:3001/api
- **API Health Check**: http://localhost:3001/api/health

### Step 4: Stop Services
```bash
docker-compose down
```

## 🛠️ Option 2: Local Development Setup

If you want to develop without Docker or need more control.

### Step 1: Setup MongoDB

**Option A: Using Docker (Easier)**
```bash
docker run -d -p 27017:27017 --name mongodb mongo:7.0
```

**Option B: Install MongoDB Locally**
```bash
# macOS with Homebrew
brew tap mongodb/brew
brew install mongodb-community@7.0
brew services start mongodb-community
```

### Step 2: Setup Backend

```bash
# Navigate to backend
cd piponne-back

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Edit .env if needed (default values should work)
# Start the backend
npm run start:dev
```

The backend should now be running at http://localhost:3001

### Step 3: Setup Frontend

Open a **new terminal window**:

```bash
# Navigate to frontend
cd piponne-app

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Start the frontend
npm start
```

The frontend should automatically open at http://localhost:3000

## 🔍 Verify Installation

1. **Check Backend Health**
   ```bash
   curl http://localhost:3001/api/health
   ```
   Should return: `{"status":"ok","timestamp":"...","service":"piponne-back"}`

2. **Check Frontend**
   Open http://localhost:3000 in your browser. You should see the Don Piponne homepage.

3. **Check Database Connection**
   ```bash
   # If using Docker MongoDB
   docker exec -it mongodb mongosh
   > show dbs
   > use piponne
   ```

## 🧪 Running Tests

### Backend Tests
```bash
cd piponne-back
npm test
```

### Frontend Tests
```bash
cd piponne-app
npm test
```

## 🐛 Troubleshooting

### Port Already in Use

If you get a "port already in use" error:

```bash
# Find process using port 3000 (Frontend)
lsof -ti:3000 | xargs kill -9

# Find process using port 3001 (Backend)
lsof -ti:3001 | xargs kill -9

# Find process using port 27017 (MongoDB)
lsof -ti:27017 | xargs kill -9
```

### Docker Issues

```bash
# Remove all containers and start fresh
docker-compose down -v
docker-compose up --build

# View logs for specific service
docker-compose logs piponne-back
docker-compose logs piponne-app
docker-compose logs mongodb
```

### MongoDB Connection Issues

If backend can't connect to MongoDB:

1. Check MongoDB is running:
   ```bash
   # Docker
   docker ps | grep mongo
   
   # Local installation
   brew services list | grep mongodb
   ```

2. Verify connection string in `piponne-back/.env`:
   ```
   MONGODB_URI=mongodb://localhost:27017/piponne
   ```

### Node Modules Issues

```bash
# Backend
cd piponne-back
rm -rf node_modules package-lock.json
npm install

# Frontend
cd piponne-app
rm -rf node_modules package-lock.json
npm install
```

## 📦 Adding Sample Data

To populate the database with sample products:

```bash
# Start backend first
cd piponne-back
npm run start:dev

# In another terminal, use curl or Postman to add products
curl -X POST http://localhost:3001/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Pizza Party",
    "description": "Pizzas artesanales para eventos",
    "category": "Eventos",
    "features": ["Pizzero incluido", "Variedad de gustos"],
    "isActive": true,
    "order": 1
  }'
```

## 🔄 Development Workflow

### Making Changes

1. **Frontend Changes**: 
   - Edit files in `piponne-app/src/`
   - Changes auto-reload in browser

2. **Backend Changes**:
   - Edit files in `piponne-back/src/`
   - NestJS auto-recompiles and restarts

3. **Database Changes**:
   - Update schemas in `piponne-back/src/*/schemas/`
   - Update DTOs in `piponne-back/src/*/dto/`

### Best Practices

- Create feature branches for new work
- Test locally before committing
- Update documentation when adding features
- Follow the existing code structure

## 📚 Next Steps

1. **Customize the theme** in `piponne-app/src/theme.js`
2. **Add more products** through the API
3. **Customize content** in page components
4. **Add images** for products
5. **Set up email service** for contact form
6. **Deploy to production** (see DEPLOYMENT.md)

## 💡 Useful Commands

```bash
# View all Docker containers
docker ps -a

# Restart a specific service
docker-compose restart piponne-back

# View real-time logs
docker-compose logs -f piponne-app

# Access MongoDB shell
docker exec -it piponne-mongodb-dev mongosh

# Rebuild containers
docker-compose up --build

# Clean everything (including volumes)
docker-compose down -v
```

## 📞 Need Help?

- Check the main [README.md](README.md) for more details
- Review the [Backend README](piponne-back/README.md)
- Review the [Frontend README](piponne-app/README.md)
- Check NestJS docs: https://docs.nestjs.com/
- Check React docs: https://react.dev/
- Check Material-UI docs: https://mui.com/

---

**Happy Coding! 🚀**
