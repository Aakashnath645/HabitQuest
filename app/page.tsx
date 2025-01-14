import { HabitDashboard } from '@/components/habit-dashboard'

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8 bg-black text-white font-pixel">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center text-yellow-400 pixel-box p-4">HabitQuest</h1>
        <HabitDashboard />
      </div>
    </main>
  )
}

