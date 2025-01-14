import { type Habit } from '@/lib/types'

interface HabitItemProps {
  habit: Habit
  onComplete: () => void
}

export function HabitItem({ habit, onComplete }: HabitItemProps) {
  return (
    <div className="flex items-center justify-between p-2 pixel-box bg-gray-700">
      <span className={habit.completed ? 'text-gray-400 line-through' : 'text-white'}>
        {habit.name}
      </span>
      <button
        className={`btn-8bit ${habit.completed ? 'bg-gray-500 cursor-not-allowed' : ''}`}
        onClick={onComplete}
        disabled={habit.completed}
      >
        {habit.completed ? 'Completed' : 'Complete'}
      </button>
    </div>
  )
}

