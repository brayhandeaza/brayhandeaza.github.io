import {useState} from 'react'
import './SupportScreen.scss'

const plans = [
  {id: 'monthly', name: 'Monthly', price: 'US$7', cadence: 'per month', description: 'Monthly support for my creative projects.', checkout: import.meta.env.VITE_BMC_MONTHLY_CHECKOUT_URL},
  {id: 'six-month', name: 'Six months', price: 'US$24.99', cadence: 'one-time', description: 'A one-time contribution covering six months.', checkout: import.meta.env.VITE_BMC_SIX_MONTH_CHECKOUT_URL},
  {id: 'annual', name: 'Annual', price: 'US$41', cadence: 'per year', description: 'Yearly support for my creative projects.', checkout: import.meta.env.VITE_BMC_ANNUAL_CHECKOUT_URL},
] as const

function verifiedCheckout(value: unknown): string | null {
  if (typeof value !== 'string') return null
  try {
    const url = new URL(value)
    return url.protocol === 'https:' && ['buymeacoffee.com', 'www.buymeacoffee.com'].includes(url.hostname) ? url.href : null
  } catch {return null}
}

export default function SupportScreen() {
  const requested = new URLSearchParams(window.location.search).get('support') || 'monthly'
  const [selected, setSelected] = useState(plans.some(plan => plan.id === requested) ? requested : 'monthly')
  const plan = plans.find(item => item.id === selected) || plans[0]
  const checkout = verifiedCheckout(plan.checkout)

  return <main className="support-page">
    <header><a href="/" aria-label="Back to Brayhan's website">←</a><span>Brayhan De Aza</span></header>
    <section className="support-intro"><span>SUPPORT MY WORK</span><h1>Help me keep creating.</h1><p>Choose how you would like to support my projects. Payment opens securely on my Buy Me a Coffee page.</p></section>
    <div className="support-plans" role="group" aria-label="Support options">{plans.map(item => <button type="button" key={item.id} aria-pressed={selected === item.id} onClick={() => setSelected(item.id)}><b>{item.name}</b><strong>{item.price}</strong><small>{item.cadence}</small><span>{item.description}</span></button>)}</div>
    <section className="support-checkout"><h2>{plan.name} support</h2><p>{plan.price} · {plan.cadence}</p>{checkout ? <a href={checkout} target="_blank" rel="noopener noreferrer">Continue to Buy Me a Coffee ↗</a> : <span>Checkout is being set up. No payment will be taken here.</span>}</section>
    <p className="support-note">If you are linking a Satoru membership, use the same email as your Satoru account on Buy Me a Coffee. Membership status changes only after payment is confirmed.</p>
  </main>
}
