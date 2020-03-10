import React from 'react';
import './homepage.styles.scss';
import { MenuItem } from '../../components/menu-item/menu-item.component';
import Directory from '../../components/directory/directory.component';

export const HomePage =() => (
    <div className="homepage">
        <Directory>
            <MenuItem title="HATS"/>
            <MenuItem title="JACKETS"/>
            <MenuItem title="SNEAKERS"/>
            <MenuItem title="WOMENS"/>
            <MenuItem title="MENS"/>

        </Directory>

    </div>
)