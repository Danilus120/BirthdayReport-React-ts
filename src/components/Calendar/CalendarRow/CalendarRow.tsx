import { useRedux } from '../../../context/context'
import CalendarMonthRow from './CalendarMonthRow'
import CalendarWeekRow from './CalendarWeekRow'
import { createMonthDays, createWeekDays } from '../../../context/utils'

export default function CalendarRow() {
    const { calendarDate, calendarMode } = useRedux()

    return (
        <>
            {calendarMode === 'month' ? (
                createMonthDays(calendarDate).map((week, idx) => {
                    return <CalendarMonthRow key={idx} week={week} />
                })
            ) : (
                <CalendarWeekRow week={createWeekDays(calendarDate)} />
            )}
        </>
    )
}
