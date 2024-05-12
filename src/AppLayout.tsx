import React from 'react'
import { Layout } from 'antd';
import AppRoutes from './AppRoutes';
import { BrowserRouter as Router } from 'react-router-dom';
import AppHeader from './component/AppHeader';
import AppFooter from './component/AppFooter';


const AppLayout: React.FC = () => {
    const { Content } = Layout;

    return (
        <Layout style={{
            minHeight: '100vh',
            background: "linear-gradient(to bottom, #2c3e50, #1f2d3d)",
        }}>
            <Router>
                {/* Header */}
                <AppHeader />
                {/* End of the header */}

                {/* Body Content */}
                <Content style={{ padding: '0 ,3rem' }}>
                    <AppRoutes />
                </Content>
                {/* End of the body content */}

                {/* Footer */}
                <AppFooter />
            </Router>
            {/* End of the Footer */}
        </Layout>
    )
}

export default AppLayout