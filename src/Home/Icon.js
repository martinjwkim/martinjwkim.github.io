import React, { useState } from 'react';
import { Anchor, Box } from 'grommet';

function Icon({ icon, color, href }) {

  const [hover, setHover] = useState(false)

  const props = {
    main: {
      onMouseEnter: ()=>setHover(true),
		  onMouseLeave: ()=>setHover(false),
    },
    anchor: {
        icon,
        color,
        href,
    },
  }

  if (hover) {
	  props.main.animation = 'jiggle'
  }

  return (
    <Box {...props.main}>
      <Anchor {...props.anchor} />
    </Box>
  );
}

export default Icon;