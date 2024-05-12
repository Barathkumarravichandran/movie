import React from 'react'
import { Layout } from 'antd';



const AppFooter: React.FC = () => {
    const { Footer } = Layout;
    return (

        <Footer style={{ textAlign: 'center', background: "linear-gradient(to bottom, #222222, #1a1a1a)", color:'#fff' }}>
            Copyrights ©{new Date().getFullYear()} Created by Barathkumar
        </Footer>
    )
}

export default AppFooter