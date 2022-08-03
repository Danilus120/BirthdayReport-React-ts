import { isSameDay } from 'date-fns'
import { useRedux } from '../../../context/context'
import { BirthdayI } from '../../../context/types'

interface CalendarWeekDataI {
    dayTimestamp: number
}

export default function CalendarWeekData({ dayTimestamp }: CalendarWeekDataI) {
    const { birthdays, setClickedBirthday, toggleModalRead } = useRedux()
    const day = new Date(dayTimestamp).getDate()

    //
    // getActualDateType 'event' | 'reminder' | 'none'
    // getActualDateType(birthdays, birthday, dayTimestamp) - typeOfEvent, eventToday, eventReminder
    //
    let typeOfEvent = ''

    // if (eventType === 'none')
    // birthdays.length > 0 &&
    //     birthdays.find((birthday) => isSameDay(birthday[`${eventType}Date`], dayTimestamp))

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

    return (
        <td className={typeOfEvent} onClick={handleClick}>
            {day}
        </td>
    )
}
