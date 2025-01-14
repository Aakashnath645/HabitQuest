interface PointsDisplayProps {
  points: number
}

export function PointsDisplay({ points }: PointsDisplayProps) {
  return (
    <div className="pixel-box p-4 bg-blue-800 text-center">
      <div className="text-2xl font-bold text-yellow-400">Score: {points}</div>
      <div className="text-sm text-white">Quest Points</div>
    </div>
  )
}

