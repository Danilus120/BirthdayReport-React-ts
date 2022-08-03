import CalendarData from './CalendarMonthData'

interface CalendarMonthRowI {
    week: number[]
}

export default function CalendarMonthRow({ week }: CalendarMonthRowI) {
    return (
        <tr>
            {week.map((dayTimestamp, idx) => {
                return <CalendarData key={idx} dayTimestamp={dayTimestamp} />
            })}
        </tr>
    )
}
