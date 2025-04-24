import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import TeamSelector from "@/components/TeamSelector"
import FormationSelector from "@/components/FormationSelector"
import MatchSettings from "@/components/MatchSettings"
import RecentForm from "@/components/RecentForm"
import { teams, Team } from "@/data/teams"

const Index = () => {
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null)
  const [selectedOpponent, setSelectedOpponent] = useState<Team | null>(null)
  const [formation, setFormation] = useState("")
  const [isHome, setIsHome] = useState(true)
  const [competition, setCompetition] = useState("")
  const [form, setForm] = useState<string[]>([])

  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
        <h1 className="text-3xl font-bold text-center">Football Match Predictor</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Team Selection</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <TeamSelector
                teams={teams}
                selectedTeam={selectedTeam}
                onSelectTeam={setSelectedTeam}
                label="Your Team"
              />
              <TeamSelector
                teams={teams.filter(t => t.id !== selectedTeam?.id)}
                selectedTeam={selectedOpponent}
                onSelectTeam={setSelectedOpponent}
                label="Opponent"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Match Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <FormationSelector
                value={formation}
                onChange={setFormation}
              />
              <MatchSettings
                isHome={isHome}
                competition={competition}
                onHomeChange={setIsHome}
                onCompetitionChange={setCompetition}
              />
              <RecentForm
                form={form}
                onFormChange={setForm}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Index
