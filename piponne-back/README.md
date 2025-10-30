# Don Piponne - Backend API

NestJS REST API for the Don Piponne catering business with MongoDB database.

## 🚀 Features

- **RESTful API**: Clean and well-structured endpoints
- **MongoDB Integration**: Using Mongoose ODM
- **Validation**: DTO validation with class-validator
- **Type Safety**: Full TypeScript implementation
- **CORS**: Configured for frontend integration

## 🛠️ Tech Stack

- NestJS 10.2
- MongoDB with Mongoose 8.0
- TypeScript 5.2
- Class Validator & Class Transformer
- Jest for testing

## 📦 Project Structure

```
src/
├── products/              # Products module
│   ├── dto/              # Data Transfer Objects
│   ├── schemas/          # Mongoose schemas
│   ├── products.controller.ts
│   ├── products.service.ts
│   └── products.module.ts
├── contact/              # Contact module
│   ├── dto/
│   ├── schemas/
│   ├── contact.controller.ts
│   ├── contact.service.ts
│   └── contact.module.ts
├── app.module.ts         # Root module
├── app.controller.ts
├── app.service.ts
└── main.ts               # Entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- MongoDB 7.0+
- npm or yarn

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create `.env` file:
   ```bash
   cp .env.example .env
   ```

3. Configure environment variables:
   ```env
   PORT=3001
   NODE_ENV=development
   MONGODB_URI=mongodb://localhost:27017/piponne
   CORS_ORIGIN=http://localhost:3000
   ```

4. Start MongoDB:
   ```bash
   # macOS with Homebrew
   brew services start mongodb-community

   # Or with Docker
   docker run -d -p 27017:27017 --name mongodb mongo:7.0
   ```

5. Start the server:
   ```bash
   # Development mode with hot reload
   npm run start:dev

   # Production mode
   npm run start:prod
   ```

## 📡 API Endpoints

### Health Check
```
GET /api
GET /api/health
```

### Products

**List all products**
```
GET /api/products
```

**Filter by category**
```
GET /api/products?category=Eventos
```

**Get product by ID**
```
GET /api/products/:id
```

**Create product**
```
POST /api/products
Body: {
  "name": "Pizza Party",
  "description": "Description...",
  "category": "Eventos",
  "features": ["Feature 1", "Feature 2"],
  "image": "url",
  "isActive": true,
  "order": 0
}
```

**Update product**
```
PATCH /api/products/:id
Body: { "name": "Updated Name" }
```

**Delete product**
```
DELETE /api/products/:id
```

### Contact Messages

**Submit contact form**
```
POST /api/contact
Body: {
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "message": "Message..."
}
```

**List all messages**
```
GET /api/contact
```

**Get message by ID**
```
GET /api/contact/:id
```

**Update message status**
```
PATCH /api/contact/:id/status
Body: { "status": "contacted" }
```

## 🗄️ Database Models

### Product Schema
```typescript
{
  name: string;
  description: string;
  category: string;
  image?: string;
  features?: string[];
  isActive: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}
```

### Contact Message Schema
```typescript
{
  name: string;
  email: string;
  phone: string;
  message: string;
  status: 'pending' | 'contacted' | 'resolved';
  createdAt: Date;
  updatedAt: Date;
}
```

## 🧪 Testing

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Test coverage
npm run test:cov
```

## 🏗️ Building

```bash
# Build the application
npm run build

# Run built application
npm run start:prod
```

## 🐳 Docker

Build Docker image:
```bash
docker build -t piponne-back .
```

Run container:
```bash
docker run -p 3001:3001 \
  -e MONGODB_URI=mongodb://host.docker.internal:27017/piponne \
  piponne-back
```

## 🔒 Security Best Practices

- All DTOs validated with class-validator
- CORS configured for specific origins
- Environment variables for sensitive data
- No secrets in code
- Input sanitization enabled

## 📝 Available Scripts

- `npm run start` - Start in production mode
- `npm run start:dev` - Start with hot reload
- `npm run start:debug` - Start in debug mode
- `npm run build` - Build the application
- `npm run format` - Format code with Prettier
- `npm run lint` - Lint code with ESLint
- `npm test` - Run unit tests
- `npm run test:e2e` - Run E2E tests
- `npm run test:cov` - Generate test coverage

## 🤝 API Usage Example

```javascript
// Fetch all products
const response = await fetch('http://localhost:3001/api/products');
const products = await response.json();

// Create a product
const newProduct = await fetch('http://localhost:3001/api/products', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'New Product',
    description: 'Description',
    category: 'Eventos',
  }),
});
```

## 📄 License

MIT
