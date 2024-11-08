import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true
  },
  {
    userName: 'pheralb',
    name: 'Pedro H.',
    isFollowing: false
  },
  {
    userName: 'KellyYT',
    name: 'Raquel Yagüe',
    isFollowing: true
  },
  {
    userName: 'TMChein',
    name: 'Tomas',
    isFollowing: false
  }
]

export function App() {
  return (
    <section>
      <h1 style={{color: 'white', paddingBottom: '16px'}}>Recomendaciones para seguir</h1>
      {
        users.map(({userName, name, isFollowing}) => (
          <TwitterFollowCard
            key = {userName}
            userName = {userName}
            initialIsFollowing = {isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}
