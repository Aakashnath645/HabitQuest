import { type Habit } from '@/lib/types'
import { HabitItem } from './habit-item'

interface HabitListProps {
  habits: Habit[]
  onCompleteHabit: (id: string) => void
}

export function HabitList({ habits, onCompleteHabit }: HabitListProps) {
  return (
    <div className="pixel-box p-4 bg-gray-800">
      <h2 className="text-2xl font-bold mb-4 text-yellow-400">Your Quests</h2>
      <div className="space-y-4">
        {habits.length === 0 ? (
          <p className="text-gray-400 text-center py-4">
            No quests yet. Choose a suggestion to start!
          </p>
        ) : (
          habits.map(habit => (
            <HabitItem 
              key={habit.id} 
              habit={habit} 
              onComplete={() => onCompleteHabit(habit.id)} 
            />
          ))
        )}
      </div>
    </div>
  )
}

