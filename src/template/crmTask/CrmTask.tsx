import React, { ReactNode } from 'react'
import { Route, RouteProps } from 'react-router-dom'

type Props = {
  Component: ReactNode
  propsRoute?: RouteProps
}

export default function CrmTask({ Component, ...propsRoute }: Props) {
  return (
    // <Route {...propsRoute} render={({ ...propsComponent }) => {
    //   return <div>
    //     <Component {...propsComponent} />
    //   </div>
    // }}
    // />
    <div></div>
  )
}