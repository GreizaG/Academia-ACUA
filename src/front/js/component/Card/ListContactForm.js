import React, { useContext, useEffect } from "react";
import { MultiButton } from '../MultiButton'
import { Link } from 'react-router-dom'
import { Context } from '../../store/appContext'

export const ListContactForm = ({ user_name, id, email, message, }) => {
    const { store, actions } = useContext(Context);

    return (
        <tr className="table-row">
            <th className="text-center" scope="row">{id}</th>
            <td className="text-center">{user_name}</td>
            <td className="text-center">{email}</td>
            <td className="text-center">{message}</td>
        </tr>
    )
}