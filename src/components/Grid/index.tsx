import { Card, CardProps } from '../Card'
import './styles.css'

export interface GridProps {
  cards: CardProps[];
}

export function Grid({cards}: GridProps) {
  return (
    <div className="grid">
      {cards.map(card => {
        return <Card {...card} key={card.id} />
      })}
    </div>
  )
}