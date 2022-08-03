import { useRedux } from '../../context/context'

import ModalButton from './ModalButton'
import './Modal.scss'

export default function ModalRead() {
    const { isModalReadOpen, readModalBirthday, toggleModalRead } = useRedux()
    const { name, dateTimestamp, reminderTimestamp } = readModalBirthday

    return (
        <div
            style={{ display: isModalReadOpen ? 'flex' : 'none' }}
            className="modal"
        >
            <div className="modal__box">
                <p>Name: {name}</p>
                <p>Date: {new Date(dateTimestamp).toLocaleDateString('pl')}</p>
                <p>
                    Reminder:{' '}
                    {new Date(reminderTimestamp).toLocaleDateString('pl')}
                </p>
                <ModalButton buttonName="Close" type="read" />
            </div>
            <div className="modal__bg" onClick={toggleModalRead}></div>
        </div>
    )
}
