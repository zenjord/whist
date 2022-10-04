import { useAuthentication } from '../../contexts/AuthenticationContext/AuthenticationContext';

function Avatar({ size }) {
    const { user } = useAuthentication();

    return <img src={user.photoURL || `${window.location.origin}/base_avatar.png`} className="rounded-circle mx-1 border" style={{width: size}} alt="Avatar" />
}

export default Avatar