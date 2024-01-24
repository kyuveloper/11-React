import React from 'react'

function CreateUser({ name, email, onChange, onCreate}) {

    return (
        <>
        <div>
                <input
                    name='name'
                    placeholder='User Name'
                    onChange={onChange}
                    value={name}
                />
                <input
                    name='email'
                    placeholder='User Email'
                    onChange={onChange}
                    value={email}
                />
                <button onClick={onCreate}>등록</button>
            </div>
        </>
    )
}

export default CreateUser;