import type { GetStaticProps } from "next/types"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import {
  Box,
  Center,
  Flex,
  Heading,
  type HeadingProps,
  SimpleGrid,
  type SimpleGridProps,
  useColorModeValue,
} from "@chakra-ui/react"

import type { BasePageProps, ChildOnlyProp } from "@/lib/types"

import AssetDownload from "@/components/AssetDownload"
import FeedbackCard from "@/components/FeedbackCard"
import { Image } from "@/components/Image"
import InlineLink from "@/components/Link"
import MainArticle from "@/components/MainArticle"
import OldHeading from "@/components/OldHeading"
import PageMetadata from "@/components/PageMetadata"

import { existsNamespace } from "@/lib/utils/existsNamespace"
import { getLastDeployDate } from "@/lib/utils/getLastDeployDate"
// import efLogo from "@/assets/ef-logo.png"
// import efLogoWhite from "@/assets/ef-logo-white.png"
// import ethDiamondBlackHero from "@/assets/assets/eth-diamond-black.png"
// import ethDiamondPurpleHero from "@/assets/assets/eth-diamond-purple.png"
// import ethGifCat from "@/assets/eth-gif-cat.png"
// import ethGifChalk from "@/assets/eth-gif-chalk.png"
// import ethGifSun from "@/assets/eth-gif-sun.png"
// import ethGifWaves from "@/assets/eth-gif-waves.png"
// import ethPortraitPurpleWhite from "@/assets/assets/ethereum-logo-portrait-purple-white.png"
// import leslieTheRhino from "@/assets/upgrades/upgrade_rhino.png"
import { getRequiredNamespacesForPage } from "@/lib/utils/translations"

import ethDiamondBlack from "@/assets/assets/eth-diamond-black.png"
import ethDiamondBlackGray from "@/assets/assets/eth-diamond-black-gray.png"
import ethDiamondBlackWhite from "@/assets/assets/eth-diamond-black-white.jpg"
import ethDiamondGlyph from "@/assets/assets/eth-diamond-glyph.png"
import ethDiamondPurple from "@/assets/assets/eth-diamond-purple.png"
import ethDiamondPurplePurple from "@/assets/assets/eth-diamond-purple-purple.png"
import ethDiamondPurpleWhite from "@/assets/assets/eth-diamond-purple-white.jpg"
import ethDiamondColor from "@/assets/assets/eth-diamond-rainbow.png"
import ethGlyphColored from "@/assets/assets/eth-glyph-colored.png"
import ethLandscapeBlack from "@/assets/assets/ethereum-logo-landscape-black.png"
import ethLandscapeBlackGray from "@/assets/assets/ethereum-logo-landscape-black-gray.png"
import ethLandscapePurple from "@/assets/assets/ethereum-logo-landscape-purple.png"
import ethLandscapePurplePurple from "@/assets/assets/ethereum-logo-landscape-purple-purple.png"
import ethLandscapePurpleWhite from "@/assets/assets/ethereum-logo-landscape-purple-white.png"
import ethPortraitBlack from "@/assets/assets/ethereum-logo-portrait-black.png"
import ethPortraitBlackGray from "@/assets/assets/ethereum-logo-portrait-black-gray.png"
import ethPortraitPurple from "@/assets/assets/ethereum-logo-portrait-purple.png"
import ethPortraitPurplePurple from "@/assets/assets/ethereum-logo-portrait-purple-purple.png"
import ethWordmarkBlack from "@/assets/assets/ethereum-wordmark-black.png"
import ethWordmarkBlackGray from "@/assets/assets/ethereum-wordmark-black-gray.png"
import ethWordmarkPurple from "@/assets/assets/ethereum-wordmark-purple.png"
import ethWordmarkPurplePurple from "@/assets/assets/ethereum-wordmark-purple-purple.png"
import ethWordmarkPurpleWhite from "@/assets/assets/ethereum-wordmark-purple-white.png"
import developers from "@/assets/developers-eth-blocks.png"
import doge from "@/assets/doge-computer.png"
import enterprise from "@/assets/enterprise-eth.png"
import eth from "@/assets/eth.png"
import finance from "@/assets/finance_transparent.png"
import future from "@/assets/future_transparent.png"
import hackathon from "@/assets/hackathon_transparent.png"
import communityHero from "@/assets/heroes/community-hero.png"
import developersHero from "@/assets/heroes/developers-hub-hero.jpg"
import garden from "@/assets/heroes/garden.jpg"
import guidesHero from "@/assets/heroes/guides-hub-hero.jpg"
import layer2Hero from "@/assets/heroes/layer-2-hub-hero.jpg"
import learnHero from "@/assets/heroes/learn-hub-hero.png"
import quizzesHub from "@/assets/heroes/quizzes-hub-hero.png"
import roadmapHero from "@/assets/heroes/roadmap-hub-hero.jpg"
import hero from "@/assets/home/hero.png"
import heroPanda from "@/assets/home/hero-panda.png"
import mergePanda from "@/assets/home/merge-panda.png"
import impact from "@/assets/impact_transparent.png"
import infrastructure from "@/assets/infrastructure_transparent.png"
import beaconChain from "@/assets/upgrades/core.png"
import merge from "@/assets/upgrades/merge.png"
import newRings from "@/assets/upgrades/newrings.png"
import oldShip from "@/assets/upgrades/oldship.png"
import dao from "@/assets/use-cases/dao-2.png"
import defi from "@/assets/use-cases/defi.png"
import wallet from "@/assets/wallet.png"
import whatIsEthereum from "@/assets/what-is-ethereum.png"

const Row = (props: SimpleGridProps) => (
  <SimpleGrid
    templateColumns="repeat(auto-fit, minmax(min(288px, 100%), 1fr))"
    mx={-4}
    mb="8"
    {...props}
  />
)

const H2 = (props: ChildOnlyProp & HeadingProps) => (
  <Heading
    fontSize={{ base: "2xl", md: "3xl" }}
    lineHeight={1.4}
    mt={16}
    mb="6"
    {...props}
  />
)

const H3 = (props: ChildOnlyProp) => (
  <OldHeading
    as="h3"
    fontSize={{ base: "xl", md: "2xl" }}
    lineHeight={1.4}
    mb="0"
    {...props}
  />
)

export const getStaticProps = (async ({ locale }) => {
  const requiredNamespaces = getRequiredNamespacesForPage("assets")

  const contentNotTranslated = !existsNamespace(locale!, requiredNamespaces[1])

  const lastDeployDate = getLastDeployDate()

  return {
    props: {
      ...(await serverSideTranslations(locale!, requiredNamespaces)),
      contentNotTranslated,
      lastDeployDate,
    },
  }
}) satisfies GetStaticProps<BasePageProps>

const AssetsPage = () => {
  const { t } = useTranslation("page-assets")
  const assetPageHeroImage = useColorModeValue(
    ethDiamondBlack,
    ethDiamondPurple
  )
  return (
    <Flex direction="column" width="full">
      <PageMetadata
        title={t("page-assets-meta-title")}
        description={t("page-assets-meta-desc")}
      />
      <Box as={MainArticle} py="4" px="8">
        <Flex direction="column" px="8" py="4">
          <Center>
            <Image
              src={assetPageHeroImage}
              alt={t("page-assets-eth-diamond-gray")}
              w="5rem"
            />
          </Center>
          <Center>
            <Heading as="h1" size="2xl" my="8">
              {t("page-assets-h1")}
            </Heading>
          </Center>
          <Center>
            <InlineLink to="/assets/#illustrations">
              {t("page-assets-illustrations")}
            </InlineLink>
          </Center>
          <Center>
            <InlineLink to="/assets/#historical">
              {t("page-assets-historical-artwork")}
            </InlineLink>
          </Center>
          <Center>
            <InlineLink to="/assets/#brand">
              {t("page-assets-ethereum-brand-assets")}
            </InlineLink>
          </Center>
        </Flex>

        <H2 id="illustrations">{t("page-assets-illustrations")}</H2>

        <Row>
          <AssetDownload
            title={t("page-assets-hero")}
            alt={t("page-assets-hero")}
            image={hero}
            artistName="Liam Cobb"
            artistUrl="https://liamcobb.com/"
          />
        </Row>
        <Row>
          <AssetDownload
            title={t("page-assets-learn-hero-name")}
            alt={t("page-assets-learn-hero-name")}
            image={learnHero}
            artistName="Liam Cobb"
            artistUrl="https://liamcobb.com/"
          />
          <AssetDownload
            title={t("page-assets-community-hero-name")}
            alt={t("page-assets-community-hero-name")}
            image={communityHero}
            artistName="Liam Cobb"
            artistUrl="https://liamcobb.com/"
          />
        </Row>
        <Row>
          <AssetDownload
            title={t("page-assets-quizzes-hero-name")}
            alt={t("page-assets-quizzes-hero-name")}
            image={quizzesHub}
            artistName="Liam Cobb"
            artistUrl="https://liamcobb.com/"
          />
          <AssetDownload
            title={t("page-assets-developers-hero-name")}
            alt={t("page-assets-developers-hero-name")}
            image={developersHero}
            artistName="Liam Cobb"
            artistUrl="https://liamcobb.com/"
          />
        </Row>
        <Row>
          <AssetDownload
            title={t("page-assets-garden-name")}
            alt={t("page-assets-garden-name")}
            image={garden}
            artistName="Liam Cobb"
            artistUrl="https://liamcobb.com/"
          />
          <AssetDownload
            title={t("page-assets-roadmap-hero-name")}
            alt={t("page-assets-roadmap-hero-name")}
            image={roadmapHero}
            artistName="Liam Cobb"
            artistUrl="https://liamcobb.com/"
          />
        </Row>
        <Row>
          <AssetDownload
            title={t("page-assets-layer-2-hero-name")}
            alt={t("page-assets-layer-2-hero-name")}
            image={layer2Hero}
            artistName="Liam Cobb"
            artistUrl="https://liamcobb.com/"
          />
          <AssetDownload
            title={t("page-assets-guides-hero-name")}
            alt={t("page-assets-guides-hero-name")}
            image={guidesHero}
            artistName="Liam Cobb"
            artistUrl="https://liamcobb.com/"
          />
        </Row>
        <Row>
          <AssetDownload
            title={t("page-assets-doge")}
            alt={t("page-assets-doge")}
            image={doge}
            artistName="William Tempest"
            artistUrl="https://cargocollective.com/willtempest"
          />
          <AssetDownload
            title={t("page-assets-blocks")}
            alt={t("page-assets-blocks")}
            image={developers}
            artistName="William Tempest"
            artistUrl="https://cargocollective.com/willtempest"
          />
          <AssetDownload
            title={t("page-assets-enterprise")}
            alt={t("page-assets-enterprise")}
            image={enterprise}
            artistName="William Tempest"
            artistUrl="https://cargocollective.com/willtempest"
          />
        </Row>
        <Row>
          <AssetDownload
            title={t("page-assets-infrastructure")}
            alt={t("page-assets-infrastructure")}
            image={infrastructure}
            artistName="William Tempest"
            artistUrl="https://cargocollective.com/willtempest"
          />
          <AssetDownload
            title={t("page-assets-finance")}
            alt={t("page-assets-finance")}
            image={finance}
            artistName="William Tempest"
            artistUrl="https://cargocollective.com/willtempest"
          />
          <AssetDownload
            title={t("page-assets-impact")}
            alt={t("page-assets-impact")}
            image={impact}
            artistName="William Tempest"
            artistUrl="https://cargocollective.com/willtempest"
          />
        </Row>
        <Row>
          <AssetDownload
            title={t("page-assets-future")}
            alt={t("page-assets-future")}
            image={future}
            artistName="William Tempest"
            artistUrl="https://cargocollective.com/willtempest"
          />
          <AssetDownload
            title={t("page-assets-hackathon")}
            alt={t("page-assets-hackathon")}
            image={hackathon}
            artistName="William Tempest"
            artistUrl="https://cargocollective.com/willtempest"
          />
          <AssetDownload
            title={t("page-assets-robot")}
            alt={t("page-assets-robot")}
            image={wallet}
            artistName="William Tempest"
            artistUrl="https://cargocollective.com/willtempest"
          />
        </Row>
        <Row>
          <AssetDownload
            title={t("page-assets-bazaar")}
            alt={t("page-assets-bazaar")}
            image={whatIsEthereum}
            artistName="Viktor Hachmang"
            artistUrl="http://viktorhachmang.nl/"
          />
          <AssetDownload
            title={t("page-assets-eth")}
            alt={t("page-assets-eth")}
            image={eth}
            artistName="Viktor Hachmang"
            artistUrl="http://viktorhachmang.nl/"
          />
        </Row>
        <Row>
          <AssetDownload
            title={t("page-assets-mainnet")}
            alt={t("page-assets-mainnet")}
            image={oldShip}
            artistName="Viktor Hachmang"
            artistUrl="https://viktorhachmang.nl"
          />
          <AssetDownload
            title={t("page-assets-merge")}
            alt={t("page-assets-merge")}
            image={merge}
            artistName="Viktor Hachmang"
            artistUrl="https://viktorhachmang.nl"
          />
        </Row>
        <Row>
          <AssetDownload
            title={t("page-assets-beacon-chain")}
            alt={t("page-assets-beacon-chain")}
            image={beaconChain}
            artistName="Viktor Hachmang"
            artistUrl="http://viktorhachmang.nl/"
          />
          <AssetDownload
            title={t("page-assets-sharding")}
            alt={t("page-assets-sharding")}
            image={newRings}
            artistName="Viktor Hachmang"
            artistUrl="https://viktorhachmang.nl"
          />
        </Row>
        <Row>
          <AssetDownload
            title={t("page-assets-defi")}
            alt={t("page-assets-defi")}
            image={defi}
            artistName="Patrick Atkins"
            artistUrl="https://www.patrickatkins.co.uk/"
          />
          <AssetDownload
            title={t("page-assets-dao")}
            alt={t("page-assets-dao")}
            image={dao}
            artistName="Patrick Atkins"
            artistUrl="https://www.patrickatkins.co.uk/"
          />
        </Row>
        <H2 id="historical">{t("page-assets-historical-artwork")}</H2>
        <H2 id="brand">{t("page-assets-ethereum-brand-assets")}</H2>
        <H3>{t("page-assets-page-assets-transparent-background")}</H3>
        <Row>
          <AssetDownload
            title={t("page-assets-eth-diamond-glyph")}
            alt={t("page-assets-eth-diamond-glyph")}
            image={ethDiamondGlyph}
            svgUrl="/assets/svgs/eth-diamond-glyph.svg"
          />
          <AssetDownload
            title={t("page-assets-eth-diamond-gray")}
            alt={t("page-assets-eth-diamond-gray")}
            image={ethDiamondBlack}
            svgUrl="/assets/svgs/eth-diamond-black.svg"
          />
          <AssetDownload
            title={t("page-assets-eth-diamond-color")}
            alt={t("page-assets-eth-diamond-color")}
            image={ethDiamondColor}
            svgUrl="/assets/svgs/eth-diamond-rainbow.svg"
          />
        </Row>
        <Row>
          <AssetDownload
            title={t("page-assets-eth-diamond-purple")}
            alt={t("page-assets-eth-diamond-purple")}
            image={ethDiamondPurple}
            svgUrl="/assets/svgs/eth-diamond-purple.svg"
          />
          <AssetDownload
            title={t("page-assets-eth-diamond-colored")}
            alt={t("page-assets-eth-diamond-colored")}
            image={ethGlyphColored}
            svgUrl="/assets/svgs/eth-glyph-colored.svg"
          />
        </Row>
        <Row>
          <AssetDownload
            title={t("page-assets-eth-logo-portrait-gray")}
            alt={t("page-assets-eth-logo-portrait-gray")}
            image={ethPortraitBlack}
            svgUrl="/assets/svgs/ethereum-logo-portrait-black.svg  "
          />
          <AssetDownload
            title={t("page-assets-eth-logo-landscape-gray")}
            alt={t("page-assets-eth-logo-landscape-gray")}
            image={ethLandscapeBlack}
            svgUrl="/assets/svgs/ethereum-logo-landscape-black.svg"
          />
          <AssetDownload
            title={t("page-assets-eth-wordmark-gray")}
            alt={t("page-assets-eth-wordmark-gray")}
            image={ethWordmarkBlack}
            svgUrl="/assets/svgs/ethereum-wordmark-black.svg"
          />
        </Row>
        <Row>
          <AssetDownload
            title={t("page-assets-eth-logo-portrait-purple")}
            alt={t("page-assets-eth-logo-portrait-purple")}
            image={ethPortraitPurple}
            svgUrl="/assets/svgs/ethereum-logo-portrait-purple.svg"
          />
          <AssetDownload
            title={t("page-assets-eth-logo-landscape-purple")}
            alt={t("page-assets-eth-logo-landscape-purple")}
            image={ethLandscapePurple}
            svgUrl="/assets/svgs/ethereum-logo-landscape-purple.svg"
          />
          <AssetDownload
            title={t("page-assets-eth-wordmark-purple")}
            alt={t("page-assets-eth-wordmark-purple")}
            image={ethWordmarkPurple}
            svgUrl="/assets/svgs/ethereum-wordmark-purple-purple.svg"
          />
        </Row>
        <H3>{t("page-assets-page-assets-solid-background")}</H3>
        <Row>
          <AssetDownload
            title={t("page-assets-eth-diamond-white")}
            alt={t("page-assets-eth-diamond-white")}
            image={ethDiamondBlackWhite}
            svgUrl="/assets/svgs/eth-diamond-black-white.svg"
          />
          <AssetDownload
            title={t("page-assets-eth-diamond-gray")}
            alt={t("page-assets-eth-diamond-gray")}
            image={ethDiamondBlackGray}
            svgUrl="/assets/svgs/eth-diamond-black-gray.svg"
          />
          <AssetDownload
            title={t("page-assets-eth-diamond-purple")}
            alt={t("page-assets-eth-diamond-purple")}
            image={ethDiamondPurplePurple}
            svgUrl="/assets/svgs/eth-diamond-purple-purple.svg"
          />
        </Row>

        <Row>
          <AssetDownload
            title={t("page-assets-eth-diamond-white")}
            alt={t("page-assets-eth-diamond-white")}
            image={ethDiamondPurpleWhite}
            svgUrl="/assets/svgs/eth-diamond-purple-white.svg"
          />
          <AssetDownload
            title={t("page-assets-eth-diamond-white")}
            alt={t("page-assets-eth-diamond-white")}
            image={ethDiamondPurpleWhite}
            svgUrl="/assets/svgs/eth-diamond-purple-white.svg"
          />
        </Row>
        <Row>
          <AssetDownload
            title={t("page-assets-eth-logo-portrait-gray")}
            alt={t("page-assets-eth-logo-portrait-gray")}
            image={ethPortraitBlackGray}
            svgUrl="/assets/svgs/ethereum-logo-portrait-black-gray.svg"
          />
          <AssetDownload
            title={t("page-assets-eth-logo-landscape-gray")}
            alt={t("page-assets-eth-logo-landscape-gray")}
            image={ethLandscapeBlackGray}
            svgUrl="/assets/svgs/ethereum-logo-landscape-black-gray.svg"
          />
          <AssetDownload
            title={t("page-assets-eth-wordmark-gray")}
            alt={t("page-assets-eth-wordmark-gray")}
            image={ethWordmarkBlackGray}
            svgUrl="/assets/svgs/ethereum-wordmark-black-gray.svg"
          />
        </Row>
        <Row>
          <AssetDownload
            title={t("page-assets-eth-logo-portrait-purple")}
            alt={t("page-assets-eth-logo-portrait-purple")}
            image={ethPortraitPurplePurple}
            svgUrl="/assets/svgs/ethereum-logo-portrait-purple-purple.svg"
          />
          <AssetDownload
            title={t("page-assets-eth-logo-landscape-purple")}
            alt={t("page-assets-eth-logo-landscape-purple")}
            image={ethLandscapePurplePurple}
            svgUrl="/assets/svgs/ethereum-logo-landscape-purple-purple.svg"
          />
          <AssetDownload
            title={t("page-assets-eth-wordmark-purple")}
            alt={t("page-assets-eth-wordmark-purple")}
            image={ethWordmarkPurplePurple}
            svgUrl="/assets/svgs/ethereum-wordmark-purple-purple.svg"
          />
        </Row>
        <Row>
          <AssetDownload
            title={t("page-assets-eth-logo-landscape-white")}
            alt={t("page-assets-eth-logo-landscape-white")}
            image={ethLandscapePurpleWhite}
            svgUrl="/assets/svgs/ethereum-logo-landscape-purple-white.svg"
          />
          <AssetDownload
            title={t("page-assets-eth-wordmark-white")}
            alt={t("page-assets-eth-wordmark-white")}
            image={ethWordmarkPurpleWhite}
            svgUrl="/assets/svgs/ethereum-wordmark-purple-white.svg"
          />
        </Row>
        <H2 id="historical-illustrations">{t("page-assets-illustrations")}</H2>
        <Row>
          <AssetDownload
            title={t("page-assets-hero-panda")}
            alt={t("page-assets-hero-panda")}
            image={heroPanda}
          />
          <AssetDownload
            title={t("page-assets-merge-panda")}
            alt={t("page-assets-merge-panda")}
            image={mergePanda}
            svgUrl="/assets/svgs/merge-panda.svg"
          />
        </Row>
      </Box>
      <FeedbackCard />
    </Flex>
  )
}

export default AssetsPage
