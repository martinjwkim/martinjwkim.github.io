import React from 'react';
import { Box } from 'grommet';
import Body from './Body'
import Header from './Header'

const Home = ({ darkMode, setDarkMode, size }) => {

  const props = {
    main: {
      background: {
        image: "url(/generic-background.png)",
        opacity: "medium",
        position: 'top',
        size: "cover",
        repeat: "no-repeat",
      },
      direction: 'column',
      justify: "between",
      height: '100vh',
      alignContent: 'center'
    },
    header: {
      darkMode,
      setDarkMode,
      size
    },
    footer: {
      height: 'small'
    }
  }


  return (
    <Box {...props.main}>
      <Header {...props.header}/>
      <Body size={size} />
      <Box {...props.footer}></Box>
    </Box>
  )
}

export default Home;