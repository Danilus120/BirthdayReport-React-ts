import { useRedux } from '../../../context/context'
import { utilsHandlersI } from '../../../context/types'
import { capitalizeFirstLetter, utilsHandlers } from '../../../context/utils'

export default function CalendarButtons() {
    const { calendarMode, calendarDate, setCalendarDate, toggleCalendarMode } =
        useRedux()
    const capitalizedCalendarMode = capitalizeFirstLetter(calendarMode)

    const handleDate = (type: string) => {
        // setCalendarDate calendarDate prevMonth/nextMonth

        // handleCalendarDate("nextMonth")

        setCalendarDate(
            utilsHandlers[type as keyof utilsHandlersI](calendarDate)
        )
    }

    return (
        <>
            <div className="calendar__buttons">
                <button
                    onClick={() => handleDate(`prev${capitalizedCalendarMode}`)}
                >
                    Prev {capitalizedCalendarMode}
                </button>
                <button onClick={toggleCalendarMode}>
                    {capitalizedCalendarMode}
                </button>
                <button
                    onClick={() => handleDate(`next${capitalizedCalendarMode}`)}
                >
                    Next {capitalizedCalendarMode}
                </button>
            </div>
        </>
    )
}
