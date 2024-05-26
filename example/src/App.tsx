import { Moon, Sun } from 'lucide-react'
import { useTheme } from './components/theme-provider'
import { Button } from '@ui-kit';

function App() {
  const { theme, setTheme } = useTheme()

  return (
    <main className="flex flex-col gap-10 items-center py-5 dark:bg-background">
      <div className="flex w-full px-8 fixed">
        <button
          className="mb-2 text-foreground ml-auto"
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          {theme === 'light' ? <Sun /> : <Moon />}
        </button>
      </div>

      <div className="mt-10"></div>
      <Button>Click me</Button>
    </main>
  )
}

export default App
