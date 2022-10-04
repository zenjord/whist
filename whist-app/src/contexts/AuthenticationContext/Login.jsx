import { useState } from 'react';
import { useAuthentication } from './AuthenticationContext';

import Container from 'react-bootstrap/Container';

function Login() {
    const { loginUser } = useAuthentication();

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const submitLogin = () => {
        loginUser(email, password)
        .catch(error => alert(error.message));
        setPassword('');
    }

    return (
        <Container>
            <h1>Please login</h1>
            <input type="email" onChange={e => setEmail(e.target.value)} value={email} />
            <input type="password" onChange={e => setPassword(e.target.value)} value={password} />
            <button onClick={submitLogin} >Login</button>
        </Container>
    )
}

export default Login;