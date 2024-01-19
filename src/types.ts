export type ArticleDiscounts = {
  date_updated?: string | null
  discount_group_id?: number | DiscountGroups | null
  discount_id?: number | null
  discount_rate?: number | null
  id: number
  user_updated?: string | DirectusUsers | null
}

export type Articles = {
  article_group_id?: number | null
  article_number?: string | null
  aspect_ratio?: number | null
  construction?: string | null
  date_created?: string | null
  date_updated?: string | null
  diameter?: number | null
  discountId?: number | null
  id: string
  image?: string | DirectusFiles | null
  load_index?: string | null
  manufacture?: string | null
  model?: string | null
  relatedArticles: any[] | ArticlesArticles[]
  speed_rating?: string | null
  supplier?: number | Suppliers | null
  tire_data: string
  tire_dimension?: string | null
  title?: string | null
  unitPrice?: number | null
  vehicle_type?: string | null
  width?: number | null
}

export type ArticlesArticles = {
  articles_id?: string | Articles | null
  id: number
  related_articles_id?: string | Articles | null
}

export type Brands = {
  code?: string | null
  id: number
  models: any[] | Models[]
  value?: string | null
}

export type BrandsDealers = {
  dealers_number?: string | Dealers | null
  id: number
}

export type Categories = {
  id: number
  packages: any[] | PackagesCategories[]
  title?: string | null
}

export type Customers = {
  address?: string | null
  city?: string | null
  company?: string | null
  date_created?: string | null
  date_updated?: string | null
  discountGroup?: number | DiscountGroups | null
  email?: string | null
  firstName?: string | null
  id: string
  lastName?: string | null
  order?: number | Orders | null
  orders: any[] | OrdersCustomers[]
  orgNumber?: string | null
  phone?: string | null
  sort?: number | null
  status: string
  user_created?: string | DirectusUsers | null
  user_updated?: string | DirectusUsers | null
  vehicles: any[] | Vehicles[]
  zipcode?: string | null
}

export type Dealers = {
  address?: string | null
  brands: any[] | BrandsDealers[]
  city?: string | null
  directus_users: any[] | DirectusUsers[]
  email?: string | null
  name?: string | null
  number: string
  number_no?: string | null
  orders: any[] | Orders[]
  phone?: string | null
  users?: string | DirectusUsers | null
  zipcode?: string | null
}

export type Debiting = {
  date_created?: string | null
  date_updated?: string | null
  id: number
  name?: string | null
  price?: number | null
  sort?: number | null
}

export type DirectusActivity = {
  action: string
  collection: string
  comment?: string | null
  id: number
  ip?: string | null
  item: string
  origin?: string | null
  revisions: any[] | DirectusRevisions[]
  timestamp: string
  user?: string | DirectusUsers | null
  user_agent?: string | null
}

export type DirectusCollections = {
  accountability?: string | null
  archive_app_filter: boolean
  archive_field?: string | null
  archive_value?: string | null
  collapse: string
  collection: string
  color?: string | null
  display_template?: string | null
  group?: string | DirectusCollections | null
  hidden: boolean
  icon?: string | null
  item_duplication_fields?: unknown | null
  note?: string | null
  preview_url?: string | null
  singleton: boolean
  sort?: number | null
  sort_field?: string | null
  translations?: unknown | null
  unarchive_value?: string | null
  versioning: boolean
}

export type DirectusDashboards = {
  color?: string | null
  date_created?: string | null
  icon: string
  id: string
  name: string
  note?: string | null
  panels: any[] | DirectusPanels[]
  user_created?: string | DirectusUsers | null
}

export type DirectusExtensions = {
  enabled: boolean
  name: string
}

export type DirectusFields = {
  collection: string | DirectusCollections
  conditions?: unknown | null
  display?: string | null
  display_options?: unknown | null
  field: string
  group?: string | DirectusFields | null
  hidden: boolean
  id: number
  interface?: string | null
  note?: string | null
  options?: unknown | null
  readonly: boolean
  required?: boolean | null
  sort?: number | null
  special?: unknown | null
  translations?: unknown | null
  validation?: unknown | null
  validation_message?: string | null
  width?: string | null
}

export type DirectusFiles = {
  charset?: string | null
  description?: string | null
  duration?: number | null
  embed?: string | null
  filename_disk?: string | null
  filename_download: string
  filesize?: number | null
  folder?: string | DirectusFolders | null
  height?: number | null
  id: string
  location?: string | null
  metadata?: unknown | null
  modified_by?: string | DirectusUsers | null
  modified_on: string
  storage: string
  tags?: unknown | null
  title?: string | null
  type?: string | null
  uploaded_by?: string | DirectusUsers | null
  uploaded_on: string
  width?: number | null
}

export type DirectusFlows = {
  accountability?: string | null
  color?: string | null
  date_created?: string | null
  description?: string | null
  icon?: string | null
  id: string
  name: string
  operation?: string | DirectusOperations | null
  operations: any[] | DirectusOperations[]
  options?: unknown | null
  status: string
  trigger?: string | null
  user_created?: string | DirectusUsers | null
}

export type DirectusFolders = {
  id: string
  name: string
  parent?: string | DirectusFolders | null
}

export type DirectusMigrations = {
  name: string
  timestamp?: string | null
  version: string
}

export type DirectusNotifications = {
  collection?: string | null
  id: number
  item?: string | null
  message?: string | null
  recipient: string | DirectusUsers
  sender?: string | DirectusUsers | null
  status?: string | null
  subject: string
  timestamp?: string | null
}

export type DirectusOperations = {
  date_created?: string | null
  flow: string | DirectusFlows
  id: string
  key: string
  name?: string | null
  options?: unknown | null
  position_x: number
  position_y: number
  reject?: string | DirectusOperations | null
  resolve?: string | DirectusOperations | null
  type: string
  user_created?: string | DirectusUsers | null
}

export type DirectusPanels = {
  color?: string | null
  dashboard: string | DirectusDashboards
  date_created?: string | null
  height: number
  icon?: string | null
  id: string
  name?: string | null
  note?: string | null
  options?: unknown | null
  position_x: number
  position_y: number
  show_header: boolean
  type: string
  user_created?: string | DirectusUsers | null
  width: number
}

export type DirectusPermissions = {
  action: string
  collection: string
  fields?: unknown | null
  id: number
  permissions?: unknown | null
  presets?: unknown | null
  role?: string | DirectusRoles | null
  validation?: unknown | null
}

export type DirectusPresets = {
  bookmark?: string | null
  collection?: string | null
  color?: string | null
  filter?: unknown | null
  icon?: string | null
  id: number
  layout?: string | null
  layout_options?: unknown | null
  layout_query?: unknown | null
  refresh_interval?: number | null
  role?: string | DirectusRoles | null
  search?: string | null
  user?: string | DirectusUsers | null
}

export type DirectusRelations = {
  id: number
  junction_field?: string | null
  many_collection: string
  many_field: string
  one_allowed_collections?: unknown | null
  one_collection?: string | null
  one_collection_field?: string | null
  one_deselect_action: string
  one_field?: string | null
  sort_field?: string | null
}

export type DirectusRevisions = {
  activity: number | DirectusActivity
  collection: string
  data?: unknown | null
  delta?: unknown | null
  id: number
  item: string
  parent?: number | DirectusRevisions | null
  version?: string | DirectusVersions | null
}

export type DirectusRoles = {
  admin_access: boolean
  app_access: boolean
  description?: string | null
  enforce_tfa: boolean
  icon: string
  id: string
  ip_access?: unknown | null
  name: string
  users: any[] | DirectusUsers[]
}

export type DirectusSessions = {
  expires: string
  ip?: string | null
  origin?: string | null
  share?: string | DirectusShares | null
  token: string
  user?: string | DirectusUsers | null
  user_agent?: string | null
}

export type DirectusSettings = {
  auth_login_attempts?: number | null
  auth_password_policy?: string | null
  basemaps?: unknown | null
  custom_aspect_ratios?: unknown | null
  custom_css?: string | null
  default_appearance: string
  default_language: string
  default_theme_dark?: string | null
  default_theme_light?: string | null
  id: number
  mapbox_key?: string | null
  module_bar?: unknown | null
  project_color: string
  project_descriptor?: string | null
  project_logo?: string | DirectusFiles | null
  project_name: string
  project_url?: string | null
  public_background?: string | DirectusFiles | null
  public_favicon?: string | null
  public_foreground?: string | DirectusFiles | null
  public_note?: string | null
  storage_asset_presets?: unknown | null
  storage_asset_transform?: string | null
  storage_default_folder?: string | DirectusFolders | null
  theme_dark_overrides?: unknown | null
  theme_light_overrides?: unknown | null
  theming_group: string
}

export type DirectusShares = {
  collection: string | DirectusCollections
  date_created?: string | null
  date_end?: string | null
  date_start?: string | null
  id: string
  item: string
  max_uses?: number | null
  name?: string | null
  password?: string | null
  role?: string | DirectusRoles | null
  times_used?: number | null
  user_created?: string | DirectusUsers | null
}

export type DirectusTranslations = {
  id: string
  key: string
  language: string
  value: string
}

export type DirectusUsers = {
  appearance?: string | null
  auth_data?: unknown | null
  avatar?: string | DirectusFiles | null
  dealer?: string | Dealers | null
  description?: string | null
  email?: string | null
  email_notifications?: boolean | null
  external_identifier?: string | null
  first_name?: string | null
  id: string
  language?: string | null
  last_access?: string | null
  last_name?: string | null
  last_page?: string | null
  location?: string | null
  password?: string | null
  phone?: string | null
  provider: string
  role?: string | DirectusRoles | null
  status: string
  tags?: unknown | null
  tfa_secret?: string | null
  theme_dark?: string | null
  theme_dark_overrides?: unknown | null
  theme_light?: string | null
  theme_light_overrides?: unknown | null
  title?: string | null
  token?: string | null
}

export type DirectusVersions = {
  collection: string | DirectusCollections
  date_created?: string | null
  date_updated?: string | null
  hash?: string | null
  id: string
  item: string
  key: string
  name?: string | null
  user_created?: string | DirectusUsers | null
  user_updated?: string | DirectusUsers | null
}

export type DirectusWebhooks = {
  actions: unknown
  collections: unknown
  data: boolean
  headers?: unknown | null
  id: number
  method: string
  name: string
  status: string
  url: string
}

export type DiscountGroups = {
  date_updated?: string | null
  id: number
  name?: string | null
  user_updated?: string | DirectusUsers | null
}

export type Faq = {
  content?: string | null
  date_created?: string | null
  date_updated?: string | null
  defaultOpen?: boolean | null
  icon?: string | null
  id: number
  label?: string | null
  sort?: number | null
  status: string
}

export type Global = {
  id: number
  title?: string | null
}

export type Labor = {
  date_created?: string | null
  date_updated?: string | null
  number: string
  sort?: number | null
  time?: number | null
  title?: string | null
}

export type Models = {
  brand?: number | Brands | null
  id: number
  model?: string | null
  model_code: any[] | ModelsCodes[]
}

export type ModelsCodes = {
  code: string
  model?: number | Models | null
  package?: number | Packages | null
  rtv?: string | null
  type_key?: string | null
  year?: string | null
}

export type Navigation = {
  name: string
  pages: any[] | Pages[]
  sort?: number | null
}

export type Orders = {
  customer: any[] | OrdersCustomers[]
  date_created?: string | null
  date_updated?: string | null
  dealer?: string | Dealers | null
  id: number
  number?: number | null
  packages: any[] | OrdersPackages[]
  samsId?: number | null
  sort?: number | null
  status?: string | null
  text?: string | null
  user_created?: string | DirectusUsers | null
  user_updated?: string | DirectusUsers | null
  vehicle?: number | Vehicles | null
}

export type OrdersCustomers = {
  customers_id?: string | Customers | null
  id: number
  orders_id?: number | Orders | null
}

export type OrdersPackages = {
  id: number
  orders_id?: number | Orders | null
  packages_id?: number | Packages | null
}

export type Packages = {
  articles: any[] | PackagesArticles[]
  brands: any[] | PackagesBrands[]
  categories: any[] | PackagesCategories[]
  date_created?: string | null
  date_updated?: string | null
  debiting?: number | Debiting | null
  description?: string | null
  id: number
  image?: string | DirectusFiles | null
  images: any[] | PackagesFiles[]
  imageUrl?: string | null
  labor: any[] | PackagesLabor[]
  modelCodes: any[] | PackagesModelsCodes[]
  models: any[] | PackagesModels[]
  number?: string | null
  orders: any[] | OrdersPackages[]
  position?: string | null
  price?: string | null
  relatedPackages: any[] | PackagesPackages[]
  sort?: number | null
  supplier?: number | Suppliers | null
  supplierEstimatedTime?: number | null
  supplierModelDescription?: string | null
  title?: string | null
}

export type PackagesArticles = {
  articles_id?: string | Articles | null
  id: number
  packages_id?: number | Packages | null
  quantity?: number | null
  total?: number | null
}

export type PackagesBrands = {
  brands_id?: number | Brands | null
  id: number
  packages_id?: number | Packages | null
}

export type PackagesCategories = {
  categories_id?: number | Categories | null
  id: number
  packages_id?: number | Packages | null
}

export type PackagesFiles = {
  id: number
  packages_files_id?: string | DirectusFiles | null
  packages_id?: number | Packages | null
}

export type PackagesLabor = {
  id: number
  labor_number?: string | Labor | null
  packages_id?: number | Packages | null
  quantity?: number | null
  time?: number | null
  title?: string | null
}

export type PackagesModels = {
  id: number
  models_id?: number | Models | null
  packages_id?: number | Packages | null
}

export type PackagesModelsCodes = {
  id: number
  models_codes_code?: string | ModelsCodes | null
  packages_id?: number | Packages | null
}

export type PackagesPackages = {
  id: number
  packages_id?: number | Packages | null
  related_packages_id?: number | Packages | null
}

export type Pages = {
  admin_page?: boolean | null
  block: any[] | PagesBlock[]
  child_id?: string | Pages | null
  children: any[] | Pages[]
  date_created?: string | null
  date_updated?: string | null
  icon?: string | null
  id?: string | Navigation | null
  slug: string
  sort?: number | null
  status: string
  title?: string | null
  user_created?: string | DirectusUsers | null
  user_updated?: string | DirectusUsers | null
}

export type PagesBlock = {
  collection?: string | null
  id: number
  item?: string | any | null
  pages_slug?: string | Pages | null
}

export type Suppliers = {
  address?: string | null
  city?: string | null
  date_created?: string | null
  date_updated?: string | null
  email?: string | null
  id: number
  name?: string | null
  org_number?: string | null
  phone?: string | null
  sort?: number | null
  status?: string | null
  zipcode?: string | null
}

export type Vehicles = {
  brand?: number | Brands | null
  chassiNumber?: string | null
  customer?: string | Customers | null
  date_created?: string | null
  date_updated?: string | null
  hasServiceAgreement?: boolean | null
  id: number
  isCompanyVehicle?: boolean | null
  modelVariantName?: string | null
  modelYear?: number | null
  orders: any[] | Orders[]
  registrationNumber?: string | null
  serviceAgreement?: unknown | null
  sort?: number | null
  specialBrandCode?: string | null
}

export type CustomDirectusTypes = {
  article_discounts: ArticleDiscounts[]
  articles: Articles[]
  articles_articles: ArticlesArticles[]
  brands: Brands[]
  brands_dealers: BrandsDealers[]
  categories: Categories[]
  customers: Customers[]
  dealers: Dealers[]
  debiting: Debiting[]
  directus_activity: DirectusActivity[]
  directus_collections: DirectusCollections[]
  directus_dashboards: DirectusDashboards[]
  directus_extensions: DirectusExtensions[]
  directus_fields: DirectusFields[]
  directus_files: DirectusFiles[]
  directus_flows: DirectusFlows[]
  directus_folders: DirectusFolders[]
  directus_migrations: DirectusMigrations[]
  directus_notifications: DirectusNotifications[]
  directus_operations: DirectusOperations[]
  directus_panels: DirectusPanels[]
  directus_permissions: DirectusPermissions[]
  directus_presets: DirectusPresets[]
  directus_relations: DirectusRelations[]
  directus_revisions: DirectusRevisions[]
  directus_roles: DirectusRoles[]
  directus_sessions: DirectusSessions[]
  directus_settings: DirectusSettings[]
  directus_shares: DirectusShares[]
  directus_translations: DirectusTranslations[]
  directus_users: DirectusUsers[]
  directus_versions: DirectusVersions[]
  directus_webhooks: DirectusWebhooks[]
  discount_groups: DiscountGroups[]
  faq: Faq[]
  global: Global[]
  labor: Labor[]
  models: Models[]
  models_codes: ModelsCodes[]
  navigation: Navigation[]
  orders: Orders[]
  orders_customers: OrdersCustomers[]
  orders_packages: OrdersPackages[]
  packages: Packages[]
  packages_articles: PackagesArticles[]
  packages_brands: PackagesBrands[]
  packages_categories: PackagesCategories[]
  packages_files: PackagesFiles[]
  packages_labor: PackagesLabor[]
  packages_models: PackagesModels[]
  packages_models_codes: PackagesModelsCodes[]
  packages_packages: PackagesPackages[]
  pages: Pages[]
  pages_block: PagesBlock[]
  suppliers: Suppliers[]
  vehicles: Vehicles[]
}
