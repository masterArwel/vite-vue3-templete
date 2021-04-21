import NumFactoryStateTypes from './modules/types'

export default interface RootStareTypes {
  text: string
}

export interface AllStateTypes extends RootStareTypes {
  numFactoryModule: NumFactoryStateTypes
}