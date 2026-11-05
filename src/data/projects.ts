import { assetUrl } from '../utils/assets'

export type Project = {
  slug: string
  title: string
  category: string
  date: string
  releaseYear?: number
  client: string
  author: string
  cover: string
  gallery: string[]
  intro: string
  description: string[]
  tags: string[]
  isMajorHit?: boolean
  metadataNote?: string
  youtubeVideos?: YouTubeMusicVideo[]
}

export type YouTubeMusicVideo = {
  id: string
  title: string
  kind: string
  publishedAt: string
  artistCredit?: string
}

const artworkPlaceholder = assetUrl('/assets/media/2023/11/project-1-1.jpg')

const verifiedYouTubeVideos: Record<string, YouTubeMusicVideo[]> = {
  milele: [
    { id: 'wFyOx4DY7Qs', title: 'Milele - Bruno K', kind: 'Official audio', publishedAt: '2026-10-26' },
  ],
  'see-beauty': [
    { id: 'cSV1Jo6JTSY', title: 'Bruno K - See Beauty [Audio]', kind: 'Official audio', publishedAt: '2026-07-10' },
  ],
  'nze-nkwagala': [
    { id: 'o_wmzbH_IqU', title: 'BRUNO K - Nze Nkwagala [Lyrics Video]', kind: 'Lyrics video', publishedAt: '2026-04-24' },
  ],
  'like-you': [
    { id: 'ekFpvQdscL8', title: 'Like You - Bruno K X Cindy Sanyu [Official Video]', kind: 'Official music video', publishedAt: '2025-12-31' },
    { id: 'uypWP-EyPTk', title: 'Like You - Bruno K X Cindy Sanyu [Official Lyrics Video]', kind: 'Lyrics video', publishedAt: '2025-12-18' },
  ],
  'ruhanga-ishitwe': [
    { id: 'yMo0l5DFfYY', title: 'RUHANGA ISHITWE', kind: 'YouTube Short', publishedAt: '2025-10-15' },
    { id: '0um4EbdRW4k', title: 'Ruhanga Ishitwe by Aline Gahongayire & Bruno K [Official Visualizer]', kind: 'Official visualizer', publishedAt: '2025-10-08' },
  ],
  'fake-people': [
    { id: 'FnbX074oLO4', title: 'Bruno K - Fake people (VISUALIZER)', kind: 'Official visualizer', publishedAt: '2025-05-31' },
  ],
  kibaluma: [
    {
      id: '6c4acwWsW5k',
      title: 'Kibaluma Ft Boyz Dormitory (Ekiboozi Concert)',
      kind: 'Live performance',
      publishedAt: '2025-06-05',
      artistCredit: 'Bruno K · Boyz Dormitory',
    },
  ],
  ayaya: [
    { id: 'ghN8AnQiKnc', title: 'Ayaya - Bruno K & Mesach Semakula (Official Music Video)', kind: 'Official music video', publishedAt: '2025-07-21' },
  ],
  aliwa: [
    { id: 'coRRp6BIl_o', title: 'Aliwa live performance with Naava Grey at Ekiboozi Concert', kind: 'Live performance', publishedAt: '2025-07-09' },
  ],
  faridah: [
    { id: 'GiCCpM4zx1g', title: 'Bruno K performs Faridah for Faridah Nakazibwe on stage', kind: 'Live performance', publishedAt: '2025-06-07' },
  ],
}

const releases: {
  title: string
  category: string
  year?: number
  credit?: string
  tags?: string[]
  isMajorHit?: boolean
  metadataNote?: string
}[] = [
  { title: 'Where You Been At', category: 'Solo single', year: 2015, isMajorHit: true },
  { title: 'One for the Road', category: 'Solo single', isMajorHit: true },
  { title: 'Faridah', category: 'Solo single', isMajorHit: true },
  {
    title: 'Ntaawa',
    category: 'Solo single',
    isMajorHit: true,
    metadataNote: 'Spotify spells this title “Ntawaa”; confirm the preferred official spelling with management.',
  },
  {
    title: 'Nkooye Okulowooza',
    category: 'Solo single',
    isMajorHit: true,
    metadataNote: 'Spotify spells this title “Nkoye Okulowoza”; confirm the preferred official spelling with management.',
  },
  { title: 'Ayingidewo', category: 'Solo single', isMajorHit: true },
  { title: 'Akaboozi', category: 'Solo single', isMajorHit: true },
  { title: 'Wanokiriza', category: 'Solo single' },
  { title: 'Ebiro Bya Love', category: 'Solo single' },
  { title: 'Ffena', category: 'Solo single' },
  { title: 'See Beauty', category: 'Solo single' },
  { title: 'Wonder Woman', category: 'Solo single' },
  { title: 'Fake People', category: 'Solo single' },
  { title: 'Emergency', category: 'Solo single', year: 2026, metadataNote: 'Shazam is reported to list this as a 2026 release; the Spotify profile snapshot does not corroborate it. Confirm release date and latest-release status with management.' },
  { title: 'Milele', category: 'Solo single' },
  { title: 'Dagala', category: 'Solo single' },
  { title: 'Nze Nkwagala', category: 'Solo single' },
  { title: 'Like You', category: 'Collaboration', credit: 'ft. Cindy Sanyu' },
  { title: 'Ayaya', category: 'Collaboration', credit: 'with Mesach Semakula' },
  { title: 'Nakulyako', category: 'Collaboration', credit: 'ft. Gravity Omutujju' },
  { title: 'Omuwala', category: 'Collaboration', credit: 'ft. Daddy Andre', isMajorHit: true },
  { title: 'Leero Mbaga', category: 'Collaboration', credit: 'with DJ Broadband' },
  { title: 'Kasowole', category: 'Collaboration', credit: 'ft. Lil Pazo' },
  { title: 'Kibaluma', category: 'Collaboration', credit: 'ft. Lil Pazo' },
  { title: 'Nipe Love', category: 'Collaboration', credit: 'ft. Nina Roz' },
  { title: 'Njagala Love', category: 'Collaboration', credit: 'ft. Ava Peace' },
  { title: 'Aliwa', category: 'Collaboration', credit: 'ft. Naava Grey' },
  { title: 'Ebisaanyi', category: 'Collaboration', credit: 'ft. Kabuye Ssemboga' },
  { title: 'Sherry', category: 'Collaboration', credit: 'featured by Buka Chimey' },
  { title: 'Ebigambo Remix', category: 'Collaboration', credit: 'ft. Kabuye Ssemboga' },
  { title: 'Sidung', category: 'Collaboration', credit: 'with Real Dance Crew' },
  { title: 'Turning Me On Remix', category: 'Collaboration', credit: 'ft. Rabadaba' },
  { title: 'Wankuba Remix', category: 'Collaboration', credit: 'ft. Pallaso' },
  { title: 'Ruhanga Ishitwe', category: 'Gospel & inspirational', credit: 'ft. Aline Gahongayire' },
  { title: "He's Born", category: 'Gospel & inspirational', credit: 'ft. AKA & St. Nelly Sade' },
  { title: 'Obeerawo Mukama', category: 'Gospel & inspirational' },
  { title: 'Walungiwa Acoustic Sessions', category: 'Acoustic session', credit: 'ft. Weasel Manizo', tags: ['Acoustic sessions'] },
]

export const projects: Project[] = releases.map((release) => ({
  slug: release.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
  title: release.title,
  category: release.category,
  date: release.year ? String(release.year) : 'Release date not supplied',
  ...(release.year ? { releaseYear: release.year } : {}),
  client: release.credit ?? 'Not applicable',
  author: 'Bruno K',
  cover: artworkPlaceholder,
  gallery: [],
  intro: release.credit
    ? `${release.title} — ${release.credit}.`
    : `${release.title} by Bruno K.`,
  description: [
    release.year
      ? `${release.title} was released in ${release.year} and marked an important milestone in Bruno K's mainstream music journey.`
      : `${release.title} is listed in the artist profile supplied for this website.`,
    'Official cover artwork, unconfirmed release details, and direct track links should be added by management after verification.',
  ],
  tags: [
    ...(release.isMajorHit ? ['Major hits'] : []),
    release.category === 'Solo single' ? 'Singles' : release.category,
    ...(release.tags ?? []),
    ...(release.credit?.toLowerCase().includes('featured by') ? ['Featured appearances'] : []),
  ],
  ...(release.isMajorHit ? { isMajorHit: true } : {}),
  ...(release.metadataNote ? { metadataNote: release.metadataNote } : {}),
  ...(verifiedYouTubeVideos[
    release.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
  ]
    ? {
        youtubeVideos:
          verifiedYouTubeVideos[
            release.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
          ],
      }
    : {}),
}))

export const musicSources = [
  {
    label: 'Spotify',
    href: 'https://open.spotify.com/artist/0DToGxUXxyiGk3sAbwwCtD',
    icon: 'fa-spotify',
    action: 'Explore Bruno K on Spotify',
  },
  {
    label: 'Shazam',
    href: 'https://www.shazam.com/artist/bruno-k/975438412',
    icon: 'fa-shazam',
    action: 'Discover Bruno K on Shazam',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/channel/UCCfCMenaX4vCLpcpYLOSBnA/videos',
    icon: 'fa-youtube',
    action: 'Watch Bruno K on YouTube',
  },
]

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}

export function getProjectNeighbours(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug)
  return {
    previous: projects[(index - 1 + projects.length) % projects.length],
    next: projects[(index + 1) % projects.length],
  }
}
