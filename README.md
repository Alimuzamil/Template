# Modern React Template

A production-ready React template built with modern technologies and industry best practices.

![Modern Sign-In Form](https://github.com/user-attachments/assets/3ea93df7-8717-4558-a2f2-183658e722b7)

## 🚀 Tech Stack

### Core Technologies

- **React 18.3+** - Latest React with TypeScript support
- **TypeScript** - Full type safety and better developer experience
- **Vite** - Lightning-fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development

### UI & Components

- **Custom UI Components** - Built with class-variance-authority for flexible styling
- **Lucide React** - Beautiful, customizable icons
- **Framer Motion** - Smooth animations and transitions
- **Responsive Design** - Mobile-first approach with Tailwind CSS

### Code Quality & Development

- **ESLint** - Code linting with React and TypeScript rules
- **Prettier** - Consistent code formatting
- **Husky** - Git hooks for code quality enforcement
- **lint-staged** - Run linters on staged files only

### Form Handling & Validation

- **React Hook Form** - Performant forms with easy validation
- **Zod** - TypeScript-first schema validation

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/           # Reusable UI components (Button, Input, Card, etc.)
│   ├── forms/        # Form components
│   └── layout/       # Layout components
├── pages/            # Page components
│   └── auth/         # Authentication pages
├── hooks/            # Custom React hooks
├── utils/            # Utility functions
├── types/            # TypeScript type definitions
├── styles/           # Global styles and Tailwind config
└── assets/           # Images, icons, etc.
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Alimuzamil/Template.git
cd Template
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors automatically
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## 🎨 Features

### Current Implementation

- ✅ Modern TypeScript + React 18 setup
- ✅ Tailwind CSS styling system
- ✅ Custom UI component library
- ✅ Authentication form layouts
- ✅ Code quality tools (ESLint, Prettier, Husky)
- ✅ Path aliases (@/\* imports)
- ✅ Responsive design patterns

### Planned Features

- 🔄 Dark/light mode toggle
- 🔄 Navigation system (header, sidebar, breadcrumbs)
- 🔄 Form validation with React Hook Form + Zod
- 🔄 Loading states and skeleton screens
- 🔄 Error boundaries and error handling
- 🔄 Toast notifications system
- 🔄 Modal/Dialog components
- 🔄 Data tables with sorting, filtering, pagination
- 🔄 State management with Zustand
- 🔄 API integration with React Query
- 🔄 Testing setup with Vitest
- 🔄 Storybook component documentation

## 🏗️ Architecture Decisions

### Why This Stack?

- **TypeScript**: Provides compile-time type checking and better IDE support
- **Vite**: Significantly faster than webpack for development and building
- **Tailwind CSS**: Utility-first approach allows for rapid UI development
- **Component-driven**: Modular, reusable components following modern React patterns

### Path Aliases

The template uses path aliases for cleaner imports:

```typescript
import { Button } from '@/components/ui/Button'
import { cn } from '@/utils/cn'
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Run the linters: `npm run lint` and `npm run format`
5. Commit your changes: `git commit -m 'Add amazing feature'`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Shadcn/ui](https://ui.shadcn.com/) for component inspiration
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Lucide](https://lucide.dev/) for the beautiful icons
