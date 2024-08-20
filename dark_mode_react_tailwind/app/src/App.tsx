import './index.css'
import './App.css';
import { ThemeToggle } from './components/ThemeToggle';

export function App() {
  return (
    <div className="bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text min-h-screen flex items-center justify-center gap-4">
      <ThemeToggle />
      
      <h1 className="text-3xl">Hello, Dark Mode!</h1>
    </div>
  );
};
