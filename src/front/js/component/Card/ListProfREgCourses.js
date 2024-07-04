import React, { useContext } from "react";
import { MultiButton } from '../MultiButton'
import { Link } from 'react-router-dom'
import { Context } from '../../store/appContext'

export const ListProfRegCourses = ({ name, id, last_name }) => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getSingleProfPay()
    }, [])

    console.log(store.singleProfPay)

    return (
        <tr className="table-row">
            <th scope="row">{id}</th>
            <td>{name}</td>
        </tr>
    )
}