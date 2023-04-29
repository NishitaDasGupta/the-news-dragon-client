import React from 'react';

import { Outlet } from 'react-router-dom';
import DragonNavBar from '../pages/Shared/DragonNavBar/DragonNavBar';

const LoginLayout = () => {
    return (
        <div>
           <DragonNavBar></DragonNavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;