import React from 'react'

type Props = {
    header: string
}

const Headers = ({header}: Props) => {
  return (
    <h3 className="text-2xl leading-snug opacity-40 mt-20">{header}</h3>
  )
}

export default Headers