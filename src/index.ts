import { defineEndpoint } from '@directus/extensions-sdk'
import { parseQueryParameters } from './utils/query'
import { formatPackages } from './functions/formatPackages'

export default defineEndpoint(async (router, { services, database, getSchema }) => {
  const { ItemsService } = services
  const schema = await getSchema()
  const items = new ItemsService('packages', { schema, knex: database })

  router.get('/', async (req, res) => {
    try {
      const query = parseQueryParameters(req.query)
      const data = await items.readByQuery(query)
      const packagesData = formatPackages(data)
      res.send(packagesData)
    } catch (error) {
      console.error('Error fetching packages:', error)
      res.status(500).json({ error: 'Internal Server Error' })
    }
  })
})
