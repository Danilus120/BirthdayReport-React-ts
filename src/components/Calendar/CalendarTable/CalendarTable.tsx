import CalendarRow from '../CalendarRow/CalendarRow'

export default function CalendarTable() {
    return (
        <table className="calendar__table">
            <thead>
                <tr>
                    <th>Mon</th>
                    <th>Tue</th>
                    <th>Wed</th>
                    <th>Thu</th>
                    <th>Fri</th>
                    <th>Sat</th>
                    <th>Sun</th>
                </tr>
            </thead>
            <tbody>
                <CalendarRow />
            </tbody>
        </table>
    )
}
