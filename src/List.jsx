import React from 'react'

export default function({people}) {
    return (
        <div>
            {people.map((person) => {
                const {id, name, age, image} = person;
                return(
                    <article key={id} className="person">
                        <img src={image} alt={name} />
                        <div className='person-data'>
                            <h4>{name}</h4>
                            <p>{age} Years</p>
                        </div>
                    </article>
                )
            })}
        </div>
    )
}
