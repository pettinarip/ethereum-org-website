import { useTranslation } from "next-i18next"

import { CardListItem } from "../CardList"

import aaveImg from "@/assets/dapps/aave.png"
// -- borrow
import compoundImg from "@/assets/dapps/compound.png"
// -- earn
import gitcoinImg from "@/assets/dapps/gitcoin.png"
import loopringImg from "@/assets/dapps/loopring.png"
import matchaImg from "@/assets/dapps/matcha.png"
import oasisImg from "@/assets/dapps/stabledai.png"
// Static assets
// -- dapps
import uniImg from "@/assets/dapps/uni.png"
import oneInchImg from "@/assets/exchanges/1inch.png"
import binanceImg from "@/assets/exchanges/binance.png"
import bittrexImg from "@/assets/exchanges/bittrex.png"
// -- exchanges
import coinbaseImg from "@/assets/exchanges/coinbase.png"
import coinmamaImg from "@/assets/exchanges/coinmama.png"
import geminiImg from "@/assets/exchanges/gemini.png"
import krakenImg from "@/assets/exchanges/kraken.png"
import ethImg from "@/assets/favicon.png"
import makerImg from "@/assets/stablecoins/maker.png"

export const useStablecoinAccordion = () => {
  const { t } = useTranslation("page-stablecoins")

  const dapps: Array<CardListItem> = [
    {
      title: "Uniswap",
      image: uniImg,
      link: "https://uniswap.org",
      alt: t("uniswap-logo"),
    },
    {
      title: "Loopring",
      image: loopringImg,
      link: "https://loopring.org",
      alt: t("loopring-logo"),
    },
    {
      title: "1inch",
      image: oneInchImg,
      link: "https://app.1inch.io",
      alt: t("1inch-logo"),
    },
    {
      title: "Matcha",
      image: matchaImg,
      link: "https://matcha.xyz",
      alt: t("matcha-logo"),
    },
  ]

  const borrow: Array<CardListItem> = [
    {
      title: "Compound",
      image: compoundImg,
      link: "https://compound.finance",
      alt: t("compound-logo"),
    },
    {
      title: "Aave",
      image: aaveImg,
      link: "https://aave.com",
      alt: t("aave-logo"),
    },
    {
      title: "Oasis",
      image: oasisImg,
      link: "https://oasis.app",
      alt: t("oasis-logo"),
    },
  ]

  const earn: Array<CardListItem> = [
    {
      title: t("page-stablecoins-accordion-earn-project-bounties"),
      image: gitcoinImg,
      link: "https://gitcoin.co/explorer",
      description: t("page-stablecoins-accordion-earn-project-1-description"),
      alt: t("gitcoin-logo"),
    },
    {
      title: t("page-stablecoins-accordion-earn-project-community"),
      image: makerImg,
      link: "https://makerdao.world/en/resources/",
      description: t("page-stablecoins-accordion-earn-project-2-description"),
      alt: t("makerdao-logo"),
    },
    {
      title: t("page-stablecoins-accordion-earn-project-bug-bounties"),
      image: ethImg,
      link: "/bug-bounty/",
      description: t("page-stablecoins-accordion-earn-project-3-description"),
      alt: t("ethereum-logo"),
    },
  ]

  const exchanges: Array<CardListItem> = [
    {
      title: "Coinbase",
      image: coinbaseImg,
      link: "https://coinbase.com",
      alt: t("coinbase-logo"),
    },
    {
      title: "Gemini",
      image: geminiImg,
      link: "https://gemini.com",
      alt: t("gemini-logo"),
    },
    {
      title: "Kraken",
      image: krakenImg,
      link: "https://kraken.com",
      alt: t("kraken-logo"),
    },
    {
      title: "Coinmama",
      image: coinmamaImg,
      link: "https://coinmama.com",
      alt: t("coinmama-logo"),
    },
    {
      title: "Bittrex",
      image: bittrexImg,
      link: "https://global.bittrex.com",
      alt: t("bittrex-logo"),
    },
    {
      title: "Binance",
      image: binanceImg,
      link: "https://binance.com",
      alt: t("binance-logo"),
    },
  ]

  return {
    cardListGroups: {
      dapps,
      borrow,
      earn,
      exchanges,
    },
  }
}
