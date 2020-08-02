import React from 'react';

import { Grid } from './styles';

import ServerList from '../ServerList';

/*export default function Layout(){ //Caso fosse com JS
    return(

    );
}*/

const Layout: React.FC = () => {
    return(
    <Grid>
        <ServerList />
    </Grid>
    );
};

export default Layout;