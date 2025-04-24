
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface MatchSettingsProps {
  isHome: boolean
  competition: string
  onHomeChange: (value: boolean) => void
  onCompetitionChange: (value: string) => void
}

const competitions = [
  "Premier League",
  "Champions League",
  "FA Cup",
  "Carabao Cup",
  "Europa League"
]

const MatchSettings = ({
  isHome,
  competition,
  onHomeChange,
  onCompetitionChange,
}: MatchSettingsProps) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Label htmlFor="home-away">Home Game</Label>
        <Switch
          id="home-away"
          checked={isHome}
          onCheckedChange={onHomeChange}
        />
      </div>

      <div className="space-y-2">
        <Label>Competition</Label>
        <Select value={competition} onValueChange={onCompetitionChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select competition" />
          </SelectTrigger>
          <SelectContent>
            {competitions.map((comp) => (
              <SelectItem key={comp} value={comp}>
                {comp}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

export default MatchSettings

