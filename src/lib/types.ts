import type { Document } from '@contentful/rich-text-types'

export type Asset = {
  url: string
  description: string
}

export type ServiceItem = {
  title: string
  text: string
  image: Asset
}

export type TestimonialItem = {
  testimonial: string
  author: string
}

export type HomeData = {
  slogan: string
  about: {
    json: Document
  }
  heroImage: Asset
  bakerImage: Asset
  serviceItemsCollection: {
    items: ServiceItem[]
  }
  testimonialsCollection: {
    items: TestimonialItem[]
  }
}

export type Product = {
  title: string
  price: string
  description: {
    json: Document
  }
}

export type AssortmentData = {
  bannerImage: Asset
  infoText: { json: Document }
  productsCollection: {
    items: Product[]
  }
  galleryImagesCollection: {
    items: Asset[]
  }
}

export type OrderingData = {
  bannerImage: Asset
  termsOfOrderingAndDelivery: { json: Document }
}

export type ContactData = {
  bannerImage: Asset
  email: string
  phoneNumber: string
  companyInfo: string
}

export type HomeCollectionQueryResponse = {
  data: {
    homeCollection: {
      items: HomeData[]
    }
  }
}

export type AssortmentCollectionQueryResponse = {
  data: {
    assortmentCollection: {
      items: AssortmentData[]
    }
  }
}

export type OrderingCollectionQueryResponse = {
  data: {
    orderingCollection: {
      items: OrderingData[]
    }
  }
}

export type ContactCollectionQueryResponse = {
  data: {
    contactCollection: {
      items: ContactData[]
    }
  }
}
