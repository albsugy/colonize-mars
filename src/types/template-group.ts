export interface Token {
  id: string
  code: number
  name: string
  tokenName: string
  blockchainPrecision: number
}

export interface TokenParameter {
  inputAmountPerEarningPower?: string
  outputAmountPerEarningPower?: string
  inputModifier?: string
  outputModifier?: string
  passiveMultiplier: string
  martiaMultiplier: string
  token: Token
}

export interface TemplateGroup {
  id: string
  key: string
  name: string
  tokenParameters: TokenParameter[]
}

export interface NormalizedTemplateGroup {
  id: string
  key: string
  name: string
  inputs: TokenParameter[]
  outputs: TokenParameter[]
}

export type GetTemplateGroupsResponse = TemplateGroup[]
