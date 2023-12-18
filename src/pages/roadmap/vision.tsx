import { GetStaticProps } from "next"
import { useRouter } from "next/router"
import { SSRConfig, useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import type { ComponentPropsWithRef } from "react"
import {
  Box,
  Divider,
  Flex,
  type FlexProps,
  Heading,
  type HeadingProps,
  List,
  ListItem,
  useToken,
} from "@chakra-ui/react"

import type { ChildOnlyProp } from "@/lib/types"

import Breadcrumbs from "@/components/Breadcrumbs"
import ButtonLink from "@/components/Buttons/ButtonLink"
import Card from "@/components/Card"
import Emoji from "@/components/Emoji"
import FeedbackCard from "@/components/FeedbackCard"
import InfoBanner from "@/components/InfoBanner"
import InlineLink from "@/components/Link"
import OldHeading from "@/components/OldHeading"
import Text from "@/components/OldText"
import PageHero, {
  type ContentType as PageHeroContent,
} from "@/components/PageHero"
import PageMetadata from "@/components/PageMetadata"
import Trilemma from "@/components/Trilemma"

import { getLastDeployDate } from "@/lib/utils/getLastDeployDate"
import { getRequiredNamespacesForPage } from "@/lib/utils/translations"

import oldship from "@/public/upgrades/oldship.png"

const Page = (props: ChildOnlyProp) => (
  <Flex direction="column" align="center" w="full" {...props} />
)

const PageDivider = () => (
  <Divider
    my={16}
    w="10%"
    borderBottomWidth="0.25rem"
    borderColor="homeDivider"
  />
)

const PageContent = (props: ChildOnlyProp) => (
  <Flex flexDirection="column" gap="8" py={4} px={8} w="full" {...props} />
)

const H2 = (props: HeadingProps) => (
  <Heading
    as="h2"
    mb={8}
    fontSize={{ base: "2xl", md: "2rem" }}
    fontWeight="semibold"
    lineHeight={1.4}
    {...props}
  />
)

const CenterH2 = (props: HeadingProps) => <H2 textAlign="center" {...props} />

const H3 = (props: HeadingProps) => (
  <OldHeading
    as="h3"
    fontSize={{ base: "xl", md: "2xl" }}
    fontWeight="semibold"
    lineHeight={1.4}
    {...props}
  />
)

const CardContainer = (props: FlexProps) => (
  <Flex wrap="wrap" mx={-4} {...props} />
)

const ProblemCardContainer = (props: ChildOnlyProp) => {
  const containerMaxWidth = useToken("breakpoints", ["lg"])

  return <CardContainer maxW={containerMaxWidth} m="0 auto" {...props} />
}

const CentreCard = (props: ComponentPropsWithRef<typeof Card>) => (
  <Card
    flex="1 1 30%"
    minW="240px"
    m={4}
    page-upgrades-proof-stake-link
    p={6}
    border={0}
    textAlign="center"
    {...props}
  />
)

const CentralContent = (props: ChildOnlyProp) => (
  <Box my={0} mx={{ base: 0, lg: 48 }} {...props} />
)

const TrilemmaContent = (props: ChildOnlyProp) => (
  <Box w="full" my={8} mx={0} p={8} background="cardGradient" {...props} />
)

type Props = SSRConfig & {
  lastDeployDate: string
}

export const getStaticProps = (async (context) => {
  const { locale } = context

  // load i18n required namespaces for the given page
  const requiredNamespaces = getRequiredNamespacesForPage("/roadmap/vision")
  const lastDeployDate = getLastDeployDate()

  return {
    props: {
      ...(await serverSideTranslations(locale!, requiredNamespaces)),
      lastDeployDate,
    },
  }
}) satisfies GetStaticProps<Props>

const VisionPage = () => {
  const { t } = useTranslation(["page-roadmap-vision", "page-upgrades-index"])
  const { pathname } = useRouter()

  const paths = [
    {
      emoji: ":vertical_traffic_light:",
      title: t("page-roadmap-vision-title-1"),
      description: t("page-roadmap-vision-desc-1"),
    },
    {
      emoji: ":minidisc:",
      title: t("page-roadmap-vision-title-2"),
      description: t("page-roadmap-vision-desc-2"),
    },
  ]

  const heroContent: PageHeroContent = {
    title: t("page-roadmap-vision-title"),
    header: t("page-roadmap-vision-future"),
    subtitle: t("page-roadmap-vision-subtitle"),
    image: oldship,
    alt: t("page-eth-whats-eth-hero-alt"),
  }

  return (
    <Page>
      <PageMetadata
        title={t("page-roadmap-vision-meta-title")}
        description={t("page-roadmap-vision-meta-desc")}
      />
      <PageHero content={heroContent} />
      <PageDivider />
      <PageContent>
        <Breadcrumbs slug={pathname} startDepth={1} />
        <CentralContent>
          <CenterH2>{t("page-roadmap-vision-upgrade-needs")}</CenterH2>
          <Text>{t("page-roadmap-vision-upgrade-needs-desc")}</Text>
          <Text>{t("page-roadmap-vision-upgrade-needs-desc-2")}</Text>
          <Text>{t("page-roadmap-vision-upgrade-needs-desc-3")} </Text>
          <List listStyleType="disc">
            <ListItem>
              <InlineLink href="https://members.delphidigital.io/reports/the-hitchhikers-guide-to-ethereum">
                {t("page-roadmap-vision-2022")}
              </InlineLink>
            </ListItem>
            <ListItem>
              <InlineLink href="https://trent.mirror.xyz/82eyq_NXZzzqFmCNXiKJgSdayf6omCW7BgDQIneyPoA">
                {t("page-roadmap-vision-2021-updates")}
              </InlineLink>
            </ListItem>
            <ListItem>
              <InlineLink href="https://tim.mirror.xyz/CHQtTJb1NDxCK41JpULL-zAJe7YOtw-m4UDw6KDju6c">
                {t("page-roadmap-vision-2021")}
              </InlineLink>
            </ListItem>
            <ListItem>
              <InlineLink href="https://blog.ethereum.org/2015/03/03/ethereum-launch-process/">
                {t("page-roadmap-vision-upgrade-needs-serenity")}
              </InlineLink>
            </ListItem>
            <ListItem>
              <InlineLink href="https://blog.ethereum.org/2014/01/15/slasher-a-punitive-proof-of-stake-algorithm/">
                {t("page-roadmap-vision-2014")}
              </InlineLink>
            </ListItem>
          </List>
          <Text>{t("page-roadmap-vision-upgrade-needs-desc-5")}</Text>
          <Text>{t("page-roadmap-vision-upgrade-needs-desc-6")}</Text>
        </CentralContent>
      </PageContent>
      <PageDivider />
      <PageContent>
        <CenterH2>{t("page-roadmap-vision-problems")}</CenterH2>
        <ProblemCardContainer>
          {paths.map((path, idx) => (
            <CentreCard
              key={idx}
              emoji={path.emoji}
              title={path.title}
              description={path.description}
            />
          ))}
        </ProblemCardContainer>
      </PageContent>
      <TrilemmaContent>
        <Trilemma />
      </TrilemmaContent>
      <PageDivider />
      <PageContent>
        <CentralContent>
          <CenterH2>{t("page-roadmap-vision-understanding")}</CenterH2>
          <H3>
            {t("page-roadmap-vision-scalability")} <Emoji text=":rocket:" />
          </H3>
          <Text>{t("page-roadmap-vision-scalability-desc")}</Text>
          <Text>{t("page-roadmap-vision-scalability-desc-3")}</Text>
          <Text>
            {t("page-roadmap-vision-scalability-desc-4")}{" "}
            <InlineLink href="/roadmap/danksharding/">
              {t("page-roadmap-vision-danksharding")}
            </InlineLink>{" "}
          </Text>
          <H3>
            {t("page-roadmap-vision-security")} <Emoji text=":shield:" />
          </H3>
          <Text>{t("page-roadmap-vision-security-desc")}</Text>
          <Text>
            {t("page-roadmap-vision-security-desc-3")}{" "}
            <InlineLink href="/developers/docs/consensus-mechanisms/pos/">
              {t("page-upgrades-index:page-upgrades-proof-stake-link")}
            </InlineLink>{" "}
          </Text>
          <Text>
            {t("page-roadmap-vision-security-desc-5")}{" "}
            <InlineLink href="/developers/docs/consensus-mechanisms/pow/">
              {t("page-roadmap-vision-security-desc-5-link")}
            </InlineLink>
          </Text>
          <Text>{t("page-roadmap-vision-security-desc-10")}</Text>
          <Text>
            {t("page-roadmap-vision-security-validator")}{" "}
            <InlineLink href="/run-a-node/">
              {t("page-roadmap-vision-ethereum-node")}
            </InlineLink>
          </Text>
          <ButtonLink href="/staking/">
            {t("page-roadmap-vision-security-staking")}
          </ButtonLink>
          <H3>
            {t("page-roadmap-vision-sustainability")}{" "}
            <Emoji text=":evergreen_tree:" />
          </H3>
          <Text>{t("page-roadmap-vision-sustainability-subtitle")}</Text>
          <Text>
            {t("page-roadmap-vision-sustainability-desc-1")}{" "}
            <InlineLink href="/developers/docs/consensus-mechanisms/pow/mining/">
              {t("page-roadmap-vision-mining")}
            </InlineLink>
          </Text>
          <Text>
            {t("page-roadmap-vision-sustainability-desc-2")}{" "}
            <InlineLink href="/staking/">
              {t("page-roadmap-vision-staking-lower")}
            </InlineLink>
          </Text>
          <Text>{t("page-roadmap-vision-sustainability-desc-3")}</Text>
          <InfoBanner>
            <Text>{t("page-roadmap-vision-sustainability-desc-8")}</Text>
            <ButtonLink href="/roadmap/merge/">
              {t("page-upgrades-index:page-upgrades-merge-btn")}
            </ButtonLink>
          </InfoBanner>
        </CentralContent>
      </PageContent>
      <PageDivider />
      <FeedbackCard />
    </Page>
  )
}

export default VisionPage
