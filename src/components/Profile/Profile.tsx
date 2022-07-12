import React from 'react'
import * as CP from './styles'

export const Profile = () => {
    return (
        <CP.ContainerProfile>
            <CP.Detail>
                <h1> Julio Cesar</h1>
                <p> 24 Anos </p>
            </CP.Detail>
            <CP.VectorImage>
                <img src="images/profile1.png" alt='profile'/>
            </CP.VectorImage>
        </CP.ContainerProfile>
    )
}
