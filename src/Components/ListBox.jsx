import { useState } from 'react'
import { Listbox } from '@headlessui/react'
import Style from './CompoentesStyles.module.css'

function ListBox() {
const options = [
  { id: 1, name: 'Scegli un opzione' },
  { id: 2, name: 'Vedi la lista dei messaggi' },
  { id: 3, name: 'Vota il tuo lattugo solo ogni 24 ore '},
]
  const [selectedOption, setSelectedOption] = useState(options[0])

  return (
    <div className="mt-4 w-full sm:w-72">
      <Listbox value={selectedOption} onChange={setSelectedOption} >
      <Listbox.Button  className={Style.ListBox}>{selectedOption.name}</Listbox.Button>
      <Listbox.Options className={Style.ListBox}>
        {options.map((option) => (
          <Listbox.Option
          className={({ active }) =>
              `${Style.ListBoxOption} ${
                active? Style.ListBoxOptionActive : ''
              }`}
            key={option.id}
            value={option}>
            {option.name}
            
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  </div>
    
  )
}

export default ListBox