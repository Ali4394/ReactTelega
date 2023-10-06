import './SpeedDialButton.css'
import React, { useState } from 'react'
import { SpeedDial } from 'primereact/speeddial';

        

export const SpeedDialButton = ({products}) => {
  const [visible, setVisible] = useState(false);

  const actionItems = [
    { icon: 'pi pi-pencil', command: () => { } },
    { icon: 'pi pi-cart-plus', command: () => { } },
    { icon: 'pi pi-trash', command: () => { } }
  ];

const addHelicopter =()=>{
  products.push(data)
}
const deletehelcopter = (id) =>{
  products = products.filter(item=()=>{})
}


const pdatehelcopter = (id) =>{
  products = products.filter(item=()=>{
    if(item.id === id){
      return data
    }
  })
}

  return (
    <div>
      <SpeedDial model={actionItems} visible={visible} onShow={() => setVisible(true)} onHide={() => setVisible(false)} className={'speedButton'} />
    </div>
  )
}