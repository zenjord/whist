import { useAuthentication } from '../../../contexts/AuthenticationContext/AuthenticationContext';
import Avatar from '../../../components/Avatar/Avatar';

function Profile() {
    const { logoutUser, user } = useAuthentication();
    const userName = user.displayName || user.email;
console.log(user)
    return (
        <>
            <Avatar size='120px' />
        </>
    )
}

export default Profile;