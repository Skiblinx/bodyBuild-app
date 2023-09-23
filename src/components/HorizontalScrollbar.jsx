/* eslint-disable react/prop-types */
import { Box } from '@mui/material'
import BodyPart from './BodyPart'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu/dist/types'

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
  return (
    <ScrollMenu>
      {data.map(item => (
        <Box
          key={item.id || item}
          itemID={item.id || item}
          name={item.id || item}
          m="0 40px"
        >
          <BodyPart item={item} bodypart={bodyPart} setBodyPart={setBodyPart} />
        </Box>
      ))}
    </ScrollMenu>
  )
}

export default HorizontalScrollbar