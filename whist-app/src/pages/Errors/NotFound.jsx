import Alert from 'react-bootstrap/Alert';

function NotFound() {
    return (
        <Alert variant='warning' className='mt-3'>
            <h1>404: Not found</h1>
            <div>This is not the page you're looking for...</div>
        </Alert>
    )
}

export default NotFound;