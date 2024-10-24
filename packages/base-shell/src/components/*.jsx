import React from 'react'
import { RouteProps } from 'react-router-dom'

interface PageProps extends RouteProps {
  Component: React.ComponentType<any>
  Layout?: React.ComponentType<any>
}

export const Page: React.FC<PageProps> = ({
  Component,
  Layout = DefaultLayout,
  ...rest
}) => {
  return (
    <Layout>
      <Component {...rest} />
    </Layout>
  )
}
