import React from 'react'
// import Navbar from '../../components/Navbar'
import Sidebar from '../../components/admin/Sidebar'
import UserAdd from '../../components/admin/UserAdd'
export default function AdminPage() {
    return (
        <div className='container-page'>
            {/* <Navbar /> */}
            <div className='container-main'>
                <Sidebar />
                <div className='container-data'><UserAdd /></div>
            </div>

        </div>
    )
}