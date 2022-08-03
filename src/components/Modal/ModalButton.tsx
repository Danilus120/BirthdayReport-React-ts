import { useRedux } from '../../context/context'

interface ModalButtonI {
    buttonName: string
    type: 'read' | 'add'
}

export default function ModalButton({ buttonName, type }: ModalButtonI) {
    const { toggleModalAdd, toggleModalRead } = useRedux()

    const handleClick = () => {
        return type === 'add' ? toggleModalAdd() : toggleModalRead()
    }

    return (
        <div className="modal__button">
            <button type="button" onClick={handleClick}>
                {buttonName}
            </button>
        </div>
    )
}
