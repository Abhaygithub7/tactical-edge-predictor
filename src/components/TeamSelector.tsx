
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Team } from "@/data/teams"

interface TeamSelectorProps {
  teams: Team[]
  selectedTeam: Team | null
  onSelectTeam: (team: Team) => void
  label: string
}

const TeamSelector = ({ teams, selectedTeam, onSelectTeam, label }: TeamSelectorProps) => {
  // Group teams by league
  const groupedTeams = teams.reduce((acc, team) => {
    if (!acc[team.league]) {
      acc[team.league] = [];
    }
    acc[team.league].push(team);
    return acc;
  }, {} as Record<string, Team[]>);

  return (
    <div className="w-full space-y-2">
      <h3 className="text-lg font-semibold">{label}</h3>
      <ScrollArea className="h-[400px] w-full rounded-md border">
        {Object.entries(groupedTeams).map(([league, leagueTeams]) => (
          <div key={league} className="p-4">
            <h4 className="mb-2 text-sm font-medium text-muted-foreground">{league}</h4>
            <div className="grid grid-cols-3 gap-4">
              {leagueTeams.map((team) => (
                <Card
                  key={team.id}
                  className={`cursor-pointer transition-all hover:scale-105 ${
                    selectedTeam?.id === team.id ? 'ring-2 ring-primary' : ''
                  }`}
                  onClick={() => onSelectTeam(team)}
                >
                  <CardContent className="flex flex-col items-center justify-center p-4">
                    <img 
                      src={team.logo} 
                      alt={team.name} 
                      className="h-12 w-12 object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/placeholder.svg';
                      }}
                    />
                    <p className="mt-2 text-center text-sm">{team.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </ScrollArea>
    </div>
  )
}

export default TeamSelector
