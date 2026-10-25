import { useState, useRef } from 'react'

const Icon = ({ name }) => {
  const p = {
    width: 18,
    height: 18,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  }
  switch (name) {
    case 'home':
      return (
        <svg {...p}>
          <path d="M3 11l9-8 9 8" />
          <path d="M5 10v10h14V10" />
        </svg>
      )
    case 'user':
      return (
        <svg {...p}>
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
        </svg>
      )
    case 'heart':
      return (
        <svg {...p}>
          <path d="M20.8 5.6a5.5 5.5 0 0 0-7.8 0L12 6.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 22l8.8-8.6a5.5 5.5 0 0 0 0-7.8z" />
        </svg>
      )
    case 'music':
      return (
        <svg {...p}>
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
        </svg>
      )
    case 'tv':
      return (
        <svg {...p}>
          <rect x="3" y="5" width="18" height="13" rx="2" />
          <path d="M8 21h8" />
        </svg>
      )
    case 'game':
      return (
        <svg {...p}>
          <rect x="2" y="7" width="20" height="11" rx="5" />
          <path d="M7 12h4M9 10v4" />
          <circle cx="16" cy="11" r=".8" />
          <circle cx="18" cy="13" r=".8" />
        </svg>
      )

    case 'musicoff':
      return (
    <svg {...p}>
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
      <path d="M3 3l18 18" />
    </svg>
  )
    case 'menu':
      return (
        <svg {...p} width={16} height={16}>
          <path d="M4 8h16M4 16h10" />
        </svg>
      )
    case 'spark':
      return (
        <svg {...p} width={12} height={12}>
          <path d="M12 3l2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5z" />
        </svg>
      )
    default:
      return null
  }
}

// ====== EDIT DATA KAMU DI SINI ======
const PROFILE = {
  name: 'Aril',
  tagline: 'A little world of anime, games, music, sport & me.',
  about:
    '"Hello, Aril here... or you can call me Ril! He/Him pronouns, 22+. I love yapping, especially about anime, WuWa, Chelsea, F1, MLBB, and my daily life..."',
}

const FAVORITES = {
  anime: {
    label: 'Anime',
    items: [
      { src: 'foto/frieren.jpg', caption: 'Frieren: Beyond Journey\'s End' },
      { src: 'foto/charlotte.jpg', caption: 'Charlotte' },
      { src: 'foto/ReZero.jpg', caption: 'Re:Zero' },
      { src: 'foto/shangrila.jpg', caption: 'Shangri-La Frontier' },
      { src: 'foto/aot.jpg', caption: 'Shingeki no Kyojin' },
    ],
  },
  waifu: {
    label: 'Waifu',
    items: [
      { src: 'waifu/waifu1.jpg', caption: 'Kato Megumi' },
      { src: 'waifu/waifu2.jpg', caption: 'Nao tomori' },
      { src: 'waifu/waifu3.jpg', caption: 'Shikimori' },
      { src: 'waifu/waifu4.jpg', caption: 'Nakano Nino' },
      { src: 'waifu/waifu5.jpg', caption: 'Furina' },
    ],
  },
  music: {
    label: 'Music',
    items: [
      { src: 'music/Ghost.jpg', caption: 'Ghost - Justin Bieber' },
      { src: 'music/perfect.jpg', caption: 'Perfect - Ed Sheeran' },
      { src: 'music/multo.jpg', caption: 'Multo - Cup Of Joe' },
      { src: 'music/back.jpg', caption: 'Back to Friends - sombr' },
      { src: 'music/please.jpg', caption: 'Merry Christmas, Please Dont Call - Bleachers' },
    ],
  },
  couple: {
    label: 'Couple',
    items: [
      { src: 'foto/cp1.jpg', caption: 'koharu fuyutsuki x kakeru sorano' },
      { src: 'foto/cp2.jpg', caption: 'kato megumi x aki tomoya' },
      { src: 'foto/cp3.jpg', caption: 'yamada x nishi' },
      { src: 'foto/cp4.jpg', caption: 'david x lucy' },
      { src: 'foto/cp5.jpg', caption: 'mai sakurajima x sakuta' },
    ],
  },
}

const HOBBIES = [
  { title: 'Anime', icon: 'tv' },
  { title: 'Games', icon: 'game' },
  { title: 'Music', icon: 'music' },
  { title: 'Coding', icon: 'spark' },
]

const GALLERY = [
  { src: 'hobi/chelsea1.jpg', caption: 'Chelsea 💙' },
  { src: 'hobi/basket.jpeg', caption: '3 point :"' },
  { src: 'hobi/evos1.jpeg', caption: 'aku evos' },
  { src: 'hobi/voli1.jpeg', caption: 'Voly with my homies' },
  { src: 'hobi/chelsea2.jpeg', caption: 'Chelsea pas di GBK' },
  { src: 'hobi/tifosi.jpeg', caption: 'aku tifosi' },
  { src: 'hobi/wuwa.jpeg', caption: 'Peak Story Wuwa' },
  { src: 'hobi/nature.jpeg', caption: 'Mode Penghijauan' },
  { src: 'hobi/kucing1.jpeg', caption: 'Kucing plenger 1' },
  { src: 'hobi/sepeda.jpeg', caption: 'Biar kaya jay jo' },
  { src: 'hobi/minum.jpeg', caption: 'fav drink' },
  { src: 'hobi/kucing.jpeg', caption: 'kucing plenger 2' },
  { src: 'hobi/chelsea3.jpeg', caption: 'pov pas chelsea kalah' },
  { src: 'hobi/palmer.jpeg', caption: 'cold palmer 🥶' },
]
// ====================================

function Home({ go }) {
  const [imgOk, setImgOk] = useState(true)
  return (
    <>
      <div className="hero">
        {imgOk && (
          <img
            src={`${import.meta.env.BASE_URL}himmel.gif`}
            alt="Aril"
            onError={() => setImgOk(false)}
          />
        )}
        {!imgOk && <div className="hero-fallback">Taruh gambar di public/aril.jpg</div>}
        
      </div>

      <div className="intro">
        <p className="eyebrow">WELCOME TO MY WORLD</p>
        <h1>Hello, I'm {PROFILE.name}!</h1>
        <p className="tagline">{PROFILE.tagline}</p>
        <button className="cta" onClick={() => go('about')}>
          Explore My World <Icon name="spark" />
        </button>
      </div>

      <div className="quick">
  <button
    className="card photo-card"
    onClick={() => go('anime')}
    style={{ backgroundImage: `url(${import.meta.env.BASE_URL}foto_BG/FrierenBG.jpg)` }}
  >
    <strong>My Favorite</strong>
    <span>Anime-Waifu-Music</span>
  </button>

  <button
    className="card photo-card"
    onClick={() => go('hobbies')}
    style={{ backgroundImage: `url(${import.meta.env.BASE_URL}foto_BG/Haikyuu.jpg)` }}
  >
    <strong>Things I Love</strong>
    <span>A collection of my favorites</span>
  </button>
</div>
    </>
  )
}

function Section({ title, subtitle, children }) {
  return (
    <section className="section">
      <h2>{title}</h2>
      {subtitle && <p className="sub">{subtitle}</p>}
      {children}
    </section>
  )
}

export default function App() {
  const [page, setPage] = useState('home')
  const [favTab, setFavTab] = useState('anime')
  const audioRef = useRef(null)
const [playing, setPlaying] = useState(false)

const toggleMusic = () => {
  const a = audioRef.current
  if (!a) return
  if (playing) {
    a.pause()
    setPlaying(false)
  } else {
    a.play().then(() => setPlaying(true)).catch(() => {})
  }
}

  const nav = [
    { id: 'home', icon: 'home', label: 'Home' },
    { id: 'about', icon: 'user', label: 'About' },
    { id: 'anime', icon: 'heart', label: 'Favorites' },
    { id: 'hobbies', icon: 'game', label: 'Hobbies' },
  ]

  return (
    <div className="app">
      <div className="shell">
        <header className="topbar">
  <span>ARIL'S WORLD</span>
  <button
    className={`music-btn ${playing ? 'on' : ''}`}
    onClick={toggleMusic}
    aria-label={playing ? 'Matikan musik' : 'Nyalakan musik'}
  >
    <Icon name={playing ? 'music' : 'musicoff'} />
  </button>
  <audio
    ref={audioRef}
    src={`${import.meta.env.BASE_URL}music/evancall.mp3`}
    loop
    preload="none"
  />
</header>

        <main className="content">
          {page === 'home' && <Home go={setPage} />}

          {page === 'about' && (
  <Section title="About Me" subtitle="Sedikit tentang aku">
    <div className="about-row">
      <p className="about-text">{PROFILE.about}</p>
      <img
        className="about-img"
        src={`${import.meta.env.BASE_URL}foto/Himmel.png`}
        alt="Himmel"
      />
    </div>

    <div className="about-row">
      <img
        className="about-img"
        src={`${import.meta.env.BASE_URL}foto/Frieren.png`}
        alt="Frieren"
      />
      <div className="about-text right">
        <h3>Basic DNI</h3>
        <p>Zionist, -17, 02 Voters, Problematic, Racist, Pedophilia</p>
      </div>
    </div>
  </Section>
)}

          {page === 'anime' && (
  <Section title="My Favorites" >
    <div className="tabs">
      {Object.entries(FAVORITES).map(([key, f]) => (
        <button
          key={key}
          className={`tab ${favTab === key ? 'active' : ''}`}
          onClick={() => setFavTab(key)}
        >
          {f.label}
        </button>
      ))}
    </div>

    <div className="fav-grid">
      {FAVORITES[favTab].items.map((it, i) => (
        <figure key={i} className={`fav-item ${i === 0 ? 'featured' : ''}`}>
          <div className="fav-box">
            <span className="rank">#{i + 1}</span>
            <img
              src={`${import.meta.env.BASE_URL}${it.src}`}
              alt={it.caption}
              loading="lazy"
            />
          </div>
          <figcaption>{it.caption}</figcaption>
        </figure>
      ))}
    </div>
  </Section>
)}


              {page === 'hobbies' && (
  <Section title="My Hobbies" subtitle="Things I love">
    

    {/* ===== TAMBAHAN: GALLERY ===== */}
    <h3 className="gallery-title">Gallery</h3>
    <div className="gallery">
      {GALLERY.map((g, i) => (
        <figure key={i} className="photo">
          <div className="photo-box">
            <img
              src={`${import.meta.env.BASE_URL}${g.src}`}
              alt={g.caption}
              loading="lazy"
            />
          </div>
          <figcaption>{g.caption}</figcaption>
        </figure>
      ))}
    </div>
  </Section>
)}
        

          
        </main>

        <nav className="bottom-nav">
          {nav.map((n) => (
            <button
              key={n.id}
              aria-label={n.label}
              className={page === n.id ? 'active' : ''}
              onClick={() => setPage(n.id)}
            >
              <Icon name={n.icon} />
            </button>
          ))}
        </nav>
      </div>
    </div>
  )
}
