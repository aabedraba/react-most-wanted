import { ComponentType } from 'react'

export interface BaseConfig {
  auth?: AuthConfig
  routes?: RouteConfig[]
  menu?: MenuConfig
}

export interface AuthConfig {
  baseUrl: string
  tokenKey: string
}

export interface RouteConfig {
  path: string
  component: ComponentType
  exact?: boolean
  layout?: ComponentType
}

export interface MenuConfig {
  items: MenuItem[]
  defaultPath: string
}

export interface MenuItem {
  path: string
  label: string
  icon?: string
}
