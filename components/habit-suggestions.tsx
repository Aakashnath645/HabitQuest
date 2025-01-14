'use client'

import { useState } from 'react'
import { type Habit } from '@/lib/types'

interface HabitSuggestionsProps {
  onAddHabit: (habit: Habit) => void
}

const HABIT_SUGGESTIONS = [
  "Do 20 jumping jacks every morning",
  "Read a chapter of a book before bed",
  "Drink 8 glasses of water daily",
  "Meditate for 5 minutes at noon",
  "Take a 15-minute walk after lunch",
  "Write down 3 things you're grateful for",
  "Stretch for 10 minutes after waking up",
  "Learn one new word in a foreign language",
  "Do 10 push-ups before showering",
  "Eat a piece of fruit with breakfast"
]

export function HabitSuggestions({ onAddHabit }: HabitSuggestionsProps) {
  const [currentSuggestion, setCurrentSuggestion] = useState('')

  const getNewSuggestion = () => {
    const randomIndex = Math.floor(Math.random() * HABIT_SUGGESTIONS.length)
    setCurrentSuggestion(HABIT_SUGGESTIONS[randomIndex])
  }

  const handleAddHabit = () => {
    if (currentSuggestion) {
      onAddHabit({
        id: Date.now().toString(),
        name: currentSuggestion,
        completed: false,
      })
      setCurrentSuggestion('')
    }
  }

  return (
    <div className="pixel-box p-4 bg-gray-800">
      <h2 className="text-2xl font-bold mb-4 text-yellow-400">Quest Suggestions</h2>
      <div className="space-y-4">
        <button className="btn-8bit w-full" onClick={getNewSuggestion}>
          Get New Quest
        </button>
        {currentSuggestion && (
          <div className="p-2 pixel-box bg-gray-700 space-y-4">
            <p className="text-sm text-white">{currentSuggestion}</p>
            <button 
              className="btn-8bit w-full"
              onClick={handleAddHabit}
            >
              Accept Quest
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

