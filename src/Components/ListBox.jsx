import { useState } from 'react'
import { Listbox } from '@headlessui/react'

function ListBox() {
  
const options = [
  { id: 1, name: 'Scegli un opzione' },
  { id: 2, name: 'Vedi la lista dei messaggi' },
  { id: 3, name: 'Vota il tuo lattugo solo ogni 24 ore '},
]
  const [selectedOption, setSelectedOption] = useState(options[0])

  return (
    <div className="mt-4 w-full relative">
      <Listbox value={selectedOption} onChange={setSelectedOption} >
      <Listbox.Button  className="cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">{selectedOption.name}</Listbox.Button>
      <Listbox.Options>
        {options.map((option) => (
          <Listbox.Option
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