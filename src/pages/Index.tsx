import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import TeamSelector from "@/components/TeamSelector"
import FormationSelector from "@/components/FormationSelector"
import MatchSettings from "@/components/MatchSettings"
import RecentForm from "@/components/RecentForm"
import { useTeams } from "@/hooks/useFootballData"
import { Team } from "@/data/teams"
import { predictMatch } from "@/utils/predictionModel"

const LEAGUES = {
  'PL': 'Premier League',
  'PD': 'La Liga',
  'BL1': 'Bundesliga',
  'SA': 'Serie A',
  'FL1': 'Ligue 1'
};

const Index = () => {
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null)
  const [selectedOpponent, setSelectedOpponent] = useState<Team | null>(null)
  const [formation, setFormation] = useState("")
  const [isHome, setIsHome] = useState(true)
  const [competition, setCompetition] = useState("")
  const [form, setForm] = useState<string[]>([])
  const [opponentForm, setOpponentForm] = useState<string[]>([])
  const [prediction, setPrediction] = useState<{ 
    team1Probability: number; 
    team2Probability: number; 
    draw: number 
  } | null>(null)

  const { data: premierLeagueData } = useTeams('PL');
  const { data: laLigaData } = useTeams('PD');
  const { data: bundesligaData } = useTeams('BL1');
  const { data: serieAData } = useTeams('SA');
  const { data: ligue1Data } = useTeams('FL1');

  const allTeams = [
    ...(premierLeagueData?.data?.teams || []),
    ...(laLigaData?.data?.teams || []),
    ...(bundesligaData?.data?.teams || []),
    ...(serieAData?.data?.teams || []),
    ...(ligue1Data?.data?.teams || []),
  ].map(team => ({
    id: team.id?.toString() || team.name,
    name: team.name,
    logo: team.crest || team.logo,
    league: LEAGUES[team.area?.code] || team.league || 'Other'
  }));

  const handlePredict = () => {
    if (selectedTeam && selectedOpponent && form.length > 0 && opponentForm.length > 0) {
      const result = predictMatch(
        { form, isHome },
        { form: opponentForm, isHome: !isHome }
      );
      setPrediction(result);
    }
  };

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
                teams={allTeams}
                selectedTeam={selectedTeam}
                onSelectTeam={setSelectedTeam}
                label="Your Team"
              />
              <TeamSelector
                teams={allTeams.filter(t => t.id !== selectedTeam?.id)}
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
              <div className="space-y-4">
                <RecentForm
                  form={form}
                  onFormChange={setForm}
                  label="Your Team's Form"
                />
                <RecentForm
                  form={opponentForm}
                  onFormChange={setOpponentForm}
                  label="Opponent's Form"
                />
              </div>
              <Button 
                className="w-full" 
                onClick={handlePredict}
                disabled={!selectedTeam || !selectedOpponent || form.length === 0 || opponentForm.length === 0}
              >
                Predict Result
              </Button>
              
              {prediction && (
                <div className="mt-4 p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">Prediction:</h3>
                  <p>{selectedTeam?.name}: {(prediction.team1Probability * 100).toFixed(1)}%</p>
                  <p>{selectedOpponent?.name}: {(prediction.team2Probability * 100).toFixed(1)}%</p>
                  <p>Draw: {(prediction.draw * 100).toFixed(1)}%</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Index
