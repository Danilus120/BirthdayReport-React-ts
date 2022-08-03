/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useEffect, useState } from 'react'
import { BirthdayI, ContextI, ProviderI } from '../context/types'

const ctx = createContext<ContextI>({} as ContextI)

const useRedux = () => useContext(ctx)

let isMounted = false
const Provider = ({ children }: ProviderI) => {
    const [calendarDate, setCalendarDate] = useState(new Date())
    const [birthdays, setBirthdays] = useState([] as BirthdayI[])
    const [calendarMode, setCalendarMode] = useState<'week' | 'month'>('month')

    const [readModalBirthday, setReadModalBirthday] = useState<BirthdayI>(
        {} as BirthdayI
    )

    const [isModalReadOpen, setIsModalReadOpen] = useState(false)
    const [isModalAddOpen, setIsModalAddOpen] = useState(false)

    useEffect(() => {
        const localStorageBirthdays = window.localStorage.getItem('birthdays')

        const parsedLocalStorageBirthdays = localStorageBirthdays
            ? JSON.parse(localStorageBirthdays)
            : []

        setBirthdays(parsedLocalStorageBirthdays)
    }, [])

    useEffect(() => {
        if (!isMounted) {
            isMounted = true
            return
        }

        window.localStorage.setItem('birthdays', JSON.stringify(birthdays))
    }, [birthdays.length])

    const setNewBirthdays = (name: string, dateTimestamp: number) => {
        const twoWeeksTimestamp = 14 * 24 * 60 * 60 * 1000

        const reminderTimestamp = dateTimestamp - twoWeeksTimestamp

        setBirthdays((prev) => [
            ...prev,
            {
                name: name,
                dateTimestamp: dateTimestamp,
                reminderTimestamp: reminderTimestamp,
                // id: uuidv4()
            },
        ])
    }

    const toggleCalendarMode = () => {
        setCalendarMode((prev) => (prev === 'week' ? 'month' : 'week'))
    }

    // handleSetCalendarDate = (newDate: Date)

    const setClickedBirthday = (event: BirthdayI) => {
        const { name, dateTimestamp, reminderTimestamp } = event

        // id
        // birthdays.find()

        setReadModalBirthday({
            name,
            dateTimestamp,
            reminderTimestamp,
        })
    }

    const toggleModalRead = () => {
        setIsModalReadOpen((prev) => !prev)
    }

    const toggleModalAdd = () => {
        setIsModalAddOpen((prev) => !prev)
    }

    const values = {
        calendarDate,
        calendarMode,
        birthdays,
        readModalBirthday,
        isModalReadOpen,
        isModalAddOpen,
        toggleCalendarMode,
        toggleModalRead,
        toggleModalAdd,
        setCalendarDate,
        setNewBirthdays,
        setClickedBirthday,
    }

    return <ctx.Provider value={values}>{children}</ctx.Provider>
}

export { useRedux, Provider }
