import { useTranslation } from "next-i18next"
import { Box, Flex } from "@chakra-ui/react"

import { ButtonLink } from "@/components/Buttons"
import Card from "@/components/Card"
import CardList, { type CardListItem } from "@/components/CardList"
import OldHeading from "@/components/OldHeading"
import Translation from "@/components/Translation"

import beaconchain from "@/assets/upgrades/beaconchainemoji.png"
import beaconscan from "@/assets/upgrades/etherscan.png"

const H3: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <OldHeading
    as="h3"
    fontSize="2xl"
    fontWeight="bold"
    mb={8}
    sx={{ a: { display: "none" } }}
  >
    {children}
  </OldHeading>
)

const BeaconChainActions: React.FC = () => {
  const { t } = useTranslation(["page-upgrades-index", "page-upgrades"])

  const datapoints: CardListItem[] = [
    {
      title: t("consensus-beaconscan-title"),
      image: beaconscan,
      alt: "",
      link: "https://beaconscan.com",
      description: t("consensus-beaconscan-desc"),
    },
    {
      title: t("consensus-beaconscan-in-title"),
      image: beaconchain,
      alt: "",
      link: "https://beaconcha.in",
      description: t("consensus-beaconcha-in-desc"),
    },
  ]

  //TODO: we should refactor the naming here instead of using authors into the description field
  const reads: CardListItem[] = [
    {
      title: t("page-upgrade-article-title-two-point-oh"),
      description: t("page-upgrade-article-author-status"),
      link: "https://our.status.im/two-point-oh-the-beacon-chain/",
    },
    {
      title: t("page-upgrade-article-title-beacon-chain-explainer"),
      description: t("page-upgrade-article-author-ethos-dev"),
      link: "https://ethos.dev/beacon-chain/",
    },
    {
      title: t("page-upgrade-article-title-sharding-consensus"),
      description: t("page-upgrade-article-author-ethereum-foundation"),
      link: "https://blog.ethereum.org/2020/03/27/sharding-consensus/",
    },
  ]

  return (
    <Box mb={16}>
      <Flex flexDir={{ base: "column", md: "row" }} pt={4}>
        <Card
          w="full"
          ms={0}
          me={{ base: 0, md: 4 }}
          mb={{ base: 8, md: 0 }}
          emoji=":money_with_wings:"
          title={t("consensus-become-staker")}
          description={t("consensus-become-staker-desc")}
        >
          <ButtonLink mb={3} to="https://launchpad.ethereum.org">
            <Translation id="get-started" />
          </ButtonLink>
          <ButtonLink variant="outline" to="/staking/">
            <Translation id="page-upgrades-index-staking-learn" />
          </ButtonLink>
        </Card>
      </Flex>
      <H3>
        <Translation id="consensus-explore" />
      </H3>

      <CardList items={datapoints} />
      <H3>
        <Translation id="read-more" />
      </H3>
      <CardList items={reads} />
    </Box>
  )
}

export default BeaconChainActions
