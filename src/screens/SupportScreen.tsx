import {useState} from 'react'
import './SupportScreen.scss'

const plans = [
  {id: 'monthly', name: 'Monthly', price: 'US$7', cadence: 'per month', description: 'Monthly access to Satoru.'},
  {id: 'six-month', name: 'Six months', price: 'US$24.99', cadence: 'one-time', description: 'Six months of Satoru access.'},
  {id: 'annual', name: 'Annual', price: 'US$41', cadence: 'per year', description: 'Yearly access to Satoru.'},
] as const

export default function SupportScreen() {
  const requested = new URLSearchParams(window.location.search).get('support') || 'monthly'
  const [selected, setSelected] = useState(plans.some(plan => plan.id === requested) ? requested : 'monthly')
  const plan = plans.find(item => item.id === selected) || plans[0]
  const appUrl = import.meta.env.VITE_SATORU_URL || 'https://otaku-indol.vercel.app/'

  return <main className="support-page">
    <header><a href="/" aria-label="Back to Brayhan's website">←</a><span>Brayhan De Aza</span></header>
    <section className="support-intro"><span>SATORU MEMBERSHIP</span><h1>Choose your plan.</h1><p>Sign in to Satoru to choose a plan. Payment opens securely in Stripe Checkout.</p></section>
    <div className="support-plans" role="group" aria-label="Support options">{plans.map(item => <button type="button" key={item.id} aria-pressed={selected === item.id} onClick={() => setSelected(item.id)}><b>{item.name}</b><strong>{item.price}</strong><small>{item.cadence}</small><span>{item.description}</span></button>)}</div>
    <section className="support-checkout"><h2>{plan.name} membership</h2><p>{plan.price} · {plan.cadence}</p><a href={appUrl}>Open Satoru to pay ↗</a></section>
    <p className="support-note">Your membership is linked to your Satoru account. It becomes active after Stripe confirms payment.</p>
  </main>
}
