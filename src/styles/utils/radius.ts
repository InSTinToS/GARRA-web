export const radius = {
  radius: (value: string | number) => ({ borderRadius: value }),

  radiusLB: (value: string | number) => ({ borderLeftBottomRadius: value }),
  radiusLT: (value: string | number) => ({ borderLeftTopRadius: value }),
  radiusRT: (value: string | number) => ({ borderRightTopRadius: value }),
  radiusBT: (value: string | number) => ({ borderBottomTopRadius: value }),

  radiusL: (value: string | number) => ({
    borderLeftTopRadius: value,
    borderLeftBottomRadius: value
  }),
  radiusT: (value: string | number) => ({
    borderLeftTopRadius: value,
    borderRightTopRadius: value
  }),
  radiusR: (value: string | number) => ({
    borderRightTopRadius: value,
    borderRightBottomRadius: value
  }),
  radiusB: (value: string | number) => ({
    borderRightBottomRadius: value,
    borderLeftBottomRadius: value
  })
}
