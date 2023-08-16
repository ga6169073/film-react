import React from 'react'
import Header from '../../components/header/Header'
import Sidebar from '../../components/admin/Sidebar'
import UserDatatable from '../../components/admin/UserDatatable'
import './AdminPage.scss'
export default function AdminPage() {
    return (
        <div className='container-page'>
            <Header />
            <div className='container-main'>
                <Sidebar />
                <div className='container-data'><UserDatatable /></div>
            </div>

        </div>
    )
}
