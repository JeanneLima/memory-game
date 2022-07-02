import { useRef, useState } from 'react';
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
  const firstSelectedCard = useRef<CardProps | null>(null)
  const secondSelectedCard = useRef<CardProps | null>(null)
  const unflipCards = useRef(false)

  const handleClick = (id: string) => {
    const newStateCards = stateCards.map((card: CardProps) => {
      // Se o id do card não for o clicado, náo faz nada
      if (card.id !== id) return card;

      // Se o card não estver virado, não faz nada
      if (card.flipped) return card;

      // Desvira possíveis cards errados (diferentes entre si)
      if (unflipCards.current && firstSelectedCard.current && secondSelectedCard.current) {
        // O jogador errou
        firstSelectedCard.current.flipped = false
        secondSelectedCard.current.flipped = false
        firstSelectedCard.current = null
        secondSelectedCard.current = null
        unflipCards.current = false
      }

      // Vira o card
      card.flipped = true;

      // Configura primeiro e segundo card clicados
      if (firstSelectedCard.current === null) {
        firstSelectedCard.current = card;
      } else if (secondSelectedCard.current === null) {
        secondSelectedCard.current = card;
      }

      // Se os dois cards estiverem virados, checar se são iguais
      if (firstSelectedCard.current && secondSelectedCard.current) {
        if (firstSelectedCard.current.back === secondSelectedCard.current.back) {
          // O jogador acertou
          firstSelectedCard.current = null
          secondSelectedCard.current = null
        } else {
          // O jogador errou
          unflipCards.current = true
        }
      }

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