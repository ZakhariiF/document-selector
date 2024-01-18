import { SVGProps } from "react"

const CheckIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width={16}
    height={16}
    fill="#22c55e"
    {...props}
  >
    <path d="M13.434 4.066c.33.305.33.838 0 1.143l-6.5 6.5a.783.783 0 0 1-1.143 0l-3.25-3.25a.783.783 0 0 1 0-1.143.783.783 0 0 1 1.143 0L6.35 9.982l5.941-5.916a.783.783 0 0 1 1.143 0Z" />
  </svg>
)

export default CheckIcon
