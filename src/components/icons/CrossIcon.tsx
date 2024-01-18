import { SVGProps } from "react"

const CrossIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width={16}
    height={16}
    fill="#1f2937"
    {...props}
  >
    <path d="M11.809 10.566c.33.305.33.838 0 1.143a.788.788 0 0 1-.559.229.805.805 0 0 1-.584-.229L8 9.043l-2.691 2.666a.788.788 0 0 1-.559.229.804.804 0 0 1-.584-.229.783.783 0 0 1 0-1.143l2.666-2.691-2.666-2.666a.783.783 0 0 1 0-1.143.783.783 0 0 1 1.143 0L8 6.732l2.666-2.666a.783.783 0 0 1 1.143 0c.33.305.33.838 0 1.143L9.143 7.9l2.666 2.666Z" />
  </svg>
)

export default CrossIcon
