'use client'
import { Slider } from '@mui/material'

type TProps = {
  minValue: number
  maxValue: number
  setMinValue: (value: number) => void
  setMaxValue: (value: number) => void
  minLimit?: number
  maxLimit?: number
}

export const PriceSlider = ({
  minValue,
  maxValue,
  setMinValue,
  setMaxValue,
  minLimit = 0,
  maxLimit = 10000,
}: TProps) => {
  const handleChange = (_: Event, newValue: number | number[]) => {
    const [minVal, maxVal] = newValue as number[]
    setMinValue(minVal)
    setMaxValue(maxVal)
  }

  const getPositionPercent = (val: number) =>
    ((val - minLimit) / (maxLimit - minLimit)) * 100

  return (
    <div className="w-full mt-[40px] mb-[29px] flex justify-center">
      <div className="relative w-[95%]">
        <Slider
          value={[minValue, maxValue]}
          min={minLimit}
          max={maxLimit}
          onChange={handleChange}
          sx={{
            color: '#f5f5f5',
            height: 4,
            '& .MuiSlider-track': {
              backgroundColor: '#f5f5f5',
            },
            '& .MuiSlider-rail': {
              opacity: 1,
              backgroundColor: '#D9D9D91A',
            },
            '& .MuiSlider-thumb': {
              width: 16,
              height: 16,
              backgroundColor: '#f5f5f5',
              '&:hover': {
                boxShadow: '0 0 0 8px rgba(255,255,255,0.16)',
              },
            },
          }}
        />

        <div
          className="absolute text-[15px] text-white"
          style={{
            left: `calc(${getPositionPercent(minValue)}% - 15px)`,
            top: 30,
          }}
        >
          {minValue}
        </div>
        <div
          className="absolute text-[15px] text-white"
          style={{
            left: `calc(${getPositionPercent(maxValue)}% - 15px)`,
            top: 30,
          }}
        >
          {maxValue}
        </div>
      </div>
    </div>
  )
}
