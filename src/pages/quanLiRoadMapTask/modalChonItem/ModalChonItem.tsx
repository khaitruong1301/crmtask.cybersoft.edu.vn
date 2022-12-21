import { Modal } from 'antd';
import React, { Dispatch, ReactElement, ReactNode, SetStateAction } from 'react'

type Props = {
  isVisible: boolean
  title: string
  contetModal?: ReactNode
  setIsVisible: (isVisible: boolean) => void
  setContentModal?: Dispatch<SetStateAction<ReactElement>>
  onCloseModal?: () => void,
}

const ModalChonItem = ({
  isVisible,
  title,
  contetModal,
  setIsVisible,
  setContentModal = () => { },
  onCloseModal = () => { },
}: Props) => {
  return (
    <Modal
      title={title}
      open={isVisible}
      onCancel={() => {
        setIsVisible(false);
        setContentModal(<div></div>);
        onCloseModal();
      }}
      footer={null}
      zIndex={1000}
      style={{ top: 20 }}
    >
      <div style={{ width: "max-content" }}>{contetModal}</div>
    </Modal>
  )
}

export default ModalChonItem