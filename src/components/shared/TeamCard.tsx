import { socialLinks } from '../../data/site'

type TeamMember = {
  name: string
  role: string
  image: string
  note?: string
}

type TeamCardProps = {
  member: TeamMember
  offset?: boolean
  className?: string
}

export function TeamCard({ member, offset = false, className = '' }: TeamCardProps) {
  return (
    <div className={['mil-up', offset ? 'mil-team-offset' : '', className].filter(Boolean).join(' ')}>
      <div className="mil-team-card">
        <img src={member.image} alt={member.note ?? `${member.name} portrait`} loading="lazy" />
        <div className="mil-description">
          <div className="mil-description-text">
            <h5 className="mil-muted mil-mb-10">{member.name}</h5>
            <div className="mil-secrc-text mil-light-soft mil-mb-30">{member.role}</div>
            <ul className="mil-social-icons mil-center">
              {socialLinks.map((social) => (
                <li key={`${member.name}-${social.label}`}>
                  <a href={social.href} target="_blank" rel="noreferrer" aria-label={`${member.name} on ${social.label}`}>
                    <i className={`fa-brands fa-${social.icon}`} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {member.note ? <p className="mil-team-note mil-dark-soft">{member.note}</p> : null}
    </div>
  )
}
