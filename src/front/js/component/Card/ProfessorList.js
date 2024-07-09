import React, { useContext } from "react";
import { MultiButton } from '../MultiButton'
import { Link } from 'react-router-dom'
import { Context } from "../../store/appContext";

export const ProfessorList = ({ name, id, last_name, cardID_type, number_cardID, phone_number, province, canton, district }) => {
    const { store, actions } = useContext(Context);

    return (
        <tr className="table-row">
            <th scope="row">{id}</th>
            <td>{name}</td>
            <td>{last_name}</td>
            <td>{cardID_type}</td>
            <td>{number_cardID}</td>
            <td>{phone_number}</td>
            <td>{province}</td>
            <td>{canton}</td>
            <td>{district}</td>
        </tr>
    )
}



