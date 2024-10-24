interface Config {
  auth?: {
    baseUrl: string
    tokenKey: string
  }
  routes?: RouteConfig[]
}

interface RouteConfig {
  path: string
  component: React.ComponentType
  exact?: boolean
  layout?: React.ComponentType
}

export const getConfig = (config?: Partial<Config>): Config => {
  const defaultConfig: Config = {
    auth: {
      baseUrl: '/auth',
      tokenKey: 'token'
    },
    routes: []
  }
  return { ...defaultConfig, ...config }
}
