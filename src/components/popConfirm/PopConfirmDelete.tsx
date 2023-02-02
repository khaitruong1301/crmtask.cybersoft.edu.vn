import { Popconfirm, Popover, message } from 'antd'
import React, { Children, useState } from 'react'
import { boolean } from 'yup'

type Props = {
  title: string,
  content: React.ReactNode,
  children: React.ReactNode
}

const confirm = (e: React.MouseEvent<HTMLElement, MouseEvent> | undefined): void => {
  message.success('Click on Yes');
};

const cancel = (e: React.MouseEvent<HTMLElement, MouseEvent> | undefined) => {
  message.error('Click on No');
};

export default function PopConfirmDelete({ content, children, title }: Props) {
  //Bật thông báo xoá
  const [open, setOpen] = useState(false);
  return (
    <>
      <Popconfirm
        title={title}
        description={content}
        open={open}
        // cancelButtonProps={{ style: { background: 'red', color: 'white', outline: 'none' } }}
        okButtonProps={{ style: { background: 'red', color: 'white', outline: 'none' } }}
        onOpenChange={setOpen}
        onConfirm={confirm}
        onCancel={cancel}
        okText="Có"
        cancelText="Không"
      >
        {children}
      </Popconfirm>
    </>
  )
}