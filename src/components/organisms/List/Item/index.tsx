import { Content, Header, Style } from './styles'

import { ReactNode, useState } from 'react'

export interface IItemProps {
  variant?: 'primary' | 'secondary' | 'black'
  item?: {
    content: ReactNode
    header?: ReactNode[]
    customHeader?: ReactNode[] | ReactNode
  }
}

export const Item = ({ variant, item }: IItemProps) => {
  const [showContent, setShowContent] = useState(false)

  return (
    <Style variant={variant as any}>
      <Header variant={variant as any}>
        <button type='button' onClick={() => setShowContent(prev => !prev)}>
          {item?.customHeader ? (
            <>{item.customHeader}</>
          ) : (
            item?.header && (
              <>
                <span>{item?.header[0]}</span>
                <span>{item?.header[1]}</span>
                <span>{item?.header[2]}</span>
              </>
            )
          )}
        </button>
      </Header>

      {showContent && <Content>{item?.content}</Content>}
    </Style>
  )
}
