import Step1 from '../components/Step1'
import Step2 from '../components/Step2'
import { IRouter } from '../types/routes'
import { LOGIN_STEP_1, LOGIN_STEP_2 } from './../utils/const'

export const routes: IRouter[] = [
    {
        path: LOGIN_STEP_1,
        name: 'Step1',
        Component: Step1,
        exact: true,
    },
    {
        path: LOGIN_STEP_2,
        name: 'Step2',
        Component: Step2,
        exact: true,
    },
]
