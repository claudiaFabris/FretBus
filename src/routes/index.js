import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import Login from 'components/login';
import Cadastro from 'components/cadastro';
import Principal from 'components/principal';
import Eventos from 'components/eventos';
import Onibus from 'components/onibus';
import Viagens from 'components/viagens';
import CadastroEvento from 'components/cadastroEvento';
import CadastroOnibus from 'components/cadastroOnibus';
import CadastroViagem from 'components/cadastroViagem';
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
                    key={'onibus'}
                    component={Onibus}
                    hideNavBar={true}
                />
                <Scene 
                    key={'viagens'}
                    component={Viagens}
                    hideNavBar={true}
                />
                <Scene 
                    key={'cadastroEvento'}
                    component={CadastroEvento}
                    hideNavBar={true}
                />
                <Scene 
                    key={'cadastroOnibus'}
                    component={CadastroOnibus}
                    hideNavBar={true}
                />
                <Scene 
                    key={'cadastroViagem'}
                    component={CadastroViagem}
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
 