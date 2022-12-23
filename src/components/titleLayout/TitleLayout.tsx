import React, { ReactNode } from 'react'

type Props = {
  icon: ReactNode,
  title: string,
}

export default function TitleLayout({ icon, title }: Props) {
  return (
    <div className="title">
      <h2 className='uppercase text-2xl font-bold'>
        <span>{icon}</span>
        {title}
      </h2>
    </div>
  )
}