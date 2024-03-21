import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="grid md:grid-cols-2 gap-4 p-6 items-start">
      <div className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Translation</h1>
          <p className="text-gray-500 dark:text-gray-400">Enter the text you want to translate.</p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium leading-5 transition peer" htmlFor="text">
              Enter text
            </label>
            <div className="w-full peer">
              <Input className="w-full" id="text" placeholder="Enter text" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium leading-5 transition peer" htmlFor="translation">
              Translation
            </label>
            <div className="w-full peer">
              <Textarea className="w-full resize-none" disabled id="translation" placeholder="Translation" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium leading-5 transition peer" htmlFor="language">
              Target language
            </label>
            <div className="w-full peer">
              <Select className="min-w-[200px]" id="language">
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
                <option value="it">Italian</option>
                <option value="ja">Japanese</option>
                <option value="ko">Korean</option>
                <option value="zh">Chinese (Simplified)</option>
                <option value="ru">Russian</option>
                <option value="ar">Arabic</option>
              </Select>
            </div>
          </div>
          <Button className="w-full md:w-auto" variant="outline">
            Detect language
          </Button>
        </div>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Translate</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Click the button to translate the text into the selected language.
          </p>
        </div>
        <Button className="w-full md:w-auto">Translate</Button>
      </div>
    </div>
  )
}

