import { ReactNode, ComponentProps, cloneElement } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const buttonIconVariants = tv({
  base: "text-zinc-400 hover:text-zinc-300",
  variants: {
    size: {
      default: "size-5",
      small: "size-4"
    }
  },
  defaultVariants: {
    size: "default"
  }
})

interface ButtonIconProps extends
ComponentProps<'button'>,
VariantProps<typeof buttonIconVariants> {

  children: ReactNode

}

export function ButtonIcon({ children, size, ...props}: ButtonIconProps) {
  const clonedChildren = cloneElement( children as React.ReactElement, {
    className: buttonIconVariants({ size })
  })

  return(
    <button
      {...props}
    >
      {clonedChildren}
    </button>
  )
}