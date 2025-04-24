
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface FormationSelectorProps {
  value: string
  onChange: (value: string) => void
}

const formations = [
  "4-4-2",
  "4-3-3",
  "4-2-3-1",
  "3-5-2",
  "3-4-3",
  "5-3-2",
  "5-4-1"
]

const FormationSelector = ({ value, onChange }: FormationSelectorProps) => {
  return (
    <div className="w-full space-y-2">
      <h3 className="text-lg font-semibold">Formation</h3>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger>
          <SelectValue placeholder="Select formation" />
        </SelectTrigger>
        <SelectContent>
          {formations.map((formation) => (
            <SelectItem key={formation} value={formation}>
              {formation}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

export default FormationSelector

