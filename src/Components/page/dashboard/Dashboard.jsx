import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../Authcontext';


function Dashboard() {
    const navigate = useNavigate();
    const { logout } = useAuth();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <>
            <div>
                <section>
                    <Navbar />
                </section>
                <div className='text-center'>
                    <Button className='btn' onClick={handleLogout}>Log out</Button>
                </div>
            </div>
        </>
    )
}

export default Dashboard