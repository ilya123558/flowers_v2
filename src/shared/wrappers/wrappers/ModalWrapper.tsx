'use client'
import { TClassNameWithChildrenAndProps } from '@/utils/types/main'
import { Modal, Fade, Backdrop } from '@mui/material'
import clsx from 'clsx'

type TProps = TClassNameWithChildrenAndProps<{
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}>

export const ModalWrapper = ({ isOpen, setIsOpen, children, className }: TProps) => {
  return (
    <Modal
      open={isOpen}
      onClose={() => setIsOpen(false)}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
          sx: {
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            transition: 'background-color 0.5s ease',
          },
        },
      }}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Fade in={isOpen} timeout={500}>
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            position: 'relative',
            zIndex: 10,
          }}
        >
          <div className={clsx("min-w-[100px] min-h-[100px] bg-modal-inner-bg border-[1px] border-border-gray border-dashed rounded-[10px] sm:p-[24px] p-[14px]", className)}>
            {children}
          </div>
        </div>
      </Fade>
    </Modal>
  )
}
