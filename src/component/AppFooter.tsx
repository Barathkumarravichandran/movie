import React from 'react'
import { Layout } from 'antd';



const AppFooter: React.FC = () => {
    const { Footer } = Layout;
    return (

        <Footer style={{ textAlign: 'center' }}>
            Copyrights ©{new Date().getFullYear()} Created by Barathkumar
        </Footer>
    )
}

export default AppFooter