{
  /*TODO массив языков тут объявить*/
}

export default function MainPage() {
  return (
    <div className='grid gap-8 lg:gap-12'>
      <div className='space-y-4'>
        <div className='space-y-2'>
          <h1 className='text-3xl font-bold'>Enter text to translate</h1>
          <p className='text-gray-500 dark:text-gray-400'>
            We'll automatically detect the language.
          </p>
        </div>
        <div className='space-y-2'>
          <div className='space-y-2'>
            <label className='sr-only' htmlFor='input'>
              Enter text to translate
            </label>
            <textarea
              className='w-full min-h-[200px] max-h-[300px] border-2 border-gray-200 rounded-lg resize-none focus:outline-none transition-colors dark:border-gray-800'
              id='input'
              placeholder='Enter your text'
            />
          </div>
          <div className='space-y-2'>
            <label className='sr-only' htmlFor='output'>
              Translated text
            </label>
            <div
              className='border-2 border-gray-200 rounded-lg p-4 min-h-[200px] grid gap-4 transition-colors dark:border-gray-800'
              id='output'
            >
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                Translation will appear here.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='space-y-2'>
        <div className='space-y-2'>
          <label
            className='text-sm font-medium leading-none'
            htmlFor='language'
          >
            Translate to
          </label>
          <div className='w-[200px] rounded-md border border-gray-200 grid transition-colors dark:border-gray-800'>
            <select
              className='w-full appearance-none p-3'
              defaultValue='es'
              id='language'
            >
              {/*TODO добавить массив с якзыками и опшинами, потом замапить просто массивы, для того чтобы не щиткодить*/}
            </select>
            <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-3'>
              <ChevronDownIcon className='h-5 w-5' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ChevronDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='m6 9 6 6 6-6' />
    </svg>
  )
}
