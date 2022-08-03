import Calendar from './components/Calendar/Calendar'
import { Provider } from './context/context'

export default function BirthdayReport() {
    return (
        <>
            <Provider>
                <Calendar />
            </Provider>
        </>
    )
}
