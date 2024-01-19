import {
  Categories,
  Brands,
  Models,
  ModelsCodes,
  Articles,
  Labor,
  Packages,
  PackagesBrands,
  PackagesCategories,
  PackagesFiles,
  PackagesModels,
} from '../types'

type FormattedPackageItem = {
  id: number
  title: string
  date_created: string
  date_updated: string
  debiting: number
  description: string
  image: string
  imageUrl: string
  number: string
  position: string
  price: string
  supplierEstimatedTime: string
  supplierModelDescription: string
  articles: Articles[]
  supplier: number
  brands: Brands[]
  categories: Categories[]
  images: any[]
  labor: Labor[]
  modelCodes: ModelsCodes[]
  models: Models[]
  relatedPackages: Packages[]
}

type FormattedPackage = FormattedPackageItem[]

export const formatPackages = (data: any[]): FormattedPackage => {
  return data.map(pkg => {
    const supplierName = pkg.supplier && pkg.supplier.name ? pkg.supplier.name : null
    return {
      id: pkg.id,
      title: pkg.title,
      date_created: pkg.date_created,
      date_updated: pkg.date_updated,
      debiting: pkg.debiting,
      description: pkg.description,
      image: pkg.image,
      imageUrl: pkg.imageUrl,
      number: pkg.number,
      position: pkg.position,
      price: pkg.price,
      supplierEstimatedTime: pkg.supplierEstimatedTime,
      supplierModelDescription: pkg.supplierModelDescription,
      articles:
        pkg.articles?.map((article: any) => ({
          quantity: article.quantity,
          total: article.total,
          article_number: article.articles_id?.article_number,
          article_group_id: article.articles_id?.article_group_id,
          discountId: article.articles_id?.discountId,
          title: article.articles_id?.title,
          unitPrice: article.articles_id?.unitPrice,
          image: article.articles_id?.image,
          supplier: article.articles_id?.supplier,
        })) || [],
      supplier: supplierName,
      brands: pkg.brands?.map((brand: PackagesBrands) => brand.brands_id) || [],
      categories:
        pkg.categories?.map((category: PackagesCategories) => category.categories_id) || [],
      images: pkg.images?.map((image: PackagesFiles) => image.packages_files_id) || [],
      labor: pkg.labor,
      modelCodes: pkg.modelCodes?.map((modelCode: any) => modelCode.models_codes_code?.code) || [],
      models: pkg.models?.map((model: PackagesModels) => model.models_id) || [],
      relatedPackages:
        pkg.relatedPackages?.map((rp: any) => ({
          id: rp.related_packages_id?.id,
          number: rp.related_packages_id?.number,
          supplier: rp.related_packages_id?.supplier,
          supplierEstimatedTime: rp.related_packages_id?.supplierEstimatedTime,
          title: rp.related_packages_id?.title,
          labor: rp.related_packages_id?.labor,
          articles:
            rp.related_packages_id?.articles?.map((article: any) => ({
              quantity: article.quantity,
              total: article.total,
              article_number: article.articles_id?.article_number,
              article_group_id: article.articles_id?.article_group_id,
              discountId: article.articles_id?.discountId,
              title: article.articles_id?.title,
              unitPrice: article.articles_id?.unitPrice,
              image: article.articles_id?.image,
              supplier: article.articles_id?.supplier,
            })) || [],
        })) || [],
    }
  })
}
