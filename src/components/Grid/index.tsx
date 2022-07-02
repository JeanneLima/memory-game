import { useState } from 'react';
import { duplicateRegenerateSortArray } from '../../utils/card-utils';
import { Card, CardProps } from '../Card'
import './styles.css'

export interface GridProps {
  cards: CardProps[];
}

export function Grid({cards}: GridProps) {
  const [stateCards, setStateCards] = useState(() => {
    return duplicateRegenerateSortArray(cards)
  })

  const handleClick = (id: string) => {
    const newStateCards = stateCards.map((card: CardProps) => {
      // Se o id do card não for o clicado, náo faz nada
      if (card.id !== id) return card;

      // Se o card não estver virado, não faz nada
      if (card.flipped) return card;

      // Vira o card
      card.flipped = true;

      return card;
    })

    setStateCards(newStateCards)
  }

  return (
    <div className="grid">
      {stateCards.map((card: CardProps) => {
        return <Card {...card} key={card.id} handleClick={handleClick} />
      })}
    </div>
  )
}