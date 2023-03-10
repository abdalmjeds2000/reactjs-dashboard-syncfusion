import React from 'react';
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';
import { Header } from '../components';
import { useRef } from 'react';



const ColorPicker = () => {
  const previewRef = useRef();

  const change = (args) => {
    previewRef.current.style.backgroundColor = args.value;
  }
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="App" title="ColorPicker" />


      <div className='text-center'>
        <div id='preview' ref={previewRef} />
        <div className='flex justify-center items-center gap-20  flex-wrap'>
          <div>
            <p className='text-2xl font-semibold mt-2 mb-4'>Inline Pallete</p>
            <ColorPickerComponent 
              id="inline-pallete"
              mode='Palette'
              inline
              modeSwitcher={false}
              showButtons={false}
              change={change}
            />
          </div>
          <div>
            <p className='text-2xl font-semibold mt-2 mb-4'>Inline Picker</p>
            <ColorPickerComponent 
              id="inline-pallete"
              mode='Picker'
              inline
              modeSwitcher={false}
              showButtons={false}
              change={change}
            />
          </div>

        </div>
      </div>
    </div>
  )
}

export default ColorPicker