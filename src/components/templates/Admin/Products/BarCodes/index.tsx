import { Arrow, Code, Codes, CustomHeader, Style, Title } from './styles'

export interface IBarCodesProps {
  name: string
  codes: string[]
}

const BarCodes = ({ codes, name }: IBarCodesProps) => {
  const items = [
    {
      customHeader: [
        <CustomHeader key={name}>
          <Arrow />

          <Title>Códigos de barras</Title>
        </CustomHeader>
      ],
      content: (
        <Codes>
          {codes.map(code => (
            <Code key={code}>{code}</Code>
          ))}
        </Codes>
      )
    }
  ]

  return <Style variant='black' items={items} />
}

export default BarCodes
