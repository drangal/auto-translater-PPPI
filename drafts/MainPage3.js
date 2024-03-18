import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white border-b border-gray-200 dark:border-gray-700">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <nav className="hidden md:flex gap-4 h-14 items-center text-sm w-[300px]">
              <Link className="font-medium text-gray-900 dark:text-gray-100" href="#">
                Home
              </Link>
              <Link className="text-gray-500 hover:text-gray-900 dark:text-gray-400 hover:dark:text-gray-100" href="#">
                Profile
              </Link>
              <Link className="text-gray-500 hover:text-gray-900 dark:text-gray-400 hover:dark:text-gray-100" href="#">
                Projects
              </Link>
            </nav>
            <Link className="flex items-center gap-2 text-gray-900 dark:text-gray-100" href="#">
              <FlagIcon className="h-6 w-6" />
              <span className="font-semibold">shadcn</span>
            </Link>
            <div className="flex items-center gap-4">
              <Button size="sm" variant="outline">
                Upgrade
              </Button>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1 bg-gray-100 p-4 sm:p-6 lg:p-8 gap-4">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label className="text-lg" htmlFor="text">
                Enter the text you want to translate
              </Label>
              <Textarea id="text" placeholder="Enter your text here." rows={4} />
            </div>
            <div className="flex flex-col gap-2">
              <Button type="submit">Translate</Button>
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-lg" htmlFor="translation">
                Translated text
              </Label>
              <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-4">
                <p id="translation">Hola mundo</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t border-gray-200 dark:border-gray-700">
        <div className="px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            <nav className="flex gap-4 items-center text-sm">
              <Link className="text-gray-500 hover:text-gray-900 dark:text-gray-400 hover:dark:text-gray-100" href="#">
                Terms of Service
              </Link>
              <Link className="text-gray-500 hover:text-gray-900 dark:text-gray-400 hover:dark:text-gray-100" href="#">
                Privacy Policy
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FlagIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  )
}
