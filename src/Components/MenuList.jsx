import React, { useState } from 'react'
import { Menu } from '@headlessui/react'
import { render } from 'react-dom'
import List from './List'
import Rate from './Rate'


function MenuList() {
  const [selected, setSelected] = useState(0)

  return (
    <>
    <Menu as="div" className="text-center mt-2">
      <Menu.Button className="bg-gray-200 text-black px-4 py-2 rounded-md">Scegli un opzione</Menu.Button>

      <Menu.Items className="rounded-md m-2 ring-1 ring-gray-200">
      <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } flex w-full items-center rounded-md px-2 py-2 text-md`}
                    onClick={() => {
                      setSelected(1)
                    }}
                    >
                      Vedi la lista dei complaint

                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } flex w-full items-center rounded-md px-2 py-2 text-md`}
                    onClick={() => {
                      setSelected(2)
                    }}
                  >
                    Vota il lattugo (Ogni 24h)
                  </button>
                )}
              </Menu.Item>  
      </Menu.Items>
    </Menu>
    {selected === 1 && <List/>}
    {selected === 2 && <Rate/>}


    </>

  )
}

export default MenuList