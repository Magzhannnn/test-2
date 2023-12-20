export interface IRouter {
    path: string
    name: string
    Component: any
    exact: boolean
    props?: any
}
