import axiosClient from '../apiClient'
import apiConfig from '../apiConfig'

import { normalizeTemplateGroup } from 'utils/normalize-template-group'
import { isAxiosError } from 'utils/axios'
import { TemplateGroup, GetTemplateGroupsResponse } from 'types/template-group'
import { ErrorResponseType } from 'types'

export function getTemplateGroups() {
  return axiosClient.get<GetTemplateGroupsResponse>(
    apiConfig.endpoints.templateGroups
  )
}

export async function fetchTemplateGroups() {
  try {
    const resp = await getTemplateGroups()
    const data = resp?.data

    const normalizdData = data.map((template: TemplateGroup) =>
      normalizeTemplateGroup(template)
    )
    return {
      props: {
        templateGroups: normalizdData
      }
    }
  } catch (error: unknown) {
    if (isAxiosError<ErrorResponseType>(error)) {
      return {
        props: {
          templateGroups: [],
          error: error.response?.data
        }
      }
    }
  }
}
