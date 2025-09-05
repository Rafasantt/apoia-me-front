export interface AccountWithDonationsModel {
  id: string
  name: string
  email: string
  slug: string
  connectedStripeAccountId: string
  donations: [
    {
      id: string
      name: string
      message: string
      creatorId: string
      slug: string
      price: number
      status: string
    }
  ]
}
