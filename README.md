# 📊 Modern Dashboard

A modern, responsive dashboard built with Next.js 15, featuring data visualization, user management, and export capabilities.

![Next.js](https://img.shields.io/badge/Next.js-15.5.6-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=flat-square&logo=tailwind-css)

## ✨ Features

- 🔐 **Authentication System** - Secure login/signup with NextAuth.js
- 📊 **Data Visualization** - Interactive charts and graphs using Recharts
- 📋 **Data Management** - Sortable, filterable data tables with pagination
- 📤 **Export Functionality** - Export data to PDF and Excel formats
- 🎨 **Modern UI** - Beautiful interface built with Radix UI and Tailwind CSS
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- 🌙 **Dark/Light Mode** - Theme switching with next-themes
- 🐳 **Docker Support** - Containerized deployment ready

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/dashboard.git
   cd dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Configure your environment variables in `.env.local`

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives

### State Management
- **Redux Toolkit** - Predictable state container
- **React Redux** - React bindings for Redux

### Data & Charts
- **TanStack Table** - Headless table library
- **Recharts** - Composable charting library
- **jsPDF** - PDF generation
- **XLSX** - Excel file generation

### Authentication
- **NextAuth.js** - Authentication for Next.js

### Development Tools
- **ESLint** - Code linting
- **Turbopack** - Fast bundler for development

## 📁 Project Structure

```
dashboard/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── login/          # Authentication pages
│   │   ├── signup/
│   │   └── page.tsx        # Main dashboard page
│   ├── components/         # React components
│   │   ├── ui/            # Reusable UI components
│   │   ├── chart/         # Chart components
│   │   └── data-table.tsx # Data table with export
│   ├── store/             # Redux store configuration
│   ├── utils/             # Utility functions
│   └── lib/               # Library configurations
├── public/                # Static assets
├── Dockerfile            # Docker configuration
└── package.json
```

## 🎯 Key Components

### Data Table
- **Sorting** - Click column headers to sort data
- **Filtering** - Search functionality across all columns
- **Pagination** - Navigate through large datasets
- **Export** - Download data as PDF or Excel files

### Charts
- **Line Charts** - Interactive data visualization
- **Responsive** - Adapts to different screen sizes

### Authentication
- **Secure Login** - Protected routes and sessions
- **User Management** - User registration and profile management

## 🐳 Docker Deployment

### Build and Run with Docker

```bash
# Build the Docker image
npm run docker:build

# Run the container
npm run docker:run
```

The application will be available at `http://localhost:3000`

### Docker Compose (Optional)

```yaml
version: '3.8'
services:
  dashboard:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
```

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run docker:build` - Build Docker image
- `npm run docker:run` - Run Docker container

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file with the following variables:

```env
# NextAuth.js Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key

# Database (if using)
DATABASE_URL=your-database-url

# API Keys (if needed)
API_KEY=your-api-key
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Radix UI](https://www.radix-ui.com/) - Accessible component primitives
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Recharts](https://recharts.org/) - Charting library
- [TanStack Table](https://tanstack.com/table) - Table library

## 📞 Support

If you have any questions or need help, please:

1. Check the [Issues](https://github.com/yourusername/dashboard/issues) page
2. Create a new issue if your problem isn't already reported
3. Contact the maintainers

---

⭐ **Star this repository if you found it helpful!**