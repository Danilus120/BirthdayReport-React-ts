import { useRedux } from '../../context/context'
import AddEventForm from '../Form/AddEventForm'
import './Modal.scss'

export default function ModalAdd() {
    const { isModalAddOpen, toggleModalAdd } = useRedux()

    return (
        <div
            style={{ display: isModalAddOpen ? 'flex' : 'none' }}
            className="modal"
        >
            <div className="modal__box">
                <AddEventForm />
            </div>
            <div className="modal__bg" onClick={toggleModalAdd}></div>
        </div>
    )
}
