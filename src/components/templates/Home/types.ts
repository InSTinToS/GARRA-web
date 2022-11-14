import { IProject } from '@app/types/api/project.types'
import { ITech } from '@app/types/api/tech.types'

export interface IHomeProps {
  techs?: ITech[]
  projects?: IProject[]
}
