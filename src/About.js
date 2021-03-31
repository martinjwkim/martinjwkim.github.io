import React from 'react';
import { Box } from 'grommet';

const About = () => {
  return (
    <Box border={{ color: 'brand', size: 'large' }} direction='row' flex overflow={{ horizontal: 'hidden' }}>
      <Box border={{ color: 'brand', size: 'large' }} flex align='center' justify='center'>
        about body
     </Box>
    </Box>
  )
}

export default About;