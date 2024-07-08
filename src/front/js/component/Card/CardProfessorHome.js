import React from 'react'


//Please take in account that this card only work with Carrousel, due his form, these are Li's

export const CardProfessorHome = ({ number, name, lastName, years_of_experience, specialist_in }) => {
    return (
        <React.Fragment>
            <div className="cardProfessor" style={{ paddingBottom: '20px', width: '300px' }}>
                <div className="card cardProff" style={{ borderRadius: '20px' }}>
                    <img src={`https://xsgames.co/randomusers/assets/avatars/male/${number}.jpg`} className="card-img-top" alt="..." style={{ height: 'auto', padding: '30px', borderRadius: '70%' }} />
                    <div className="card-body">
                        <p className="card-title fs-5 mediumWeight">{name} {lastName}</p>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item text-secondary" style={{ fontSize: '15px' }}>Años de experiencia: {years_of_experience}</li>
                            <li class="list-group-item text-secondary" style={{ fontSize: '15px' }}>Especialista en: {specialist_in}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

