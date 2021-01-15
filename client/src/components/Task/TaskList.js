import React, { useState } from 'react';

import {
    Input,
    Button,
    Cards,
    Card,
    CardContent,
    CardContentExtra,
    ButtonContainer,
} from './TaskStyle'

async function postData(url = '', data = {}) {

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return response.json();
  }


const TaskList = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeName = (e) => {
        setUserName(e.target.value)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleDelete = (e) => {
        console.log('deleting ...', e.target.name)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('se debe crear el registro ...', e.target.name)


        postData('http://localhost:4000/api/create', { nombre: userName, email: password, clave: "123456", status: "AA", rol: "US" })
            .then(data => {
            console.log(data);
        });            
    
        setUserName('');
        setPassword('');
    }

    return (
        <div>
            <h2>User List</h2>
            <form action="" onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="nombre"
                    value={userName}
                    name="userName"
                    onChange={handleChangeName}
                />

                <Input
                    type="text"
                    placeholder="password"
                    value={password}
                    name="password"
                    onChange={handleChangePassword}
                    />

                <Button type="submit" onClick={handleSubmit}>Submit</Button>
                <hr />
            </form>
            <Cards>
                <Card>
                    <CardContent>
                        <div>
                            Card - 1
                        </div>
                    </CardContent>
                    <CardContentExtra>
                        <ButtonContainer>
                            <Button>Done</Button>
                            <Button onClick={handleDelete}>Delete</Button>
                        </ButtonContainer>
                    </CardContentExtra>
                </Card>
            </Cards>
        </div>
    )
}

export default TaskList
