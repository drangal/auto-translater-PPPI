/**
 * MainPage - react компонент, который представляет собой основную страницу переводчика. Состоит из поля ввода текста, поля вывода перевода и поля выбора языка, на который необходимо перевести исходный текст.
 *
 * @param {Object} props
 * @param {string} props.languageList - Список языков
 */
function MainPage(props) {
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
              <option value='af'>Afrikaans</option>
              <option value='sq'>Albanian</option>
              <option value='am'>Amharic</option>
              <option value='ar'>Arabic</option>
              <option value='hy'>Armenian</option>
              <option value='az'>Azerbaijani</option>
              <option value='eu'>Basque</option>
              <option value='be'>Belarusian</option>
              <option value='bn'>Bengali</option>
              <option value='bs'>Bosnian</option>
              <option value='bg'>Bulgarian</option>
              <option value='my'>Burmese</option>
              <option value='ca'>Catalan</option>
              <option value='ceb'>Cebuano</option>
              <option value='ny'>Chichewa</option>
              <option value='zh'>Chinese (Simplified)</option>
              <option value='zh-TW'>Chinese (Traditional)</option>
              <option value='co'>Corsican</option>
              <option value='hr'>Croatian</option>
              <option value='cs'>Czech</option>
              <option value='da'>Danish</option>
              <option value='nl'>Dutch</option>
              <option value='en'>English</option>
              <option value='eo'>Esperanto</option>
              <option value='et'>Estonian</option>
              <option value='tl'>Filipino</option>
              <option value='fi'>Finnish</option>
              <option value='fr'>French</option>
              <option value='fy'>Frisian</option>
              <option value='gl'>Galician</option>
              <option value='ka'>Georgian</option>
              <option value='de'>German</option>
              <option value='el'>Greek</option>
              <option value='gu'>Gujarati</option>
              <option value='ht'>Haitian Creole</option>
              <option value='ha'>Hausa</option>
              <option value='haw'>Hawaiian</option>
              <option value='iw'>Hebrew</option>
              <option value='hi'>Hindi</option>
              <option value='hmn'>Hmong</option>
              <option value='hu'>Hungarian</option>
              <option value='is'>Icelandic</option>
              <option value='ig'>Igbo</option>
              <option value='id'>Indonesian</option>
              <option value='ga'>Irish</option>
              <option value='it'>Italian</option>
              <option value='ja'>Japanese</option>
              <option value='jw'>Javanese</option>
              <option value='kn'>Kannada</option>
              <option value='kk'>Kazakh</option>
              <option value='km'>Khmer</option>
              <option value='rw'>Kinyarwanda</option>
              <option value='ko'>Korean</option>
              <option value='ku'>Kurdish (Kurmanji)</option>
              <option value='ky'>Kyrgyz</option>
              <option value='lo'>Lao</option>
              <option value='la'>Latin</option>
              <option value='lv'>Latvian</option>
              <option value='lt'>Lithuanian</option>
              <option value='lb'>Luxembourgish</option>
              <option value='mk'>Macedonian</option>
              <option value='mg'>Malagasy</option>
              <option value='ms'>Malay</option>
              <option value='ml'>Malayalam</option>
              <option value='mt'>Maltese</option>
              <option value='mi'>Maori</option>
              <option value='mr'>Marathi</option>
              <option value='mn'>Mongolian</option>
              <option value='my'>Myanmar (Burmese)</option>
              <option value='ne'>Nepali</option>
              <option value='no'>Norwegian</option>
              <option value='or'>Odia (Oriya)</option>
              <option value='ps'>Pashto</option>
              <option value='fa'>Persian</option>
              <option value='pl'>Polish</option>
              <option value='pt'>Portuguese</option>
              <option value='pa'>Punjabi</option>
              <option value='ro'>Romanian</option>
              <option value='ru'>Russian</option>
              <option value='sm'>Samoan</option>
              <option value='gd'>Scots Gaelic</option>
              <option value='sr'>Serbian</option>
              <option value='st'>Sesotho</option>
              <option value='sn'>Shona</option>
              <option value='sd'>Sindhi</option>
              <option value='si'>Sinhala</option>
              <option value='sk'>Slovak</option>
              <option value='sl'>Slovenian</option>
              <option value='so'>Somali</option>
              <option value='es'>Spanish</option>
              <option value='su'>Sundanese</option>
              <option value='sw'>Swahili</option>
              <option value='sv'>Swedish</option>
              <option value='tg'>Tajik</option>
              <option value='ta'>Tamil</option>
              <option value='te'>Telugu</option>
              <option value='th'>Thai</option>
              <option value='tr'>Turkish</option>
              <option value='uk'>Ukrainian</option>
              <option value='ur'>Urdu</option>
              <option value='ug'>Uyghur</option>
              <option value='uz'>Uzbek</option>
              <option value='vi'>Vietnamese</option>
              <option value='cy'>Welsh</option>
              <option value='xh'>Xhosa</option>
              <option value='yi'>Yiddish</option>
              <option value='yo'>Yoruba</option>
              <option value='zu'>Zulu</option>
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

/**
 * ChevronDownIcon - react компонент, который представляет иконку стрелочки смотрящей вниз (применяется для выподающего списка языков).
 *
 * @param {Object} props
 * @param {string} props.className - Список стилей Tailwind, если они будут переданы
 */
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

export default MainPage
