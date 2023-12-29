import { useRouter } from "next/router"
import { Box, chakra, Flex, type HeadingProps, Icon } from "@chakra-ui/react"

import type { ChildOnlyProp, Lang } from "@/lib/types"
import type { MdPageContent, StaticFrontmatter } from "@/lib/interfaces"

import Breadcrumbs from "@/components/Breadcrumbs"
import Callout from "@/components/Callout"
import Contributors from "@/components/Contributors"
import EnergyConsumptionChart from "@/components/EnergyConsumptionChart"
import FeedbackCard from "@/components/FeedbackCard"
import GlossaryDefinition from "@/components/Glossary/GlossaryDefinition"
import { HubHero } from "@/components/Hero"
import NetworkUpgradeSummary from "@/components/History/NetworkUpgradeSummary"
import Link from "@/components/Link"
import Logo from "@/components/Logo"
import MainArticle from "@/components/MainArticle"
import MatomoOptOut from "@/components/MatomoOptOut"
import {
  Heading1 as MdHeading1,
  Heading2 as MdHeading2,
  Heading3 as MdHeading3,
  Heading4 as MdHeading4,
} from "@/components/MdComponents"
import MeetupList from "@/components/MeetupList"
import Text from "@/components/OldText"
import SocialListItem from "@/components/SocialListItem"
import TableOfContents from "@/components/TableOfContents"
import Translation from "@/components/Translation"
import TranslationChartImage from "@/components/TranslationChartImage"
import UpcomingEventsList from "@/components/UpcomingEventsList"

import { getLocaleTimestamp } from "@/lib/utils/time"
import { isLangRightToLeft } from "@/lib/utils/translations"

import { CONTENT_DIR } from "@/lib/constants"

import GuideHeroImage from "@/assets/heroes/guides-hub-hero.jpg"

const Heading1 = (props: HeadingProps) => (
  <MdHeading1 fontSize={{ base: "2.5rem", md: "5xl" }} {...props} />
)
const Heading2 = (props: HeadingProps) => (
  <MdHeading2 fontSize={{ base: "2xl", md: "2rem" }} {...props} />
)
const Heading3 = (props: HeadingProps) => (
  <MdHeading3 fontSize={{ base: "xl", md: "2xl" }} {...props} />
)
const Heading4 = (props: HeadingProps) => (
  <MdHeading4 fontSize={{ base: "md", md: "xl" }} {...props} />
)

const ListItem = (props: ChildOnlyProp) => (
  <chakra.li color="text300" {...props} />
)

// Static layout components
export const staticComponents = {
  a: Link,
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,
  li: ListItem,
  Callout,
  Contributors,
  EnergyConsumptionChart,
  GlossaryDefinition,
  Icon,
  Link,
  Logo,
  MatomoOptOut,
  MeetupList,
  NetworkUpgradeSummary,
  SocialListItem,
  TranslationChartImage,
  UpcomingEventsList,
}

interface IProps
  extends ChildOnlyProp,
    Pick<MdPageContent, "slug" | "tocItems" | "lastUpdatedDate"> {
  frontmatter: StaticFrontmatter
}
export const StaticLayout: React.FC<IProps> = ({
  children,
  frontmatter,
  slug,
  tocItems,
  lastUpdatedDate,
}) => {
  const { locale } = useRouter()

  const repo =
    process.env.NEXT_PUBLIC_GITHUB_REPO || "ethereum/ethereum-org-website"
  const baseEditPath = `https://github.com/${repo}/tree/dev/${CONTENT_DIR}/`
  const absoluteEditPath = baseEditPath + slug + "index.md"

  return (
    <Box w="full" ms={2}>
      <Flex
        justifyContent="space-between"
        w="full"
        mx="auto"
        mb={16}
        p={8}
        pt={{ base: 8, lg: 16 }}
      >
        <Box>
          {slug === "/guides/" ? (
            <HubHero
              heroImg={GuideHeroImage}
              header={frontmatter.title}
              title={""}
              description={frontmatter.description}
            />
          ) : (
            <>
              <Breadcrumbs slug={slug} mb="8" />
              <Text
                color="text200"
                dir={isLangRightToLeft(locale as Lang) ? "rtl" : "ltr"}
              >
                <Translation id="page-last-updated" />:{" "}
                {getLocaleTimestamp(locale as Lang, lastUpdatedDate!)}
              </Text>
            </>
          )}

          <Box
            as={MainArticle}
            maxW="container.md"
            w="full"
            sx={{
              ".featured": {
                ps: 4,
                ms: -4,
                borderInlineStart: "1px dotted",
                borderInlineStartColor: "primary.base",
              },

              ".citation": {
                p: {
                  color: "text200",
                },
              },
            }}
          >
            <TableOfContents
              position="relative"
              zIndex={2}
              items={tocItems}
              isMobile
              maxDepth={frontmatter.sidebarDepth || 2}
              hideEditButton={!!frontmatter.hideEditButton}
            />
            {children}

            <FeedbackCard isArticle />
          </Box>
        </Box>
        <TableOfContents
          editPath={absoluteEditPath}
          items={tocItems}
          maxDepth={frontmatter.sidebarDepth || 2}
          hideEditButton={!!frontmatter.hideEditButton}
        />
      </Flex>
    </Box>
  )
}
