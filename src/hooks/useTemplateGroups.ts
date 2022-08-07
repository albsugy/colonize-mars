import { useEffect, useState } from 'react'

import { getTemplateGroups } from 'api/services/template-groups'
import { normalizeTemplateGroup } from 'utils/normalize-template-group'
import { TemplateGroup, NormalizedTemplateGroup } from 'types/template-group'

const useTemplateGroups = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [templateGroups, setTemplateGroups] = useState<
    NormalizedTemplateGroup[]
  >([])
  const [serverError, setServerError] = useState<unknown>(null)

  useEffect(() => {
    setIsLoading(true)
    const fetchData = async () => {
      try {
        const resp = await getTemplateGroups()
        const data = resp?.data

        const normalizdData = data.map((template: TemplateGroup) =>
          normalizeTemplateGroup(template)
        )

        setTemplateGroups(normalizdData)
        setIsLoading(false)
      } catch (error) {
        setServerError(error)
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  return { isLoading, templateGroups, serverError }
}

export default useTemplateGroups
