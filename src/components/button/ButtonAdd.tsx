import React from 'react'

type Props = {
  title: string
  onClick?: () => void
}

const ButtonAdd = ({ title, onClick = () => { } }: Props) => {
  return (
    <div
      className='text-white bg-blue-theme rounded py-2 px-4 outline-none border-none mb-3 w-max cursor-pointer'
      onClick={onClick}
    >
      {title}
    </div>
  )
}

export default ButtonAdd