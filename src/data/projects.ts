export type ReleaseType = 'single' | 'album' | 'ep' | 'collaboration' | 'session'

export type StreamingPlatform =
  | 'spotify'
  | 'appleMusic'
  | 'youtubeMusic'
  | 'youtube'
  | 'audiomack'
  | 'shazam'
  | 'deezer'
  | 'mdundo'

export type StreamingLinks = Partial<Record<StreamingPlatform, string>>

export type Project = {
  id: string
  slug: string
  title: string
  releaseType: ReleaseType
  featuredArtists: string[]
  artistCredit: string
  releaseDate?: string
  streamingLinks?: StreamingLinks
  category: string
  date: string
  releaseYear?: number
  client: string
  author: string
  cover?: string
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
  publishedAt?: string
  artistCredit?: string
}

const verifiedYouTubeVideos: Record<string, YouTubeMusicVideo[]> = {
  'girl-like-you': [
    { id: 'k-k37_p3Y-w', title: 'GIRL LIKE YOU, BRUNO K, Y TUD, NEMESIS', kind: 'Music video' },
  ],
  'jalia-walder': [
    { id: 'ulJGmrC1JRc', title: 'Jalia by Bruno K (OFFICIAL 4K VIDEO)', kind: 'Official music video' },
  ],
  tonta: [
    { id: 'vdyk-OULSGw', title: 'Bruno K - Tonta (Official Video)', kind: 'Official music video' },
  ],
  'make-some-love': [
    {
      id: 'AbySP_IERjE',
      title: 'MAKE SOME LOVE- BRUNO K OFFICIAL MUSIC VIDEO- NEW UGANDA MUSIC 2016',
      kind: 'Official music video',
    },
  ],
  officially: [
    { id: 'iLzukrV4gfQ', title: 'Bruno K Officially Ugandan Music', kind: 'Music video' },
  ],
  'still-into-you': [
    { id: 'EIepaYRgDLI', title: 'STILL INTO YOU (OFFICIAL VIDEO) BY BRUNO K', kind: 'Official music video' },
  ],
  'turning-me-on': [
    { id: 'qtV3jbA2GYo', title: 'Bruno K Ug - Turning Me On', kind: 'Music video' },
  ],
  power: [
    { id: 'oR8PMpTeAwQ', title: 'Power by Bruno K ft Netron Matt', kind: 'Music video' },
  ],
  'where-you-been-at': [
    { id: 'U2FaE5CqCjo', title: 'Where You Been At - Bruno K', kind: 'YouTube Short' },
  ],
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

const verifiedMdundoTrackIds: Record<string, string> = {
  nakulyako: '2675116',
  omuwala: '1959936',
  'like-you': '6367347',
  'ebigambo-remix': '4901269',
  faridah: '1959914',
  ntaawa: '1275313',
  'njagala-love': '5124537',
  'fake-people': '5124535',
  'girl-like-you': '1959915',
  'walungiwa-acoustic-sessions': '2102552',
  'nkooye-okulowooza': '69429',
  'jalia-walder': '3054831',
  tonta: '1624005',
  'make-some-love': '69428',
  officially: '2178915',
  'turning-me-on-remix': '1959927',
  'still-into-you': '1959923',
  'she-left-me': '1959921',
  'he-s-born': '1959916',
  'juicy-acoustic-cover': '1959917',
  'dance-for-me': '1959912',
  'turning-me-on': '1959937',
  power: '1959919',
}

type ReleaseRecord = {
  title: string
  category: string
  releaseType?: ReleaseType
  releaseDate?: string
  year?: number
  credit?: string
  artistCredit?: string
  featuredArtists?: string[]
  streamingLinks?: StreamingLinks
  tags?: string[]
  isMajorHit?: boolean
  metadataNote?: string
  description?: string[]
}

const releases: ReleaseRecord[] = [
  {
    title: 'Where You Been At',
    category: 'Solo single',
    year: 2015,
    isMajorHit: true,
    description: [
      'In 2015, Ugandan singer Bruno K (Bruno Kiggundu) launched his professional music career and breakthrough single “Where You Been At” after finishing as the runner-up in the Ugandan edition of the Airtel Trace Music Stars competition.',
      'Official cover artwork and unconfirmed release details should be added by management after verification.',
    ],
  },
  { title: 'One for the Road', category: 'Solo single', isMajorHit: true, streamingLinks: { spotify: 'https://open.spotify.com/track/2mVv56tteUDYdDWRY5LyU8' } },
  { title: 'Faridah', category: 'Solo single', isMajorHit: true, streamingLinks: { spotify: 'https://open.spotify.com/track/3zPZcjlVYybtDkyBf0LYDq' } },
  { title: 'Ntaawa', category: 'Solo single', isMajorHit: true, streamingLinks: { spotify: 'https://open.spotify.com/track/3D91IL3ueQSlLtl0ySPhUA' } },
  { title: 'Nkooye Okulowooza', category: 'Solo single', isMajorHit: true, streamingLinks: { spotify: 'https://open.spotify.com/track/3ypNyOoCUP6zjJoxZ4enoO' } },
  { title: 'Ayingidewo', category: 'Solo single', isMajorHit: true, streamingLinks: { spotify: 'https://open.spotify.com/track/04z4vIMSszyCjzzEhV9hm9' } },
  { title: 'Akaboozi', category: 'Solo single', isMajorHit: true },
  { title: 'Wanokiriza', category: 'Solo single' },
  { title: 'Ebiro Bya Love', category: 'Solo single' },
  { title: 'Ffena', category: 'Solo single' },
  { title: 'See Beauty', category: 'Solo single', streamingLinks: { spotify: 'https://open.spotify.com/track/5nhxIVGXEx4cyXQlzEjvqK' } },
  { title: 'Wonder Woman', category: 'Solo single', streamingLinks: { spotify: 'https://open.spotify.com/track/03QW4SsazuEcGkW2i1w6GA' } },
  { title: 'Fake People', category: 'Solo single' },
  { title: 'Emergency', category: 'Solo single', metadataNote: 'Shazam is reported to list this as a 2026 release; the date has not been independently confirmed.' },
  { title: 'Milele', category: 'Solo single' },
  { title: 'Dagala', category: 'Solo single' },
  { title: 'Girl Like You', category: 'Solo single' },
  { title: 'Jalia Walder', category: 'Solo single' },
  { title: 'Tonta', category: 'Solo single' },
  { title: 'Make Some Love', category: 'Solo single' },
  { title: 'Officially', category: 'Solo single' },
  { title: 'Still Into You', category: 'Solo single' },
  { title: 'She Left Me', category: 'Solo single' },
  { title: 'Dance for Me', category: 'Solo single' },
  { title: 'Turning Me On', category: 'Solo single' },
  { title: 'Power', category: 'Solo single' },
  { title: 'Nze Nkwagala', category: 'Solo single', streamingLinks: { spotify: 'https://open.spotify.com/track/4mhahtcxy9YnkGJrz2biuN' } },
  { title: 'Like You', category: 'Collaboration', credit: 'ft. Cindy Sanyu', streamingLinks: { spotify: 'https://open.spotify.com/track/3BjYGNfJF3QWglhUH6Wb8P' } },
  { title: 'Ayaya', category: 'Collaboration', credit: 'with Mesach Semakula', streamingLinks: { spotify: 'https://open.spotify.com/track/2tDbccJ37FIDQO69QJBxn2' } },
  { title: 'Nakulyako', category: 'Collaboration', credit: 'ft. Gravity Omutujju', streamingLinks: { spotify: 'https://open.spotify.com/track/6DQtTadXhVkKGbfq8cS9yA' } },
  { title: 'Omuwala', category: 'Collaboration', credit: 'ft. Daddy Andre', isMajorHit: true, streamingLinks: { spotify: 'https://open.spotify.com/track/0cyjvuh34FiNl8eIah1skb' } },
  { title: 'Leero Mbaga', category: 'Collaboration', credit: 'with DJ Broadband', streamingLinks: { spotify: 'https://open.spotify.com/track/3dfC50bXMaFzCUptsG1WWH' } },
  { title: 'Kasowole', category: 'Collaboration', credit: 'ft. Lil Pazo', streamingLinks: { spotify: 'https://open.spotify.com/track/407V3zpTE3mMexjfqLzIYc' } },
  { title: 'Kibaluma', category: 'Collaboration', credit: 'ft. Lil Pazo', streamingLinks: { spotify: 'https://open.spotify.com/track/2Qom1ojReHPy4VMbJtaNuO' } },
  { title: 'Nipe Love', category: 'Collaboration', credit: 'ft. Nina Roz', streamingLinks: { spotify: 'https://open.spotify.com/track/2IhQgg9toNukr7C2B0S62O' } },
  { title: 'Njagala Love', category: 'Collaboration', credit: 'ft. Ava Peace', streamingLinks: { spotify: 'https://open.spotify.com/track/6Pw0shcWDi6xiIvePgaL1E' } },
  { title: 'Aliwa', category: 'Collaboration', credit: 'ft. Naava Grey', streamingLinks: { spotify: 'https://open.spotify.com/track/553K5y3Vj9hBp5SigSrHM4' } },
  { title: 'Ebisaanyi', category: 'Collaboration', credit: 'ft. Kabuye Ssemboga', streamingLinks: { spotify: 'https://open.spotify.com/track/6hfJIkZuaRRrlkeATKosbz' } },
  {
    title: 'Sherry',
    category: 'Collaboration',
    credit: 'featured by Buka Chimey',
    artistCredit: 'Buka Chimey · Bruno K',
    featuredArtists: ['Bruno K'],
    streamingLinks: { spotify: 'https://open.spotify.com/track/60plWUj4b1rdSN3CSkr9b1' },
  },
  { title: 'Ebigambo Remix', category: 'Collaboration', credit: 'ft. Kabuye Ssemboga', streamingLinks: { spotify: 'https://open.spotify.com/track/3qxmjgunBoVA2P79G6Qz9Y' } },
  { title: 'Sidung', category: 'Collaboration', credit: 'with Real Dance Crew', streamingLinks: { spotify: 'https://open.spotify.com/track/4cw8RExyWvy1b5DqyfSGN7' } },
  { title: 'Turning Me On Remix', category: 'Collaboration', credit: 'ft. Rabadaba' },
  { title: 'Wankuba Remix', category: 'Collaboration', credit: 'ft. Pallaso' },
  { title: 'Ruhanga Ishitwe', category: 'Gospel & inspirational', credit: 'ft. Aline Gahongayire', streamingLinks: { spotify: 'https://open.spotify.com/track/76w2X0Xk9QnrSF5jbzNbcN' } },
  { title: "He's Born", category: 'Gospel & inspirational', credit: 'ft. AKA & St. Nelly Sade' },
  { title: 'Obeerawo Mukama', category: 'Gospel & inspirational', streamingLinks: { spotify: 'https://open.spotify.com/track/6GmFEBHczJ0cQDbL0sYnmi' } },
  { title: 'Walungiwa Acoustic Sessions', category: 'Acoustic session', credit: 'ft. Weasel Manizo', tags: ['Acoustic sessions'], streamingLinks: { spotify: 'https://open.spotify.com/track/4FTGZDIvtcUBQ61NaADpuR' } },
  { title: 'Juicy Acoustic Cover', category: 'Acoustic session', tags: ['Acoustic sessions'] },
]

export const projects: Project[] = releases.map((release) => {
  const slug = release.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
  const youtubeVideos = verifiedYouTubeVideos[slug]
  const streamingLinks = {
    ...release.streamingLinks,
    ...(verifiedMdundoTrackIds[slug]
      ? {
          mdundo: `https://play.mdundo.com/artist/27717/Bruno-K?utm_source=mdundo&utm_medium=geo&utm_campaign=geo_redirect#autoplay-${verifiedMdundoTrackIds[slug]}`,
        }
      : {}),
    ...(youtubeVideos?.[0]
      ? { youtube: `https://www.youtube.com/watch?v=${youtubeVideos[0].id}` }
      : {}),
  }

  return {
    id: slug,
    slug,
    title: release.title,
    releaseType:
      release.releaseType ??
      (release.category === 'Collaboration'
        ? 'collaboration'
        : release.category === 'Acoustic session'
          ? 'session'
          : 'single'),
    featuredArtists:
      release.featuredArtists ??
      (release.credit && !/^featured by\s*/i.test(release.credit)
        ? [release.credit.replace(/^(?:ft\.|with)\s*/i, '').trim()]
        : []),
    artistCredit:
      release.artistCredit ??
      (release.credit && !/^featured by\s*/i.test(release.credit)
        ? `Bruno K · ${release.credit.replace(/^(?:ft\.|with)\s*/i, '').trim()}`
        : 'Bruno K'),
    ...(release.releaseDate ? { releaseDate: release.releaseDate } : {}),
    ...(Object.keys(streamingLinks).length ? { streamingLinks } : {}),
    category: release.category,
    date: release.releaseDate ?? (release.year ? String(release.year) : 'Release date not confirmed'),
    ...(release.year ? { releaseYear: release.year } : {}),
    client: release.credit ?? 'Not applicable',
    author: 'Bruno K',
    gallery: [],
    intro: release.credit
      ? `${release.title} — ${release.credit}.`
      : `${release.title} by Bruno K.`,
    description: release.description ?? [
      release.year
        ? `${release.title} was released in ${release.year} and marked an important milestone in Bruno K's mainstream music journey.`
        : `${release.title} is listed in the artist profile supplied for this website.`,
      'Official cover artwork and unconfirmed release details should be added by management after verification.',
    ],
    tags: [
      ...(release.isMajorHit ? ['Major hits'] : []),
      release.category === 'Solo single' ? 'Singles' : release.category,
      ...(release.tags ?? []),
      ...(release.credit?.toLowerCase().includes('featured by') ? ['Featured appearances'] : []),
    ],
    ...(release.isMajorHit ? { isMajorHit: true } : {}),
    ...(release.metadataNote ? { metadataNote: release.metadataNote } : {}),
    ...(youtubeVideos ? { youtubeVideos } : {}),
  }
})

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
