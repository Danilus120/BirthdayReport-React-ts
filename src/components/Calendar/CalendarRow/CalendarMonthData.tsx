import { isSameMonth, isSameDay } from 'date-fns'
import { useRedux } from '../../../context/context'
import { BirthdayI } from '../../../context/types'

interface CalendarMonthDataI {
    dayTimestamp: number
}

export default function CalendarMonthData({
    dayTimestamp,
}: CalendarMonthDataI) {
    const { calendarDate, birthdays, setClickedBirthday, toggleModalRead } =
        useRedux()
    const dayDate = new Date(dayTimestamp)
    const day = dayDate.getDate()

    let typeOfEvent = ''

    const eventToday =
        birthdays.length > 0 &&
        birthdays.find((birthday) =>
            isSameDay(birthday.dateTimestamp, dayTimestamp)
        )

    const eventReminder =
        birthdays.length > 0 &&
        birthdays.find((birthday) =>
            isSameDay(birthday.reminderTimestamp, dayTimestamp)
        )

    if (eventToday) {
        typeOfEvent = 'event'
    } else if (eventReminder) {
        typeOfEvent = 'reminder'
    }

    const setBirthday = (event: BirthdayI) => {
        setClickedBirthday(event)
        toggleModalRead()
    }

    // Jak zrobić by komponent renderował się ponownie po update setClickedBirthday?
    const handleClick = () => {
        if (eventToday) {
            setBirthday(eventToday)
        } else if (eventReminder) {
            setBirthday(eventReminder)
        }
    }

    let classes =
        (!isSameMonth(calendarDate, dayDate) ? `disabled ` : ``) +
        `${typeOfEvent}`

    return (
        <td className={classes} onClick={handleClick}>
            {day}
        </td>
    )
}
