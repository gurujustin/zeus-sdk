import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | number | string

export enum ChainId {
  MAINNET = 56,
  TESTNET = 97
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESS = '0x8E5bC0B46fbe1E408Abb74Ee584761D22dCCD663'

export const FACTORY_ADDRESS_MAP = {
  [ChainId.MAINNET]: FACTORY_ADDRESS,
  [ChainId.TESTNET]: '0xF4F472E37f83716a7C4340E0FD7716E70fba9d78'
}

export const INIT_CODE_HASH = '0xf3a55c0ac469c7dbad54b8134edd04f7c7de82a66874c7dcabfffade2385daf1'

export const INIT_CODE_HASH_MAP = {
  [ChainId.MAINNET]: INIT_CODE_HASH,
  [ChainId.TESTNET]: '0xf3a55c0ac469c7dbad54b8134edd04f7c7de82a66874c7dcabfffade2385daf1'
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const FEES_NUMERATOR = JSBI.BigInt(9979)
export const FEES_DENOMINATOR = JSBI.BigInt(10000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
