import { useNavigate } from 'react-router-dom';

export const useNavigation = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return handleNavigation;
};