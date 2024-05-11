import React from 'react'
import { Layout } from 'antd';

const AppHeader: React.FC = () => {
    const { Header } = Layout;
    return (
        <Header style={{ display: 'flex', alignItems: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <h2 style={{ color: "red", fontWeight: '700' }}>MovieFlix</h2>
        </Header>
    )
}

export default AppHeader