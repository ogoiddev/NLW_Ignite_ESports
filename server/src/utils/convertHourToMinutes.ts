// 18:30 -> ["18", "00"] -> [18, 00]

export function ConvertHoursToMinutes(data: string) {
  const [hours, minutes] = data.split(':').map(Number)

  const minutesAmount = (hours * 60) + minutes;

  return minutesAmount;
}