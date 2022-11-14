import { IChildrenProps } from '@app/types/react.types'

import * as RadixTooltip from '@radix-ui/react-tooltip'

export const RadixProvider = ({ children }: IChildrenProps) => (
  <RadixTooltip.Provider delayDuration={0} disableHoverableContent>
    {children}
  </RadixTooltip.Provider>
)
