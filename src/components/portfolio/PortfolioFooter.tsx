import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const DISCORD_USER_ID = '1201047993588142120'

type DiscordPresence = 'online' | 'idle' | 'dnd' | 'offline'

const STATUS_COLOR: Record<DiscordPresence, string> = {
  online:  '#3BA55C',
  idle:    '#FAA81A',
  dnd:     '#ED4245',
  offline: '#747F8D',
}

const STATUS_LABEL: Record<DiscordPresence, string> = {
  online:  'Online',
  idle:    'Idle',
  dnd:     'Do Not Disturb',
  offline: 'Offline',
}

interface LanyardActivity {
  type: number
  name: string
  details?: string
  state?: string
  application_id?: string
  assets?: {
    large_image?: string
    large_text?: string
  }
}

interface LanyardData {
  discord_status: DiscordPresence
  listening_to_spotify: boolean
  spotify: {
    song: string
    artist: string
    album_art_url: string
  } | null
  activities: LanyardActivity[]
}

interface Activity {
  text: string
  detail?: string
  icon?: string
}

function DiscordStatus() {
  const [status,     setStatus]     = useState<DiscordPresence | null>(null)
  const [activities, setActivities] = useState<Activity[]>([])

  useEffect(() => {
    let heartbeatTimer: ReturnType<typeof setInterval> | null = null
    let ws: WebSocket | null = null

    const parseAndSet = (data: LanyardData) => {
      setStatus(data.discord_status)

      const acts: Activity[] = []

      if (data.listening_to_spotify && data.spotify) {
        const artist = data.spotify.artist.replace(/;\s*/g, ', ')
        acts.push({
          text: `${data.spotify.song} · ${artist}`,
          icon: data.spotify.album_art_url || undefined,
        })
      }

      const games = data.activities?.filter(a => a.type === 0) ?? []
      for (const game of games) {
        let icon: string | undefined
        if (game.application_id && game.assets?.large_image) {
          const li = game.assets.large_image
          icon = li.startsWith('mp:external/')
            ? `https://media.discordapp.net/external/${li.slice('mp:external/'.length)}`
            : `https://cdn.discordapp.com/app-assets/${game.application_id}/${li}.png`
        }
        acts.push({ text: game.name, detail: game.details || game.state, icon })
      }

      setActivities(acts)
    }

    const connect = () => {
      ws = new WebSocket('wss://api.lanyard.rest/socket')

      ws.onmessage = (event) => {
        const msg = JSON.parse(event.data)

        // op 1 = HELLO — start heartbeat, then subscribe
        if (msg.op === 1) {
          heartbeatTimer = setInterval(() => {
            ws?.send(JSON.stringify({ op: 3 }))
          }, msg.d.heartbeat_interval)

          ws?.send(JSON.stringify({
            op: 2,
            d: { subscribe_to_id: DISCORD_USER_ID },
          }))
        }

        // op 0 = EVENT (INIT_STATE or PRESENCE_UPDATE)
        if (msg.op === 0) {
          parseAndSet(msg.d as LanyardData)
        }
      }

      ws.onclose = () => {
        if (heartbeatTimer) clearInterval(heartbeatTimer)
        // reconnect after 3s if socket closes unexpectedly
        setTimeout(connect, 3_000)
      }
    }

    connect()

    return () => {
      if (heartbeatTimer) clearInterval(heartbeatTimer)
      ws?.close()
    }
  }, [])

  return (
    <div className="pf-footer__discord">
      <span
        className="pf-footer__discord-dot"
        style={{ background: status ? STATUS_COLOR[status] : STATUS_COLOR.offline }}
        data-online={status === 'online' ? 'true' : undefined}
        title={status ? STATUS_LABEL[status] : 'Discord'}
      />
      <span className="pf-footer__discord-name">kalyan.gupta</span>
      {activities.length > 0 && (
        <div className="pf-footer__activities">
          {activities.map((a, i) => (
            <span key={i} className="pf-footer__activity-pill">
              {a.icon && (
                <img src={a.icon} alt="" className="pf-footer__activity-icon" />
              )}
              <span className="pf-footer__activity-text">{a.text}</span>
              {a.detail && (
                <span className="pf-footer__activity-detail">· {a.detail}</span>
              )}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

export function PortfolioFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="pf-footer">
      <div className="pf-container">
        <motion.div
          className="pf-footer__inner"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="pf-footer__left">
            <span className="pf-footer__year">&copy; {year}</span>
            <span className="pf-footer__name">Kalyan Gupta</span>
            <DiscordStatus />
          </div>
          <div className="pf-footer__right">
            <div className="pf-footer__socials">
              {[
                { label: 'GitHub',     href: 'https://github.com/kalyangupta12' },
                { label: 'LinkedIn',   href: 'https://linkedin.com/in/kalyangupta12' },
                { label: 'devplexity', href: 'https://devplexity.com' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="pf-footer__social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a href="mailto:kalyangupta2002@gmail.com" className="pf-footer__email">
              kalyangupta2002@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
