import { GetStaticProps } from "next"
import { SSRConfig, useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import {
  Box,
  Flex,
  HeadingProps,
  SimpleGrid,
  Text,
  useTheme,
} from "@chakra-ui/react"

import { ChildOnlyProp, CommonHeroProps } from "@/lib/types"
import { ICard, IGetInvolvedCard } from "@/lib/interfaces"

import { getLastDeployDate } from "@/lib/utils/getLastDeployDate"
import { getRequiredNamespacesForPage } from "@/lib/utils/translations"

import ActionCard from "../components/ActionCard"
import ButtonLink, { ButtonLinkProps } from "../components/Buttons/ButtonLink"
import Callout from "../components/Callout"
import Card from "../components/Card"
import FeedbackCard from "../components/FeedbackCard"
import { HubHero } from "../components/Hero"
import { Image } from "../components/Image"
import OldHeading from "../components/OldHeading"
import PageMetadata from "../components/PageMetadata"

// Static assets
import developersEthBlockImg from "@/public/developers-eth-blocks.png"
import dogeComputerImg from "@/public/doge-computer.png"
import ethImg from "@/public/eth.png"
import financeTransparentImg from "@/public/finance_transparent.png"
import futureTransparentImg from "@/public/future_transparent.png"
import hackathonTransparentImg from "@/public/hackathon_transparent.png"
// -- Hero
import communityHeroImg from "@/public/heroes/community-hero.png"
// -- Cards
import upgradesCoreImg from "@/public/upgrades/core.png"
import whatIsEthereumImg from "@/public/what-is-ethereum.png"

type Props = SSRConfig & {
  lastDeployDate: string
}

export const getStaticProps = (async (context) => {
  const { locale } = context
  // load i18n required namespaces for the given page
  const requiredNamespaces = getRequiredNamespacesForPage("/community")
  const lastDeployDate = getLastDeployDate()

  return {
    props: {
      ...(await serverSideTranslations(locale!, requiredNamespaces)),
      lastDeployDate,
    },
  }
}) satisfies GetStaticProps<Props>

const CardContainer = ({ children }: ChildOnlyProp) => {
  return (
    <Flex wrap="wrap" mx={-4}>
      {children}
    </Flex>
  )
}

const Content = ({ children }: ChildOnlyProp) => {
  return (
    <Box py={4} px={8} w="full">
      {children}
    </Box>
  )
}

const Divider = () => {
  return <Box my={16} w="10%" h={1} bgColor="homeDivider" />
}

const Page = ({ children }: ChildOnlyProp) => {
  return (
    <Flex direction="column" alignItems="center" w="full" mx="auto">
      {children}
    </Flex>
  )
}

const ButtonRow = ({ children }: ChildOnlyProp) => {
  return (
    <Flex alignItems="flex-start" direction={{ base: "column", md: "row" }}>
      {children}
    </Flex>
  )
}

const StyledButtonLink = ({ children, ...props }: ButtonLinkProps) => {
  return (
    <ButtonLink
      mt={{ base: 4, md: 0 }}
      ml={{ base: 0, md: 2 }}
      display="flex"
      alignItems="center"
      {...props}
    >
      {children}
    </ButtonLink>
  )
}

const RowReverse = ({ children }: ChildOnlyProp) => {
  return (
    <Flex
      direction={{ base: "column-reverse", lg: "row-reverse" }}
      alignItems={{ base: "center", lg: "normal" }}
    >
      {children}
    </Flex>
  )
}

const ImageContainer = ({ children }: ChildOnlyProp) => {
  return (
    <Flex h="full" w={{ base: "75%", lg: "full" }}>
      {children}
    </Flex>
  )
}

const Subtitle = ({ children }: ChildOnlyProp) => {
  return (
    <Text mb={8} fontSize={{ base: "md", sm: "xl" }} lineHeight={1.4}>
      {children}
    </Text>
  )
}

const FeatureContent = ({ children }: ChildOnlyProp) => {
  return (
    <Flex
      direction="column"
      boxSize="full"
      justifyContent="center"
      p={{ base: 8, lg: 24 }}
    >
      {children}
    </Flex>
  )
}

const H2 = ({ children, ...props }: HeadingProps) => {
  return (
    <OldHeading fontSize={{ base: "2xl", md: "2rem" }} mt={0} {...props}>
      {children}
    </OldHeading>
  )
}

const CommunityPage = () => {
  const { t } = useTranslation("page-community")
  const theme = useTheme()

  const cards: Array<ICard> = [
    {
      image: upgradesCoreImg,
      title: t("page-community-card-1-title"),
      description: t("page-community-card-1-description"),
      alt: t("page-index-get-started-wallet-image-alt"),
      to: "/community/online/",
    },
    {
      image: ethImg,
      title: t("page-community-card-2-title"),
      description: t("page-community-card-2-description"),
      alt: t("page-index-get-started-eth-image-alt"),
      to: "/community/events/",
    },
    {
      image: dogeComputerImg,
      title: t("page-community-card-3-title"),
      description: t("page-community-card-3-description"),
      alt: t("page-index-get-started-dapps-image-alt"),
      to: "/community/get-involved/",
    },
    {
      image: futureTransparentImg,
      title: t("page-community-card-4-title"),
      description: t("page-community-card-4-description"),
      alt: t("page-index-get-started-dapps-image-alt"),
      to: "/community/grants/",
    },
  ]

  const whyGetInvolvedCards: Array<IGetInvolvedCard> = [
    {
      emoji: ":mage:",
      title: t("page-community-why-get-involved-card-1-title"),
      description: t("page-community-why-get-involved-card-1-description"),
    },
    {
      emoji: ":dollar:",
      title: t("page-community-why-get-involved-card-2-title"),
      description: t("page-community-why-get-involved-card-2-description"),
    },
    {
      emoji: ":collision:",
      title: t("page-community-why-get-involved-card-3-title"),
      description: t("page-community-why-get-involved-card-3-description"),
    },
  ]

  const heroContent: CommonHeroProps = {
    title: t("page-community-hero-title"),
    header: t("page-community-hero-header"),
    description: t("page-community-hero-subtitle"),
    heroImg: communityHeroImg,
  }

  return (
    <Page>
      <PageMetadata
        title={t("page-community-meta-title")}
        description={t("page-community-meta-description")}
      />
      <HubHero {...heroContent} />
      <Divider />
      <Flex
        bg="homeBoxTurquoise"
        alignItems="center"
        direction="row-reverse"
        py={{ base: 8, lg: 0 }}
        pl={{ base: 0, lg: 8 }}
        w="full"
        h={{ base: "full", lg: "720px" }}
        mt="-1px"
        borderBottom="1px solid"
        borderColor="text"
      >
        <Content>
          <Flex direction="column" alignItems="center" mb={8}>
            <H2>{t("page-community-why-get-involved-title")}</H2>
          </Flex>
          <CardContainer>
            {whyGetInvolvedCards.map((card, idx) => (
              <Card
                m={4}
                p={6}
                flex="1 0 30%"
                minW="280px"
                maxW={{ base: "full", md: "46%", lg: "31%" }}
                key={idx}
                emoji={card.emoji}
                title={card.title}
                description={card.description}
              />
            ))}
          </CardContainer>
        </Content>
      </Flex>
      <Box
        w="full"
        pb={16}
        bg="grayBackground"
        boxShadow={`inset 0px 0px 0px ${theme.colors.tableItemBoxShadow}`}
      >
        <Box py={4} px={{ base: 4, lg: 8 }} w="full">
          <Flex
            direction={{ base: "column-reverse", md: "row" }}
            alignItems="center"
            mb={{ base: 0, m: 12 }}
            mt={{ base: 0, m: 4 }}
          >
            <Box p={{ base: 0, sm: 8, lg: 24 }} boxSize="full">
              <H2 id="get-involved">
                {t("page-community-get-involved-title")}
              </H2>
              <Subtitle>
                {t("page-community-get-involved-description")}
              </Subtitle>
            </Box>
            <ImageContainer>
              <Image
                src={developersEthBlockImg}
                alt={t("page-community-get-involved-image-alt")}
                style={{
                  objectFit: "cover",
                }}
                my={-4}
              />
            </ImageContainer>
          </Flex>
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 8, lg: 0 }}>
            {cards.map((card, idx) => (
              <Box
                as={ActionCard}
                minW={{ base: "min(100%, 240px)", lg: "440px" }}
                m={{ base: 0, lg: 4 }}
                borderRadius="sm"
                border="1px solid"
                borderColor="text"
                bg="background.base"
                boxShadow={theme.colors.cardBoxShadow}
                key={idx}
                title={card.title}
                description={card.description}
                to={card.to}
                image={card.image}
                alt={card.alt}
              />
            ))}
          </SimpleGrid>
        </Box>
      </Box>
      <Flex
        bg="homeBoxTurquoise"
        alignItems="center"
        direction={{ base: "column-reverse", lg: "row-reverse" }}
        pl={{ base: 0, lg: 8 }}
        py={{ base: 8, lg: 0 }}
        w="full"
        h={{ base: "full", lg: "720px" }}
        mt="-1px"
        borderTop="1px solid"
        borderBottom="1px solid"
        borderColor="text"
      >
        <RowReverse>
          <FeatureContent>
            <H2>{t("page-community-open-source")}</H2>
            <Subtitle>{t("page-community-open-source-description")}</Subtitle>
            <ButtonRow>
              <ButtonLink to="/community/get-involved/#ethereum-jobs/">
                {t("page-community-find-a-job")}
              </ButtonLink>
              <StyledButtonLink variant="outline" to="/community/grants/">
                {t("page-community-explore-grants")}
              </StyledButtonLink>
            </ButtonRow>
          </FeatureContent>
          <ImageContainer>
            <Image
              src={whatIsEthereumImg}
              alt={t("page-community-open-source-image-alt")}
              style={{
                objectFit: "cover",
              }}
            />
          </ImageContainer>
        </RowReverse>
      </Flex>
      <Flex
        bg="homeBoxPink"
        alignItems="center"
        direction={{ base: "column-reverse", lg: "row-reverse" }}
        pl={{ base: 0, lg: 8 }}
        py={{ base: 8, lg: 0 }}
        h={{ base: "full", lg: "720px" }}
        w="full"
        mt="-1px"
        borderTop="1px solid"
        borderBottom="1px solid"
        borderColor="text"
      >
        <Flex
          direction={{ base: "column-reverse", lg: "row" }}
          alignItems="center"
        >
          <FeatureContent>
            <Flex direction="column" justifyContent="center">
              <H2>{t("page-community-contribute")}</H2>
              <Subtitle>{t("page-community-contribute-description")}</Subtitle>
              <ButtonRow>
                <ButtonLink to="/contributing/">
                  {t("page-community-contribute-button")}
                </ButtonLink>
                <StyledButtonLink
                  variant="outline"
                  to="https://github.com/ethereum/ethereum-org-website/"
                >
                  {t("page-community-contribute-secondary-button")}
                </StyledButtonLink>
              </ButtonRow>
            </Flex>
          </FeatureContent>
          <ImageContainer>
            <Image
              src={financeTransparentImg}
              alt={t("page-index-internet-image-alt")}
              style={{
                objectFit: "cover",
              }}
            />
          </ImageContainer>
        </Flex>
      </Flex>
      <Flex
        bg="homeBoxPurple"
        alignItems="center"
        direction={{ base: "column-reverse", lg: "row" }}
        h={{ base: "full", lg: "720px" }}
        w="full"
        mt="-1px"
        borderTop="1px solid"
        borderBottom="1px solid"
        borderColor="text"
      >
        <RowReverse>
          <FeatureContent>
            <H2>{t("page-community-support")}</H2>
            <Subtitle>{t("page-community-support-description")}</Subtitle>
            <Box>
              <ButtonLink to="/community/support/">
                {t("page-community-support-button")}
              </ButtonLink>
            </Box>
          </FeatureContent>
          <ImageContainer>
            <Image
              src={hackathonTransparentImg}
              alt={t("page-community-support-alt")}
              style={{
                objectFit: "cover",
              }}
            />
          </ImageContainer>
        </RowReverse>
      </Flex>
      <Divider />
      <Flex
        direction={{ base: "column", lg: "row" }}
        alignItems={{ base: "felx-start", lg: "center" }}
        w="full"
        py={4}
        px={8}
      >
        <Box flex="0 0 50%" maxW={{ base: "full", md: "75%" }} mb={6}>
          <OldHeading fontSize={{ base: "2xl", md: "2rem" }}>
            {t("page-community-try-ethereum")}
          </OldHeading>
        </Box>
      </Flex>
      <Content>
        <CardContainer>
          <Box
            as={Callout}
            flex="1 1 416px"
            minH="full"
            image={ethImg}
            titleKey="page-community:page-community-get-eth-title"
            alt={t("page-community-get-eth-alt")}
            descriptionKey="page-community:page-community-get-eth-description"
          >
            <Box>
              <ButtonLink to="/get-eth/">
                {t("page-community-get-eth")}
              </ButtonLink>
            </Box>
          </Box>
          <Box
            as={Callout}
            flex="1 1 416px"
            minH="full"
            image={dogeComputerImg}
            titleKey="page-community:page-community-explore-dapps-title"
            alt={t("page-community-explore-dapps-alt")}
            descriptionKey="page-community:page-community-explore-dapps-description"
          >
            <Box>
              <ButtonLink to="/dapps/">
                {t("page-community-explore-dapps")}
              </ButtonLink>
            </Box>
          </Box>
        </CardContainer>
      </Content>
      <FeedbackCard />
    </Page>
  )
}

export default CommunityPage
