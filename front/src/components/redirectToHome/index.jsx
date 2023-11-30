import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

export const RedirectToHome = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/player');
    }, [navigate]);

    return null;
};
