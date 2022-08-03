import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useRedux } from '../../context/context'
import ModalButton from '../Modal/ModalButton'

import './AddEventForm.scss'

export default function SignupForm() {
    const { setNewBirthdays, toggleModalAdd } = useRedux()

    const today = new Date()
    today.setHours(0, 0, 0, 0)

    const formik = useFormik({
        initialValues: {
            name: '',
            date: '',
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(3, 'Must be at least 3 characters')
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            date: Yup.date()
                .min(today, 'Date cannot be in past')
                .required('Required'),
        }),
        onSubmit: (values, { resetForm }) => {
            const { name, date } = values
            const dateTimestamp = new Date(date).getTime()

            setNewBirthdays(name, dateTimestamp)
            resetForm()
            toggleModalAdd()
        },
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="input">
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    type="name"
                    {...formik.getFieldProps('name')}
                />
                {formik.touched.name && formik.errors.name ? (
                    <div className="input__error">{formik.errors.name}</div>
                ) : null}
            </div>

            <div className="input">
                <label htmlFor="date">Date Of Birthday</label>
                <input
                    id="date"
                    type="date"
                    {...formik.getFieldProps('date')}
                />
                {formik.touched.date && formik.errors.date ? (
                    <div className="input__error">{formik.errors.date}</div>
                ) : null}
            </div>
            <div className="buttons">
                <button
                    className="buttons__clear"
                    type="button"
                    onClick={() => formik.resetForm()}
                >
                    Clear
                </button>
                <ModalButton buttonName="Close" type="add" />
                <button className="buttons__submit" type="submit">
                    Submit
                </button>
            </div>
        </form>
    )
}
