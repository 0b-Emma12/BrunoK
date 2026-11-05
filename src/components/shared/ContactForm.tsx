import { useId, useState, type FormEvent } from 'react'

type FormState = {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

const initialState: FormState = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
}

export function ContactForm() {
  const baseId = useId()
  const [form, setForm] = useState<FormState>(initialState)
  const [status, setStatus] = useState<'idle' | 'error' | 'success'>('idle')
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})

  const update = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
    if (status !== 'idle') setStatus('idle')
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors: Partial<Record<keyof FormState, string>> = {}
    if (!form.name.trim()) nextErrors.name = 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.'
    }
    if (form.phone.trim() && !/^[+()\d\s-]{7,}$/.test(form.phone.trim())) {
      nextErrors.phone = 'Please enter a valid phone number.'
    }
    if (!form.message.trim()) nextErrors.message = 'Please tell us about your enquiry.'

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) {
      setStatus('error')
      return
    }

    setStatus('success')
    setForm(initialState)
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="row">
        <div className="col-md-6">
          <div className="mil-group-input">
            <label htmlFor={`${baseId}-name`}>Name *</label>
            <input
              id={`${baseId}-name`}
              name="name"
              type="text"
              autoComplete="name"
              value={form.name}
              onChange={(event) => update('name', event.target.value)}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? `${baseId}-name-error` : undefined}
            />
            {errors.name ? (
              <p className="form-message error" id={`${baseId}-name-error`}>
                {errors.name}
              </p>
            ) : null}
          </div>
        </div>
        <div className="col-md-6">
          <div className="mil-group-input">
            <label htmlFor={`${baseId}-email`}>Email *</label>
            <input
              id={`${baseId}-email`}
              name="email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={(event) => update('email', event.target.value)}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? `${baseId}-email-error` : undefined}
            />
            {errors.email ? (
              <p className="form-message error" id={`${baseId}-email-error`}>
                {errors.email}
              </p>
            ) : null}
          </div>
        </div>
        <div className="col-md-6">
          <div className="mil-group-input">
            <label htmlFor={`${baseId}-phone`}>Phone</label>
            <input
              id={`${baseId}-phone`}
              name="phone"
              type="tel"
              autoComplete="tel"
              value={form.phone}
              onChange={(event) => update('phone', event.target.value)}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? `${baseId}-phone-error` : undefined}
            />
            {errors.phone ? (
              <p className="form-message error" id={`${baseId}-phone-error`}>
                {errors.phone}
              </p>
            ) : null}
          </div>
        </div>
        <div className="col-md-6">
          <div className="mil-group-input">
            <label htmlFor={`${baseId}-subject`}>Event or enquiry type</label>
            <input
              id={`${baseId}-subject`}
              name="subject"
              type="text"
              value={form.subject}
              onChange={(event) => update('subject', event.target.value)}
            />
          </div>
        </div>
        <div className="col-12">
          <div className="mil-group-input">
            <label htmlFor={`${baseId}-message`}>Enquiry details *</label>
            <textarea
              id={`${baseId}-message`}
              name="message"
              rows={6}
              value={form.message}
              onChange={(event) => update('message', event.target.value)}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? `${baseId}-message-error` : undefined}
            />
            {errors.message ? (
              <p className="form-message error" id={`${baseId}-message-error`}>
                {errors.message}
              </p>
            ) : null}
          </div>
        </div>
      </div>
      <button type="submit" className="mil-button mil-arrow-place">
        Send enquiry
      </button>
      <p className={`form-message contact-form-status ${status}`} aria-live="polite">
        {status === 'error' ? 'Please check the highlighted fields.' : null}
        {status === 'success'
          ? 'Enquiry form preview only. Source Management must connect a verified inbox before launch.'
          : null}
      </p>
    </form>
  )
}
