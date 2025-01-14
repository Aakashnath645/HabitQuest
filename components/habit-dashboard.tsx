'use client'

import { useState } from 'react'
import { HabitList } from './habit-list'
import { PointsDisplay } from './points-display'
import { HabitSuggestions } from './habit-suggestions'
import { type Habit } from '@/lib/types'

export function HabitDashboard() {
  const [habits, setHabits] = useState<Habit[]>([])
  const [points, setPoints] = useState(0)

  const addHabit = (habit: Habit) => {
    setHabits([...habits, habit])
  }

  const completeHabit = (habitId: string) => {
    setHabits(habits.map(habit => 
      habit.id === habitId ? { ...habit, completed: true } : habit
    ))
    setPoints(points + 10)
  }

  return (
    <div className="space-y-6">
      <PointsDisplay points={points} />
      <div className="grid gap-6 md:grid-cols-2">
        <HabitList habits={habits} onCompleteHabit={completeHabit} />
        <HabitSuggestions onAddHabit={addHabit} />
      </div>
    </div>
  )
}

