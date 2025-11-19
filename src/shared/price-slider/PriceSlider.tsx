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

  const getPositionPercent = (val: number) => {
    const percent = ((val - minLimit) / (maxLimit - minLimit)) * 100
    return percent - (percent / 80)
  }

  return (
    <div className="w-full lg:mt-[40px] mt-[12px] mb-[29px] flex justify-center">
      <div className="relative lg:w-[95%] w-[90%] lg:px-[0px] px-[16px]">
        <Slider
          value={[minValue, maxValue]}
          min={minLimit}
          max={maxLimit}
          onChange={handleChange}
          sx={{
            color: '#f5f5f5',
            height: 4,
            padding: '13px 0',
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
          className="absolute text-[15px] text-white whitespace-nowrap"
          style={{
            left: `calc(${getPositionPercent(minValue)}%)`,
            top: 35,
            transform: 'translateX(-50%)',
          }}
        >
          {minValue}
        </div>
        <div
          className="absolute text-[15px] text-white whitespace-nowrap"
          style={{
            left: `calc(${getPositionPercent(maxValue)}%)`,
            top: 35,
            transform: 'translateX(-50%)',
          }}
        >
          {maxValue}
        </div>
      </div>
    </div>
  )
}
