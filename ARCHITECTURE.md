# Architecture Documentation

This document describes the architecture decisions and design patterns used in the Don Piponne website project.

## 🏛️ Overall Architecture

The project follows a **monorepo structure** with clear separation between frontend and backend:

```
┌─────────────────┐
│   User/Browser  │
└────────┬────────┘
         │ HTTP
         ▼
┌─────────────────┐
│  Frontend (React)│
│  Port 3000      │
│  - Material-UI  │
│  - React Router │
└────────┬────────┘
         │ REST API
         ▼
┌─────────────────┐
│ Backend (NestJS)│
│  Port 3001      │
│  - Controllers  │
│  - Services     │
│  - DTOs         │
└────────┬────────┘
         │ Mongoose ODM
         ▼
┌─────────────────┐
│  MongoDB        │
│  Port 27017     │
│  - Products     │
│  - Contact Msgs │
└─────────────────┘
```

## 🎯 Design Principles

### SOLID Principles Applied

1. **Single Responsibility Principle (SRP)**
   - Each module has one reason to change
   - Components handle only UI concerns
   - Services handle only business logic
   - Controllers handle only request/response

2. **Open/Closed Principle (OCP)**
   - DTOs are extensible without modifying existing code
   - Components accept props for customization
   - Services use dependency injection

3. **Dependency Inversion Principle (DIP)**
   - Backend depends on abstractions (interfaces)
   - Frontend components depend on props, not concrete implementations
   - Database operations abstracted through Mongoose models

### Additional Principles

- **DRY (Don't Repeat Yourself)**: Reusable components and services
- **YAGNI (You Aren't Gonna Need It)**: Only implemented required features
- **Convention over Configuration**: Following framework best practices

## 🎨 Frontend Architecture

### Component Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.js       # Navigation (SRP: Header navigation)
│   ├── Footer.js       # Footer (SRP: Footer content)
│   ├── ProductCard.js  # Product display (SRP: Product representation)
│   └── FeatureCard.js  # Feature display (SRP: Feature representation)
├── pages/              # Route-level components
│   ├── Home.js         # Homepage (SRP: Landing page)
│   ├── Products.js     # Product list (SRP: Product catalog)
│   └── ...
├── theme.js            # MUI theme (SRP: Styling configuration)
└── App.js              # Route configuration (SRP: App structure)
```

### Design Patterns

**1. Component Composition**
- Small, focused components composed into larger features
- Example: `ProductCard` used in `Home` and `Products` pages

**2. Presentational vs Container Components**
- Presentational: `ProductCard`, `FeatureCard` (pure UI)
- Container: `Home`, `Products` (data fetching + UI)

**3. Hooks Pattern**
- `useState` for local state management
- `useEffect` for side effects (data fetching)
- Custom hooks possible for shared logic

**4. Props Drilling Prevention**
- React Router for navigation state
- Theme Provider for styling context

### State Management Strategy

```javascript
// Local state for simple interactions
const [formData, setFormData] = useState({});

// API calls in useEffect
useEffect(() => {
  fetchProducts().then(setProducts);
}, []);
```

**Complexity**: O(1) for state updates
**Time Complexity**: O(n) for rendering lists

## 🔧 Backend Architecture

### Module Structure

```
src/
├── products/
│   ├── dto/                    # Data Transfer Objects (validation)
│   │   ├── create-product.dto.ts
│   │   └── update-product.dto.ts
│   ├── schemas/                # Mongoose schemas (data models)
│   │   └── product.schema.ts
│   ├── products.controller.ts  # HTTP request handlers
│   ├── products.service.ts     # Business logic
│   └── products.module.ts      # Module configuration
├── contact/
│   └── ... (same structure)
└── app.module.ts               # Root module
```

### Design Patterns

**1. Module Pattern (NestJS)**
- Each feature is a self-contained module
- Clear dependencies and boundaries
- Easy to test and maintain

**2. Dependency Injection**
```typescript
@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) 
    private productModel: Model<ProductDocument>
  ) {}
}
```

**3. Repository Pattern**
- Mongoose models abstract database operations
- Services don't know about database implementation
- Easy to swap database if needed

**4. DTO Pattern**
- Input validation at the edge
- Type safety throughout the application
- Automatic transformation and sanitization

**5. Layered Architecture**
```
Controller Layer → Service Layer → Data Access Layer
     ↓                  ↓                  ↓
  HTTP/REST       Business Logic      Database
```

### API Design Principles

**RESTful Design**
- Resource-based URLs
- HTTP verbs for actions
- Consistent response format
- Proper status codes

**Time Complexity Analysis**
- `GET /products`: O(n) - Fetches all products
- `GET /products/:id`: O(1) - Index lookup
- `POST /products`: O(1) - Single insert
- `PATCH /products/:id`: O(1) - Index update
- `DELETE /products/:id`: O(1) - Index delete

## 🗄️ Database Design

### Schema Design

**Product Schema**
```javascript
{
  _id: ObjectId,          // Index: Primary key
  name: String,           // Required
  description: String,    // Required
  category: String,       // Index: For filtering
  image: String,          // Optional
  features: [String],     // Array
  isActive: Boolean,      // Index: For filtering
  order: Number,          // For sorting
  createdAt: Date,        // Auto timestamp
  updatedAt: Date         // Auto timestamp
}
```

**Contact Message Schema**
```javascript
{
  _id: ObjectId,
  name: String,
  email: String,
  phone: String,
  message: String,
  status: Enum,           // pending, contacted, resolved
  createdAt: Date,
  updatedAt: Date
}
```

### Indexing Strategy
- Primary key on `_id` (automatic)
- Compound index on `{ isActive: 1, order: 1 }` for product queries
- Index on `category` for filtering
- Index on `createdAt` for sorting contact messages

**Query Performance**
- Product list query: O(n log n) with sorting
- Product by ID: O(1) with index
- Products by category: O(m) where m = matching documents

## 🐳 Infrastructure Architecture

### Container Strategy

```
┌─────────────────────────────────────┐
│        Docker Network               │
│  ┌──────────┐  ┌──────────┐        │
│  │ Frontend │  │ Backend  │        │
│  │  (Nginx) │→ │ (Node.js)│        │
│  └──────────┘  └────┬─────┘        │
│                     ↓                │
│              ┌──────────┐           │
│              │ MongoDB  │           │
│              └──────────┘           │
└─────────────────────────────────────┘
```

**Benefits**
- Isolated environments
- Easy scaling
- Consistent development/production
- Simple deployment

### Build Strategy

**Frontend**
- Multi-stage Docker build
- Build stage: Compile React app
- Production stage: Serve with Nginx
- Size optimization: ~50MB final image

**Backend**
- Multi-stage Docker build
- Development target: Hot reload with volumes
- Production target: Compiled TypeScript
- Size optimization: ~200MB final image

## 🔒 Security Architecture

### Input Validation
```typescript
// DTO with class-validator
export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  
  @IsEmail()
  email: string;
}
```

### CORS Configuration
- Whitelist specific origins
- Credentials support
- Preflight handling

### Environment Variables
- Secrets in .env files
- Never committed to repository
- Different configs per environment

## 📊 Data Flow

### Creating a Product

```
User Input → Frontend Component
    ↓
Axios POST request
    ↓
NestJS Controller (@Post)
    ↓
Validation Pipe (DTO validation)
    ↓
Products Service (business logic)
    ↓
Mongoose Model (database operation)
    ↓
MongoDB (persists data)
    ↓
Response back through the chain
```

### Fetching Products

```
Component Mount → useEffect
    ↓
Axios GET request
    ↓
NestJS Controller (@Get)
    ↓
Products Service (findAll)
    ↓
Mongoose Query (with filters)
    ↓
MongoDB (returns documents)
    ↓
Transform to JSON
    ↓
Frontend State Update
    ↓
Component Re-render
```

## 🔄 Error Handling

### Frontend
- Try-catch blocks for async operations
- User-friendly error messages
- Loading states during requests

### Backend
- Global exception filter
- HTTP exception classes
- Validation errors automatically formatted

## 📈 Scalability Considerations

### Current State
- Suitable for small to medium traffic
- Single instance deployment
- Shared MongoDB

### Future Improvements
1. **Horizontal Scaling**
   - Multiple backend instances
   - Load balancer
   - Stateless API design allows this

2. **Caching**
   - Redis for frequently accessed data
   - Product catalog caching
   - Session management

3. **Database Optimization**
   - Read replicas for MongoDB
   - Sharding for large datasets
   - Aggregation pipelines for complex queries

4. **CDN**
   - Static assets on CDN
   - Image optimization
   - Global distribution

## 📝 Testing Strategy

### Unit Tests
- Service logic tests
- Component tests
- Isolated from dependencies

### Integration Tests
- API endpoint tests
- Database integration tests
- Mock external services

### E2E Tests
- User flow tests
- Full stack testing
- Critical path coverage

## 🎯 Future Architecture Enhancements

1. **Authentication/Authorization**
   - JWT tokens
   - Role-based access control
   - Admin panel for product management

2. **File Upload**
   - Image upload for products
   - Cloud storage integration (AWS S3)
   - Image optimization pipeline

3. **Real-time Features**
   - WebSocket for live updates
   - Real-time order tracking
   - Chat support

4. **Microservices**
   - Split into smaller services if needed
   - Event-driven architecture
   - Message queue (RabbitMQ/Kafka)

---

**Big O Complexity Summary**
- Product CRUD operations: O(1) average
- Product list with sort: O(n log n)
- Category filter: O(m) where m = matching items
- Component rendering: O(n) for lists
- State updates: O(1)
