import CalendarButtons from './CalendarButtons/CalendarButtons'
import CalendarHeader from './CalendarHeader/CalendarHeader'
import CalendarTable from './CalendarTable/CalendarTable'

import './Calendar.scss'
import ModalAdd from '../Modal/ModalAdd'
import ModalButton from '../Modal/ModalButton'
import ModalRead from '../Modal/ModalRead'

export default function Calendar() {
    return (
        <>
            <div className="calendar">
                <CalendarHeader />
                <CalendarButtons />
                <CalendarTable />
                <div className="modalWrapper">
                    <ModalButton buttonName="Add Event" type="add" />
                    <ModalAdd />
                    <ModalRead />
                    {/* {openModalType === 'add' ?
                        <Modal>
                            <Add />
                        </Modal>
                    : {openModalType === 'read' ? <Modal><Read /></Modal> 
                    : null} */}
                </div>
            </div>
        </>
    )
}
