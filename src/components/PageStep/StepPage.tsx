import React from 'react'
import { IStepPageProps } from './StepPageProps'
import * as CP from './styles'

export const StepPage = ({ children, idColor }: IStepPageProps) => {
    return (
        <CP.ContainerStep idColor={idColor}>
            { children }
        </CP.ContainerStep>
    )
}