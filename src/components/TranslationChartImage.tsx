import { useColorModeValue } from "@chakra-ui/react"

import { Image } from "@/components/Image"

import pageviewsDark from "@/assets/translation-program/pageviews-dark.png"
import pageviewsLight from "@/assets/translation-program/pageviews-light.png"

const TranslationChartImage = () => {
  const ethImage = useColorModeValue(pageviewsLight, pageviewsDark)

  return (
    <Image
      src={ethImage}
      alt=""
      style={{ objectFit: "contain" }}
      minW="263px"
      h={500}
      w="auto"
    />
  )
}

export default TranslationChartImage
