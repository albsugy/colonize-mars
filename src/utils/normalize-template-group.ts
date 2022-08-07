import { normlizeText } from './normalize-text'
import { TemplateGroup, TokenParameter } from 'types/template-group'

const formatTokenName = (item: TokenParameter) => {
  return {
    ...item,
    token: {
      ...item.token,
      name: normlizeText(item.token.name)
    }
  }
}
export const normalizeTemplateGroup = (tempalte: TemplateGroup) => {
  const inputs = tempalte.tokenParameters
    .filter(
      (tokenParameter) => tokenParameter.inputAmountPerEarningPower !== null
    )
    .map(formatTokenName)
  const outputs = tempalte.tokenParameters
    .filter(
      (tokenParameter) => tokenParameter.outputAmountPerEarningPower !== null
    )
    .map(formatTokenName)

  return {
    id: tempalte.id,
    key: tempalte.key,
    name: normlizeText(tempalte.name),
    inputs,
    outputs
  }
}
