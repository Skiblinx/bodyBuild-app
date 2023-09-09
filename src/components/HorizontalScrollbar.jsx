import { Box } from '@mui/material'
import BodyPart from './BodyPart'

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
  return (
    <div>
      {data.map(item => (
        <Box
          key={item.id || item}
          itemID={item.id || item}
          name={item.id || item}
        >
          <BodyPart item={item} bodypart={bodyPart} setBodyPart={setBodyPart} />
        </Box>
      ))}
    </div>
  )
}

export default HorizontalScrollbar