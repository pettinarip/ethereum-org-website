import { useTranslation } from "next-i18next"
import { Flex, type FlexProps } from "@chakra-ui/react"

import { ButtonLink } from "@/components/Buttons"
import CalloutBanner from "@/components/CalloutBanner"

import { trackCustomEvent } from "@/lib/utils/matomo"

import image from "@/assets/enterprise-eth.png"

export interface IProps extends FlexProps {
  id?: string
}

const StakingCommunityCallout: React.FC<IProps> = (props) => {
  const { t } = useTranslation("page-staking")

  return (
    <CalloutBanner
      {...props}
      image={image}
      alt={t("page-staking-image-alt")}
      titleKey={"page-staking-join-community"}
      descriptionKey={"page-staking-join-community-desc"}
      imageWidth={350}
    >
      <Flex gap={4} direction={{ base: "column", md: "row" }}>
        <ButtonLink
          onClick={() => {
            trackCustomEvent({
              eventCategory: `StakingCommunityCallout`,
              eventAction: `Clicked`,
              eventName: "clicked discord",
            })
          }}
          to="https://discord.gg/ethstaker"
          w={{ base: "full", md: "auto" }}
        >
          Discord
        </ButtonLink>
        <ButtonLink
          onClick={() => {
            trackCustomEvent({
              eventCategory: `StakingCommunityCallout`,
              eventAction: `Clicked`,
              eventName: "clicked reddit",
            })
          }}
          to="https://reddit.com/r/ethstaker"
          w={{ base: "full", md: "auto" }}
        >
          Reddit
        </ButtonLink>
        <ButtonLink
          onClick={() => {
            trackCustomEvent({
              eventCategory: `StakingCommunityCallout`,
              eventAction: `Clicked`,
              eventName: "clicked website",
            })
          }}
          to="https://ethstaker.cc"
          w={{ base: "full", md: "auto" }}
        >
          {t("common:rollup-component-website")}
        </ButtonLink>
      </Flex>
    </CalloutBanner>
  )
}

export default StakingCommunityCallout
