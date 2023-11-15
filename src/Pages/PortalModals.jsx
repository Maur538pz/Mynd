import { createPortal } from 'react-dom'
import './stylePage.css'

export const PortalModals = ({ children }) => {
    return createPortal(<div className='modal'>{children}</div>,document.getElementById('modals'))
}