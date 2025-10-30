# Don Piponne - Frontend

Modern React application with Material-UI for the Don Piponne catering business.

## 🎨 Features

- **Responsive Design**: Mobile-first approach with Material-UI
- **Modern UI**: Clean and intuitive interface
- **Fast Performance**: Optimized React components
- **SEO Friendly**: Proper meta tags and semantic HTML

## 🛠️ Tech Stack

- React 18.2
- Material-UI 5.14
- React Router DOM 6.18
- Axios for API calls
- Emotion for styling

## 📦 Project Structure

```
src/
├── components/         # Reusable components
│   ├── Navbar.js      # Navigation bar
│   ├── Footer.js      # Footer component
│   ├── ProductCard.js # Product card component
│   └── FeatureCard.js # Feature card component
├── pages/             # Page components
│   ├── Home.js        # Homepage
│   ├── Products.js    # Products listing
│   ├── Shop.js        # Shop page
│   ├── Viandas.js     # Corporate meals
│   ├── Company.js     # About us
│   ├── Contact.js     # Contact form
│   └── ProductDetail.js # Product details
├── theme.js           # MUI theme configuration
├── App.js             # Main app component
└── index.js           # Entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
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

3. Start development server:
   ```bash
   npm start
   ```

4. Open http://localhost:3000

## 🏗️ Building

```bash
npm run build
```

The build folder will contain optimized production files.

## 🎨 Theme Customization

Edit `src/theme.js` to customize the Material-UI theme:
- Primary color: Red (#d32f2f)
- Secondary color: Amber (#ffa000)
- Typography: Roboto font family

## 📱 Pages

- **/** - Homepage with hero and featured products
- **/productos** - All products catalog
- **/shop** - E-commerce (coming soon)
- **/viandas** - Corporate meal services
- **/empresa** - Company information
- **/contacto** - Contact form
- **/producto/:id/:name** - Product details

## 🔗 API Integration

The app connects to the backend API at `REACT_APP_API_URL` (default: http://localhost:3001/api)

## 📝 Available Scripts

- `npm start` - Run development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## 🐳 Docker

Build Docker image:
```bash
docker build -t piponne-app .
```

Run container:
```bash
docker run -p 3000:80 piponne-app
```

## 📄 License

MIT
