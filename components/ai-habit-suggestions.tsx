'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Loader2, Sparkles } from 'lucide-react'
import { type Habit } from '@/lib/types'

interface AIHabitSuggestionsProps {
  onAddHabit: (habit: Habit) => void
}

export function AIHabitSuggestions({ onAddHabit }: AIHabitSuggestionsProps) {
  const [goal, setGoal] = useState('')
  const [suggestion, setSuggestion] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const getNewSuggestion = async () => {
    if (!goal.trim()) {
      setError('Please enter a goal')
      return
    }

    setLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/suggest-habit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ goal }),
      })

      if (!response.ok) throw new Error('Failed to get suggestion')
      
      const data = await response.json()
      setSuggestion(data.habit)
    } catch (err) {
      setError('Failed to get suggestion. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleAddHabit = () => {
    if (suggestion) {
      onAddHabit({
        id: Date.now().toString(),
        name: suggestion,
        completed: false,
      })
      setSuggestion(null)
      setGoal('')
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="w-5 h-5" />
          AI Habit Suggestions
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Input
            placeholder="Enter your goal (e.g., fitness, productivity)"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
          />
          <Button 
            className="w-full" 
            onClick={getNewSuggestion}
            disabled={loading}
          >
            {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
            Get Suggestion
          </Button>
        </div>
        
        {error && (
          <p className="text-sm text-destructive">{error}</p>
        )}

        {suggestion && (
          <div className="p-4 rounded-lg bg-muted space-y-4">
            <p className="text-sm">{suggestion}</p>
            <Button 
              variant="secondary" 
              className="w-full"
              onClick={handleAddHabit}
            >
              Add This Habit
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

