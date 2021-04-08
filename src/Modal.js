import React from 'react';
import { Carousel, Image, Layer, Box } from 'grommet';
import ModalInfo from './ModalInfo'
import { v4 as uuidv4 } from 'uuid';

const Modal = ({ setShowModal, data }) => {

  const props = {
    layer: {
      onClickOutside: () => setShowModal(false),
      onEsc: () => setShowModal(false),
      background: {
        color: {
          dark: 'black',
          light: 'white'
        }
      },
      full: false,
      margin: 'large'
    },
    main: {
      gap: 'small',
    },
    image: {
      key: uuidv4(),
      fit: 'contain',
    },
    carousel: {
      width: 'large'
    }
  }

  return (
    <Layer {...props.layer}>
      <Box {...props.main}>
        <Box {...props.carousel}>
          <Carousel fill>
            {[data.img_1, data.img_2, data.img_3].map(img => <Image src={img} {...props.image} />)}
          </Carousel>
        </Box>
        <ModalInfo {...data} />
      </Box>
    </Layer >
  )
}

export default Modal;