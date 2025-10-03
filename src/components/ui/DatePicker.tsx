"use client"
import * as React from "react"
import { CalendarIcon } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Calendar } from "@/components/ui/Calendar"
import { Input } from "@/components/ui/Input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/Popover"

function formatDate(date: Date | undefined) {
  if (!date) return ""
  return date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  })
}

function isValidDate(date: Date | undefined) {
  return !!date && !isNaN(date.getTime())
}

interface DatePickerInputProps {
  value?: Date | undefined
  onChange?: (val: string) => void
  onBlur?: (val: string) => void
  placeholder?: string
  id?: string
}

export function DatePickerInput({ value, onChange, onBlur, placeholder = "DD/MM/AAAA", id }: DatePickerInputProps) {
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState<Date | undefined>(
    value ? new Date(value) : undefined
  )
  const [month, setMonth] = React.useState<Date | undefined>(date)

  React.useEffect(() => {
    if (value) {
      const parsed = new Date(value)
      if (isValidDate(parsed)) {
        setDate(parsed)
        setMonth(parsed)
      }
    }
  }, [value])

  return (
    <div className="flex justify-between relative w-full">
      <Input
        id={id}
        type="date"
        value={value}
        placeholder={placeholder}
        required
        onChange={(e) => {
          const raw = e.target.value
          onChange(raw)
          const parsed = new Date(raw)
          if (isValidDate(parsed)) {
            setDate(parsed)
            setMonth(parsed)
          }
        }}
        onBlur={(e) => {
          const raw = e.target.value
          onBlur(raw)
          const parsed = new Date(raw)
          if (isValidDate(parsed)) {
            setDate(parsed)
            setMonth(parsed)
          }
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown") {
            e.preventDefault()
            setOpen(true)
          }
        }}
      />
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            type="button"
            variant="outline"
            className="h-6 p-1 border-none bg-transparent"
          >
            <CalendarIcon className="size-3.5 text-[#868686]" />
            <span className="sr-only">Selecionar data</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-auto overflow-hidden p-0"
          align="end"
          alignOffset={-8}
          sideOffset={10}
        >
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            month={month}
            onMonthChange={setMonth}
            onSelect={(newDate) => {
              if (!newDate) return
              setDate(newDate)
              setMonth(newDate)
              onChange(formatDate(newDate))
              setOpen(false)
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
