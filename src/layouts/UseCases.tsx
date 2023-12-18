import { useRouter } from "next/router"
import { useTranslation } from "next-i18next"
import { MdExpandMore } from "react-icons/md"
import {
  Box,
  Flex,
  Hide,
  Icon,
  ListItem,
  Show,
  Text,
  UnorderedList,
  useToken,
} from "@chakra-ui/react"

import type { ChildOnlyProp } from "@/lib/types"
import type { MdPageContent, UseCasesFrontmatter } from "@/lib/interfaces"

import BannerNotification from "@/components/BannerNotification"
import { List as ButtonDropdownList } from "@/components/ButtonDropdown"
import Emoji from "@/components/Emoji"
import FeedbackCard from "@/components/FeedbackCard"
import { Image } from "@/components/Image"
import LeftNavBar from "@/components/LeftNavBar"
import InlineLink, { BaseLink } from "@/components/Link"
import {
  ContentContainer,
  MobileButton,
  MobileButtonDropdown,
  Page,
  Title,
} from "@/components/MdComponents"
import TableOfContents from "@/components/TableOfContents"

import { getSummaryPoints } from "@/lib/utils/getSummaryPoints"

import { EDIT_CONTENT_URL } from "@/lib/constants"

const HeroContainer = (props: ChildOnlyProp) => (
  <Flex
    bg="cardGradient"
    boxShadow="inset 0px -1px 0px rgba(0, 0, 0, 0.1)"
    flexDirection={{ base: "column-reverse", lg: "row" }}
    justifyContent="flex-end"
    minHeight="608px"
    maxHeight={{ base: "full", lg: "608px" }}
    width="full"
    {...props}
  />
)

const TitleCard = (props: ChildOnlyProp) => {
  const boxShadow = useToken("colors", "cardBoxShadow")

  return (
    <Flex
      bg={{ base: "ednBackground", lg: "background.base" }}
      border="1px"
      borderColor="border"
      borderRadius={{ base: "none", lg: "base" }}
      boxShadow={{ lg: boxShadow }}
      flexDirection="column"
      maxWidth={{ base: "full", lg: "container.sm" }}
      mt={{ base: 0, lg: 12 }}
      zIndex="docked"
      p={8}
      position={{ base: "relative", lg: "absolute" }}
      top={{ base: "unset", lg: 24 }}
      insetInlineStart={{ base: 0, lg: 24 }}
      bottom={{ base: 0, lg: "unset" }}
      insetInlineEnd={{ base: 0, lg: "unset" }}
      {...props}
    />
  )
}

// UseCases layout components
export const useCasesComponents = {
  // Export empty object if none needed
}

interface IProps
  extends ChildOnlyProp,
    Pick<MdPageContent, "slug" | "tocItems"> {
  frontmatter: UseCasesFrontmatter
}
export const UseCasesLayout: React.FC<IProps> = ({
  children,
  frontmatter,
  slug,
  tocItems,
}) => {
  const { asPath: relativePath } = useRouter()
  const { t } = useTranslation("template-usecase")
  const lgBp = useToken("breakpoints", "lg")

  const summaryPoints = getSummaryPoints(frontmatter)

  const absoluteEditPath = `${EDIT_CONTENT_URL}${relativePath}`

  // Assign hero styling, default to "defi"
  let useCase = "defi"
  if (slug.includes("dao") || slug.includes("identity")) {
    useCase = "dao"
  }
  if (slug.includes("nft")) {
    useCase = "nft"
  }

  const dropdownLinks: ButtonDropdownList = {
    text: t("template-usecase:template-usecase-dropdown"),
    ariaLabel: t("template-usecase:template-usecase-dropdown-aria"),
    items: [
      {
        text: t("template-usecase:template-usecase-dropdown-defi"),
        to: "/defi/",
        matomo: {
          eventCategory: "use cases menu",
          eventAction: "click",
          eventName: "defi",
        },
      },
      {
        text: t("template-usecase:template-usecase-dropdown-nft"),
        to: "/nft/",
        matomo: {
          eventCategory: "use cases menu",
          eventAction: "click",
          eventName: "nft",
        },
      },
      {
        text: t("template-usecase:template-usecase-dropdown-dao"),
        to: "/dao/",
        matomo: {
          eventCategory: "use cases menu",
          eventAction: "click",
          eventName: "dao",
        },
      },
      {
        text: t("template-usecase:template-usecase-dropdown-social-networks"),
        to: "/social-networks/",
        matomo: {
          eventCategory: "use cases menu",
          eventAction: "click",
          eventName: "social-networks",
        },
      },
      {
        text: t("template-usecase:template-usecase-dropdown-identity"),
        to: "/decentralized-identity/",
        matomo: {
          eventCategory: "use cases menu",
          eventAction: "click",
          eventName: "decentralized-identity",
        },
      },
      {
        text: t("template-usecase:template-usecase-dropdown-desci"),
        to: "/desci/",
        matomo: {
          eventCategory: "use cases menu",
          eventAction: "click",
          eventName: "desci",
        },
      },
      {
        text: t("template-usecase:template-usecase-dropdown-refi"),
        to: "/refi/",
        matomo: {
          eventCategory: "use cases menu",
          eventAction: "click",
          eventName: "refi",
        },
      },
    ],
  }

  return (
    <Box position="relative" width="full">
      <Show above={lgBp}>
        <BannerNotification shouldShow zIndex="sticky">
          <Emoji text=":pencil:" fontSize="2xl" me={4} flexShrink={0} />
          <Text m={0}>
            {t("template-usecase:template-usecase-banner")}{" "}
            <InlineLink href={absoluteEditPath}>
              {t("template-usecase-edit-link")}
            </InlineLink>
          </Text>
        </BannerNotification>
      </Show>
      <HeroContainer key={frontmatter.title}>
        <TitleCard>
          <Emoji fontSize="4rem" text={frontmatter.emoji!} />
          <Title>{frontmatter.title}</Title>
          <Box>
            <UnorderedList ms="1.45rem">
              {summaryPoints.map((point, idx) => (
                <ListItem key={idx} color="text300" mb={0}>
                  {point}
                </ListItem>
              ))}
            </UnorderedList>
            <TableOfContents
              items={tocItems}
              maxDepth={frontmatter.sidebarDepth || 2}
              isMobile
            />
          </Box>
        </TitleCard>
        <Image
          src={frontmatter.image}
          alt={frontmatter.alt || ""}
          width={1200}
          height={610}
          style={{ objectFit: "cover" }}
          priority
          alignSelf={{
            base: "center",
            lg: "normal",
          }}
          maxH={{
            base: "340px",
            lg: "full",
          }}
          maxW={{
            base: useCase === "defi" ? "full" : "min(405px, 98%)",
            lg:
              (useCase === "dao" && "572px") ||
              (useCase === "defi" && "80%") ||
              "640px",
          }}
        />
      </HeroContainer>
      <Show above={lgBp}>
        <Flex
          as={BaseLink}
          to="#content"
          bg="ednBackground"
          justifyContent="center"
          p={4}
          width="full"
          _hover={{
            bg: "background.base",
          }}
        >
          <Icon as={MdExpandMore} fontSize="2xl" color="secondary" />
        </Flex>
      </Show>
      <Page>
        {/* TODO: Switch to `above="lg"` after completion of Chakra Migration */}
        <LeftNavBar
          hideBelow={lgBp}
          dropdownLinks={dropdownLinks}
          tocItems={tocItems}
          maxDepth={frontmatter.sidebarDepth!}
        />
        <ContentContainer id="content">
          {children}
          <FeedbackCard />
        </ContentContainer>
        <Hide above={lgBp}>
          <MobileButton>
            <MobileButtonDropdown list={dropdownLinks} />
          </MobileButton>
        </Hide>
      </Page>
    </Box>
  )
}
