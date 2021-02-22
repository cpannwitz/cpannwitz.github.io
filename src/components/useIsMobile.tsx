import { useMediaQuery } from 'react-responsive'
// @ts-ignore
import config from '../../config'

function useIsMobile() {
  const isMobile = useMediaQuery({ query: `(max-width: ${config.maxWidth}px)` })
  return isMobile
}

export default useIsMobile
