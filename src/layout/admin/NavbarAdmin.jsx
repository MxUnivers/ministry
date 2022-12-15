import React from 'react'
import { Outlet } from 'react-router-dom';
import SidebarAdmin from '../../components/admin/SidebarAdmin';

const NavbarAdmin = () => {
    return (
        <div class="w-full">
            <div class=" w-full relative w-full flex flex-row">
                <div class="">
                    <SidebarAdmin />
                </div>
                <div class="w-full">
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default NavbarAdmin;
