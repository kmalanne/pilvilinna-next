import type { Document } from '@contentful/rich-text-types'

export type ServiceItem = {
  title: string
  text: string
}

export type TestimonialItem = {
  testimonial: string
  author: string
}

export type HomeData = {
  name: string
  about: {
    json: Document
  }
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
  infoText: { json: Document }
  productsCollection: {
    items: Product[]
  }
}

export type OrderingData = {
  termsOfOrderingAndDelivery: { json: Document }
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
