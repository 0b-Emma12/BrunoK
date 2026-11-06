import type { ReleaseType } from '../../data/projects'

const releaseLabels: Record<ReleaseType, string> = {
  single: 'Single',
  album: 'Album',
  ep: 'EP',
  collaboration: 'Collaboration',
  session: 'Session',
}

type ReleaseArtworkProps = {
  title: string
  releaseType: ReleaseType
  src?: string
  className?: string
}

export function ReleaseArtwork({ title, releaseType, src, className = '' }: ReleaseArtworkProps) {
  if (src) {
    return <img className={className} src={src} alt={`${title} release artwork`} loading="lazy" />
  }

  return (
    <div
      className={`release-artwork-fallback ${className}`.trim()}
      role="img"
      aria-label={`Official artwork for ${title} has not been supplied`}
    >
      <i className="fa-solid fa-music" aria-hidden="true" />
      <span>Official artwork not supplied</span>
      <span className="release-artwork-type">{releaseLabels[releaseType]}</span>
    </div>
  )
}
