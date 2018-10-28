import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import Login from 'components/login';
import Cadastro from 'components/cadastro';

const Routes = () => {

    return(
        <Router>
            <Stack key={'root'}>
                <Scene 
                    key={'login'}
                    component={Login}
                    initial={true}
                    hideNavBar={true}
                />
                <Scene 
                    key={'cadastro'}
                    component={Cadastro}
                    hideNavBar={true}
                />
            </Stack>
        </Router>
    );
 }

 export default Routes;
 