import './stylePage.css'
import { useState } from 'react'
import { PortalModals } from './PortalModals.jsx'
import { NewTimer } from  './NewTimer.jsx'
export const AddTimeTracker = ({ addNewArea }) =>{
    const [viewModal, setViewModal] = useState(false) 
    //const clase=viewModal?'InputModal':'InputModal oculto'
    const handleClick = () => {
        setViewModal(prevState => ! prevState)
    }
    return (
        <div className='AddTime'>
            <h1>Esto lo agrege en una nueva rama</h1>
            <span onClick={handleClick}>+</span>
            {viewModal?<PortalModals><NewTimer 
            handleClick={handleClick} 
            addNewArea={addNewArea}
            /></PortalModals>:''}
        </div>
    )
}