import { Style } from './styles'

import BarCodes from '../BarCodes'

interface IInfo {
  data: {
    name: string
    place?: string
    sector?: string
    barCodes: string[]
  }
}

const Info = ({ data }: IInfo) => (
  <Style>
    {data.place && (
      <li>
        <strong>LOCAL:</strong> {data.place}
      </li>
    )}

    {data.sector && (
      <li>
        <strong>SETOR:</strong> {data.sector}
      </li>
    )}

    <BarCodes codes={data.barCodes} name={data.name} />
  </Style>
)

export default Info
