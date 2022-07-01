import './styles.css'

export function Card() {
  return (
    <div className="card">
      <div className="card__content">
        <div className="card__face card__face--front">?</div>
        <div className="card__face card__face--back">🐍</div>
      </div>
    </div>
  )
}