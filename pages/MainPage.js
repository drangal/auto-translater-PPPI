{
  /*TODO массив языков тут объявить*/
}

import '../styles/main.css'

export const MainPage = () => (
  <div>
    <div>
      <div>
        <h1>Enter text to translate</h1>
        <p>We'll automatically detect the language.</p>
      </div>
      <div>
        <div>
          <label htmlFor='input'>Enter text to translate</label>
          <textarea id='input' placeholder='Enter your text' />
        </div>
        <div>
          <label htmlFor='output'>Translated text</label>
          <div id='output'>
            <p>Translation will appear here.</p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div>
        <label htmlFor='language'>Translate to</label>
        <div>
          <select defaultValue='es' id='language'>
            {/*TODO добавить массив с якзыками и опшинами, потом замапить просто массивы, для того чтобы не щиткодить*/}
          </select>
          <div>
            <ChevronDownIcon />
          </div>
        </div>
      </div>
    </div>
  </div>
)

const ChevronDownIcon = (props) => (
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
