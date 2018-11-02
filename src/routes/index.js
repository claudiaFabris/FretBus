import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import Login from 'components/login';
import Cadastro from 'components/cadastro';
import Principal from 'components/principal';
import Eventos from 'components/eventos';
import TabBarMenu from 'components/tabBarMenu';

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
                <Scene 
                    key={'principal'}
                    component={Principal}
                    hideNavBar={true}
                />
                <Scene 
                    key={'eventos'}
                    component={Eventos}
                    hideNavBar={true}
                />
                <Scene 
                    key={'tabBarMenu'}
                    component={TabBarMenu}
                    hideNavBar={true}
                />
            </Stack>
        </Router>
    );
 }

 export default Routes;
 