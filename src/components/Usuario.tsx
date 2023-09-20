import React, { useState } from 'react';

interface User {
    uid: string;
    name: string;
}

export const Usuario = () => {

const [user, setUser] = useState<User>({
    uid: '',
    name: ''
});

const login = () => {
    setUser({
        uid: 'ABC123',
        name: 'Fernando Herrera'
    });
}

  return (
    <div className='mt-5'>
        <h3>Usuario: useState</h3>
        <button className='btn btn-outline-primary' onClick={login}>
            Login
        </button>
        {
            (!user)
            ? <pre className='mt-5'>{JSON.stringify(user)}</pre>
            : <pre className='mt-5'> No hay Usuario!</pre>
        }
        
    </div>
  )
}
