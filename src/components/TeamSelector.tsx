
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Team {
  id: string
  name: string
  logo: string
}

interface TeamSelectorProps {
  teams: Team[]
  selectedTeam: Team | null
  onSelectTeam: (team: Team) => void
  label: string
}

const TeamSelector = ({ teams, selectedTeam, onSelectTeam, label }: TeamSelectorProps) => {
  return (
    <div className="w-full space-y-2">
      <h3 className="text-lg font-semibold">{label}</h3>
      <ScrollArea className="h-[200px] w-full rounded-md border">
        <div className="grid grid-cols-3 gap-4 p-4">
          {teams.map((team) => (
            <Card
              key={team.id}
              className={`cursor-pointer transition-all hover:scale-105 ${
                selectedTeam?.id === team.id ? 'ring-2 ring-primary' : ''
              }`}
              onClick={() => onSelectTeam(team)}
            >
              <CardContent className="flex flex-col items-center justify-center p-4">
                <img src={team.logo} alt={team.name} className="h-12 w-12 object-contain" />
                <p className="mt-2 text-center text-sm">{team.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}

export default TeamSelector

