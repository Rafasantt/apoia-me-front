import { loadStripe } from '@stripe/stripe-js'

export async function getStripeJs() {
  const stripeJs = await loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY as string)

  return stripeJs
}