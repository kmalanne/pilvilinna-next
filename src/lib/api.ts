import type {
  AssortmentCollectionQueryResponse,
  AssortmentData,
  ContactCollectionQueryResponse,
  ContactData,
  HomeCollectionQueryResponse,
  HomeData,
  OrderingCollectionQueryResponse,
  OrderingData,
} from './types'

const graphqlEndpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN

const homeQuery = `
  query homeCollectionQuery {
    homeCollection {
      items {
        slogan,
        about {
          json
        },
        heroImage {
          url,
          description
        },
        bakerImage {
          url,
          description
        },
        serviceItemsCollection(limit: 3) {
          items {
            title,
            text,
            image {
              url,
              description
            }
          }
        },
        testimonialsCollection (limit: 4) {
          items {
            testimonial,
            author
          }
        }
      }
    }
  }
`

const assortmentQuery = `
  query assortmentCollectionQuery {
    assortmentCollection {
      items {
        infoText {
          json
        },
        bannerImage {
          url,
          description
        },
        productsCollection(order: order_ASC, limit: 15) {
          items {
            title,
            price,
            description {
              json
            }
          }
        },
        galleryImagesCollection(limit: 20) {
          items {
            url,
            description
          }
        }
      }
    }
  }
`

const orderingQuery = `
  query orderingCollectionQuery {
    orderingCollection {
      items {
        bannerImage {
          url,
          description
        },
        termsOfOrderingAndDelivery {
          json,
        }
      }
    }
  }
`

const contactQuery = `
  query contactCollectionQuery {
    contactCollection {
      items {
        bannerImage {
          url,
          description
        },
        email,
        phoneNumber,
        companyInfo
      }
    }
  }
`

const doQuery = async <T>(query: string) => {
  try {
    const response = await fetch(graphqlEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ query }),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const data = <T>await response.json()
    return data
  } catch (error) {
    console.error('Error fetching data:', error)
    return null
  }
}

export const fetchHomeCollection = async (): Promise<HomeData | undefined> => {
  const data = await doQuery<HomeCollectionQueryResponse>(homeQuery)

  return data?.data?.homeCollection.items[0]
}

export const fetchAssortmentCollection = async (): Promise<AssortmentData | undefined> => {
  const data = await doQuery<AssortmentCollectionQueryResponse>(assortmentQuery)

  return data?.data.assortmentCollection.items[0]
}

export const fetchOrderingCollection = async (): Promise<OrderingData | undefined> => {
  const data = await doQuery<OrderingCollectionQueryResponse>(orderingQuery)

  return data?.data?.orderingCollection.items[0]
}

export const fetchContactCollection = async (): Promise<ContactData | undefined> => {
  const data = await doQuery<ContactCollectionQueryResponse>(contactQuery)

  return data?.data?.contactCollection.items[0]
}
