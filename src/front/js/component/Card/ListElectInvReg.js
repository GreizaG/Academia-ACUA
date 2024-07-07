import React, { useContext, useEffect } from "react";
import { MultiButton } from '../MultiButton'
import { Link } from 'react-router-dom'
import { Context } from '../../store/appContext'

export const ListElectInvReg = ({ student, name, cardID_type, number_cardID, email, phone_number, province, canton, district, id }) => {
    const { store, actions } = useContext(Context);

    return (
        <tr className="table-row">
            <th className="text-center" scope="row">{id}</th>
            <td className="text-center">{student}</td>
            <td className="text-center">{name}</td>
            <td className="text-center">{cardID_type}</td>
            <td className="text-center">{number_cardID}</td>
            <td className="text-center">{email}</td>
            <td className="text-center">{phone_number}</td>
            <td className="text-center">{province}</td>
            <td className="text-center">{canton}</td>
            <td className="text-center">{district}</td>
        </tr>
    )
}