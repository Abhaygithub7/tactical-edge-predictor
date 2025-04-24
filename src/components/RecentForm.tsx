
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

interface RecentFormProps {
  form: string[]
  onFormChange: (form: string[]) => void
}

const RecentForm = ({ form, onFormChange }: RecentFormProps) => {
  const handleValueChange = (value: string[]) => {
    // Just pass the array directly to the onFormChange function
    // This ensures we're passing string[] to string[]
    onFormChange(value.slice(-5))
  }

  return (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold">Recent Form</h3>
      <ToggleGroup
        type="multiple"
        value={form}
        onValueChange={handleValueChange}
        className="justify-start"
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <ToggleGroupItem
            key={index}
            value={`position-${index}`}
            className="w-12"
          >
            {form[index] || "-"}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <p className="text-sm text-muted-foreground">
        Click to cycle through W (Win), D (Draw), L (Loss)
      </p>
    </div>
  )
}

export default RecentForm
