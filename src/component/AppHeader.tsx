import React from 'react';
import { Layout } from 'antd';
import { useNavigate } from 'react-router-dom';

const AppHeader: React.FC = () => {
    const { Header } = Layout;
    const navigate = useNavigate();

    const redirectToHomePage = () => {
        navigate("/");
    };

    return (
        <Header
            style={{
                display: 'flex',
                alignItems: 'center',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                background: "linear-gradient(to bottom, #222222, #1a1a1a)",
                position: 'fixed',
                zIndex: 1000,
                width: '100%',
            }}
        >

            <h2 style={{ color: "red", fontWeight: '700', cursor: 'pointer' }} onClick={redirectToHomePage}>
                MovieFlix
            </h2>
        </Header>
    );
};

export default AppHeader;
