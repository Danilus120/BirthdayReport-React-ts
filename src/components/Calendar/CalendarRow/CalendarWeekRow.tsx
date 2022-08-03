import CalendarWeekData from './CalendarWeekData'

interface CalendarWeekRowI {
    week: number[]
}

export default function CalendarWeekRow({ week }: CalendarWeekRowI) {
    return (
        <tr>
            {week.map((dayTimestamp, idx) => (
                <CalendarWeekData key={idx} dayTimestamp={dayTimestamp} />
            ))}
        </tr>
    )
}
