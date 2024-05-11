import React from 'react'
import { Layout } from 'antd';
import AppRoutes from './AppRoutes';
import { BrowserRouter as Router } from 'react-router-dom';
import AppHeader from './component/AppHeader';
import AppFooter from './component/AppFooter';


const AppLayout: React.FC = () => {
    const { Content } = Layout;

    return (
        <Layout style={{ height: '100%' }}>
            {/* Header */}
            <AppHeader />
            {/* End of the header */}

            {/* Body Content */}
            <Content style={{ padding: '0 ,3rem' }}>
                <Router>
                    <AppRoutes />
                </Router>
            </Content>
            {/* End of the body content */}

            {/* Footer */}
            <AppFooter />
            {/* End of the Footer */}
        </Layout>
    )
}

export default AppLayout