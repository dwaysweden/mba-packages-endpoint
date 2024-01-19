interface PackageQuery {
  fields: string[]
  filter?: any
  sort?: any
  search?: string
  deep?: any
  alias?: any
  aggregate?: any
  groupBy?: any
  limit?: number
  offset?: number
  page?: number
  [key: string]: any
}

const defaultPackageQuery: PackageQuery = {
  fields: [
    'id',
    'title',
    'debiting',
    'description',
    'date_created',
    'date_updated',
    'image',
    'imageUrl',
    'number',
    'position',
    'price',
    'supplierEstimatedTime',
    'supplierModelDescription',
    'articles.quantity',
    'articles.total',
    'articles.articles_id.article_number',
    'articles.articles_id.article_group_id',
    'articles.articles_id.discountId',
    'articles.articles_id.title',
    'articles.articles_id.unitPrice',
    'articles.articles_id.image',
    'articles.articles_id.supplier',
    'supplier.name',
    'brands.brands_id.id',
    'brands.brands_id.value',
    'categories.categories_id.id',
    'categories.categories_id.title',
    'images.packages_files_id',
    'labor.labor_number',
    'labor.title',
    'labor.quantity',
    'labor.time',
    'modelCodes.models_codes_code.code',
    'models.models_id.id',
    'models.models_id.model',
    'relatedPackages.related_packages_id.id',
    'relatedPackages.related_packages_id.number',
    'relatedPackages.related_packages_id.supplier',
    'relatedPackages.related_packages_id.supplierEstimatedTime',
    'relatedPackages.related_packages_id.title',
    'relatedPackages.related_packages_id.labor.labor_number',
    'relatedPackages.related_packages_id.labor.title',
    'relatedPackages.related_packages_id.labor.quantity',
    'relatedPackages.related_packages_id.labor.time',
    'relatedPackages.related_packages_id.articles.quantity',
    'relatedPackages.related_packages_id.articles.total',
    'relatedPackages.related_packages_id.articles.articles_id.article_number',
    'relatedPackages.related_packages_id.articles.articles_id.article_group_id',
    'relatedPackages.related_packages_id.articles.articles_id.discountId',
    'relatedPackages.related_packages_id.articles.articles_id.title',
    'relatedPackages.related_packages_id.articles.articles_id.unitPrice',
    'relatedPackages.related_packages_id.articles.articles_id.image',
    'relatedPackages.related_packages_id.articles.articles_id.supplier',
  ],
}

export function parseQueryParameters(reqQuery: any): PackageQuery {
  let query = { ...defaultPackageQuery }

  // Fält som kan anges i förfrågan
  ;['fields', 'search', 'deep', 'alias', 'aggregate', 'groupBy'].forEach(param => {
    if (reqQuery[param]) {
      query[param] = reqQuery[param]
    }
  })

  // Hantera 'filter' separat för att korrekt bearbeta JSON-strängar
  if (reqQuery.filter) {
    try {
      query.filter = JSON.parse(reqQuery.filter)
    } catch (e) {
      console.error('Fel vid parsing av filterparametern:', e)
      // Använd filterparametern som den är om parsing misslyckas
      query.filter = reqQuery.filter
    }
  }

  // Speciell hantering för 'sort'
  if (reqQuery.sort) {
    // Om det är en sträng, konvertera till en array av strängar
    query.sort = typeof reqQuery.sort === 'string' ? [reqQuery.sort] : reqQuery.sort
  }

  // Hantera 'limit'
  if (reqQuery.limit) {
    let limit = parseInt(reqQuery.limit, 10)
    query.limit = !isNaN(limit) && limit >= -1 ? limit : 100
  }

  // Hantera 'offset'
  if (reqQuery.offset) {
    let offset = parseInt(reqQuery.offset, 10)
    query.offset = !isNaN(offset) && offset >= 0 ? offset : 0
  }

  // Hantera 'page'
  if (reqQuery.page) {
    let page = parseInt(reqQuery.page, 10)
    query.page = !isNaN(page) && page >= 1 ? page : 1
  }

  return query
}

// const defaultPackageQuery = {
//   fields: [
//     {
//       id: 'id',
//       title: 'title',
//       debiting: 'debiting',
//       description: 'description',
//       date_created: 'date_created',
//       date_updated: 'date_updated',
//       number: 'number',
//       position: 'position',
//       price: 'price',
//       image: 'image',
//       imageUrl: 'imageUrl',
//       images: 'images.packages_files_id',
//       supplier: 'supplier.name',
//       supplierEstimatedTime: 'supplierEstimatedTime',
//       supplierModelDescription: 'supplierModelDescription',
//       articles: [
//         'articles.quantity',
//         'articles.total',
//         'articles.articles_id.article_number',
//         'articles.articles_id.article_group_id',
//         'articles.articles_id.discountId',
//         'articles.articles_id.title',
//         'articles.articles_id.unitPrice',
//         'articles.articles_id.image',
//         'articles.articles_id.supplier',
//       ],
//       labor: ['labor.labor_number', 'labor.title', 'labor.quantity', 'labor.time'],
//       brands: ['brands.brands_id.id', 'brands.brands_id.value'],
//       categories: ['categories.categories_id.id', 'categories.categories_id.title'],
//       modelCodes: ['modelCodes.models_codes_code.code'],
//       models: ['models.models_id.id', 'models.models_id.model'],
//       relatedPackages: [
//         'relatedPackages.related_packages_id.id',
//         'relatedPackages.related_packages_id.number',
//         'relatedPackages.related_packages_id.supplier',
//         'relatedPackages.related_packages_id.supplierEstimatedTime',
//         'relatedPackages.related_packages_id.title',
//         'relatedPackages.related_packages_id.labor.labor_number',
//         'relatedPackages.related_packages_id.labor.title',
//         'relatedPackages.related_packages_id.labor.quantity',
//         'relatedPackages.related_packages_id.labor.time',
//         'relatedPackages.related_packages_id.articles.quantity',
//         'relatedPackages.related_packages_id.articles.total',
//         'relatedPackages.related_packages_id.articles.articles_id.article_number',
//         'relatedPackages.related_packages_id.articles.articles_id.article_group_id',
//         'relatedPackages.related_packages_id.articles.articles_id.discountId',
//         'relatedPackages.related_packages_id.articles.articles_id.title',
//         'relatedPackages.related_packages_id.articles.articles_id.unitPrice',
//         'relatedPackages.related_packages_id.articles.articles_id.image',
//         'relatedPackages.related_packages_id.articles.articles_id.supplier',
//       ],
//     },
//   ],
// }
