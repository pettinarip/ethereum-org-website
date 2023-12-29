import { useState } from "react"
import { shuffle } from "lodash"
import { useRouter } from "next/router"
import { useTranslation } from "next-i18next"

// TODO: Remove unused?
// import argent from "@/assets/wallets/argent.png"
// import binanceus from "@/assets/exchanges/binance.png"
// import imtoken from "@/assets/wallets/imtoken.png"
// import mycrypto from "@/assets/wallets/mycrypto.png"
// import myetherwallet from "@/assets/wallets/myetherwallet.png"
// import squarelink from "@/assets/wallets/squarelink.png"
// import trust from "@/assets/wallets/trust.png"
import type { ImageProps } from "@/components/Image"

import { trackCustomEvent } from "@/lib/utils/matomo"

import exchangeData from "@/data/exchangesByCountry"

import binance from "@/assets/exchanges/binance.png"
import bitbuy from "@/assets/exchanges/bitbuy.png"
import bitfinex from "@/assets/exchanges/bitfinex.png"
import bitflyer from "@/assets/exchanges/bitflyer.png"
import bitkub from "@/assets/exchanges/bitkub.png"
import bitso from "@/assets/exchanges/bitso.png"
import bittrex from "@/assets/exchanges/bittrex.png"
import bitvavo from "@/assets/exchanges/bitvavo.png"
import bybit from "@/assets/exchanges/bybit.png"
import coinbase from "@/assets/exchanges/coinbase.png"
import coinmama from "@/assets/exchanges/coinmama.png"
import coinspot from "@/assets/exchanges/coinspot.png"
import cryptocom from "@/assets/exchanges/crypto.com.png"
import easycrypto from "@/assets/exchanges/easycrypto.png"
import gateio from "@/assets/exchanges/gateio.png"
import gemini from "@/assets/exchanges/gemini.png"
import huobiglobal from "@/assets/exchanges/huobiglobal.png"
import itezcom from "@/assets/exchanges/itezcom.png"
import korbit from "@/assets/exchanges/korbit.png"
import kraken from "@/assets/exchanges/kraken.png"
import kucoin from "@/assets/exchanges/kucoin.png"
import moonpay from "@/assets/exchanges/moonpay.png"
import mtpelerin from "@/assets/exchanges/mtpelerin.png"
import okx from "@/assets/exchanges/okx.png"
import rain from "@/assets/exchanges/rain.png"
import shakepay from "@/assets/exchanges/shakepay.png"
import wazirx from "@/assets/exchanges/wazirx.png"

type ExchangeKey =
  | "binance"
  | "binanceus"
  | "bitbuy"
  | "bitfinex"
  | "bitflyer"
  | "bitkub"
  | "bitso"
  | "bittrex"
  | "bitvavo"
  | "bybit"
  | "coinbase"
  | "coinmama"
  | "coinspot"
  | "cryptocom"
  | "easycrypto"
  | "gateio"
  | "gemini"
  | "huobiglobal"
  | "itezcom"
  | "kraken"
  | "kucoin"
  | "mtpelerin"
  | "moonpay"
  | "okx"
  | "rain"
  | "shakepay"
  | "wazirx"
  | "korbit"

type ExchangeDetail = {
  name: string
  url: string
  image: ImageProps["src"]
  usaExceptions: string[]
}

type ExchangeDetails = Record<ExchangeKey, ExchangeDetail>

type Country = keyof typeof exchangeData

type ExchangeData = Record<Country, ExchangeKey[]>

type ExchangeByCountryOption = {
  value: string
  label: string
  exchanges: string[]
}

type FilteredData = {
  title: string
  description?: string
  link: string
  image: ImageProps["src"]
  alt: string
}

const UNITED_STATES = "United States of America (USA)"

const exchanges: ExchangeDetails = {
  binance: {
    name: "Binance",
    url: "https://www.binance.com/",
    image: binance,
    usaExceptions: [],
  },
  binanceus: {
    name: "Binance US",
    url: "https://www.binance.us/",
    image: binance,
    usaExceptions: ["HI", "ID", "NY", "TX", "VT"],
  },
  bitbuy: {
    name: "Bitbuy",
    url: "https://bitbuy.ca/",
    image: bitbuy,
    usaExceptions: [],
  },
  bitfinex: {
    name: "Bitfinex",
    url: "https://www.bitfinex.com/",
    image: bitfinex,
    usaExceptions: [],
  },
  bitflyer: {
    name: "bitFlyer",
    url: "https://bitflyer.com/",
    image: bitflyer,
    usaExceptions: ["NV", "WV"],
  },
  bitkub: {
    name: "Bitkub",
    url: "https://www.bitkub.com/",
    image: bitkub,
    usaExceptions: [],
  },
  bitso: {
    name: "Bitso",
    url: "https://bitso.com/",
    image: bitso,
    usaExceptions: [],
  },
  bittrex: {
    name: "Bittrex",
    url: "https://global.bittrex.com/",
    image: bittrex,
    usaExceptions: ["CT", "HI", "NY", "NH", "TX", "VT", "VA"],
  },
  bitvavo: {
    name: "Bitvavo",
    url: "https://bitvavo.com/en/ethereum",
    image: bitvavo,
    usaExceptions: [],
  },
  bybit: {
    name: "Bybit",
    url: "https://www.bybit.com/",
    image: bybit,
    usaExceptions: [],
  },
  coinbase: {
    name: "Coinbase",
    url: "https://www.coinbase.com/",
    image: coinbase,
    usaExceptions: ["HI"],
  },
  coinmama: {
    name: "Coinmama",
    url: "https://www.coinmama.com/",
    image: coinmama,
    usaExceptions: ["CT", "FL", "IA", "NY"],
  },
  coinspot: {
    name: "CoinSpot",
    url: "https://www.coinspot.com.au/",
    image: coinspot,
    usaExceptions: [],
  },
  cryptocom: {
    name: "Crypto.com",
    url: "https://crypto.com/exchange/",
    image: cryptocom,
    usaExceptions: ["NY"],
  },
  easycrypto: {
    name: "Easy Crypto",
    url: "https://easycrypto.com/",
    image: easycrypto,
    usaExceptions: [],
  },
  gateio: {
    name: "Gate.io",
    url: "https://www.gate.io/",
    image: gateio,
    usaExceptions: [],
  },
  huobiglobal: {
    name: "Huobi Global",
    url: "https://huobi.com/",
    image: huobiglobal,
    usaExceptions: [],
  },
  itezcom: {
    name: "Itez",
    url: "https://itez.com/",
    image: itezcom,
    usaExceptions: [],
  },
  kraken: {
    name: "Kraken",
    url: "https://www.kraken.com/",
    image: kraken,
    usaExceptions: ["NY, WA"],
  },
  kucoin: {
    name: "KuCoin",
    url: "https://www.kucoin.com/",
    image: kucoin,
    usaExceptions: [],
  },
  moonpay: {
    name: "MoonPay",
    url: "https://www.moonpay.com/",
    image: moonpay,
    usaExceptions: ["VI"],
  },
  mtpelerin: {
    name: "Mt Pelerin",
    url: "https://www.mtpelerin.com/",
    image: mtpelerin,
    usaExceptions: [],
  },
  okx: {
    name: "OKX",
    url: "https://www.okx.com/",
    image: okx,
    usaExceptions: [],
  },
  gemini: {
    name: "Gemini",
    url: "https://gemini.com/",
    image: gemini,
    usaExceptions: ["HI"],
  },
  rain: {
    name: "Rain",
    url: "https://rain.bh",
    image: rain,
    usaExceptions: [],
  },
  shakepay: {
    name: "Shakepay",
    url: "https://shakepay.com",
    image: shakepay,
    usaExceptions: [],
  },
  wazirx: {
    name: "WazirX",
    url: "https://wazirx.com/",
    image: wazirx,
    usaExceptions: [],
  },
  korbit: {
    name: "Korbit",
    url: "https://korbit.co.kr",
    image: korbit,
    usaExceptions: [],
  },
}

export const useCentralizedExchanges = () => {
  const { locale } = useRouter()
  const { t } = useTranslation("page-get-eth")
  const [selectedCountry, setSelectedCountry] =
    useState<ExchangeByCountryOption | null>()

  const placeholderString = t("page-get-eth-exchanges-search")

  // Add `value` & `label` for Select component, sort alphabetically
  const selectOptions: ExchangeByCountryOption[] = Object.entries(
    exchangeData as ExchangeData
  )
    .map(([country, exchanges]) => ({
      value: country,
      label: country,
      exchanges,
    }))
    .sort((a, b) => a.value.localeCompare(b.value))

  const handleSelectChange = (
    selectedOption: ExchangeByCountryOption
  ): void => {
    trackCustomEvent({
      eventCategory: `Country input`,
      eventAction: `Selected`,
      eventName: selectedOption.value,
    })
    setSelectedCountry(selectedOption)
  }

  const exchangesArray = Object.keys(exchanges) as ExchangeKey[]

  const formatList = (values: string[]): string =>
    new Intl.ListFormat(locale, {
      style: "long",
      type: "conjunction",
    }).format(values)

  // Construct arrays for CardList
  let filteredExchanges: FilteredData[] = []

  const hasSelectedCountry = !!selectedCountry?.value
  if (hasSelectedCountry) {
    // Filter to exchanges that serve selected Country
    filteredExchanges = shuffle(
      exchangesArray
        .filter((exchange) => selectedCountry?.exchanges.includes(exchange))
        // Format array for <CardList/>
        .map((exchange) => {
          // Add state exceptions if Country is USA
          let description: string | undefined
          // TODO: Set up for i18n support; currently all country names in English:
          if (selectedCountry.value === UNITED_STATES) {
            const { usaExceptions } = exchanges[exchange]
            if (usaExceptions.length > 0) {
              description = `${t("page-get-eth-exchanges-except")} ${formatList(
                usaExceptions
              )}`
            }
          }
          return {
            title: exchanges[exchange].name,
            description,
            link: exchanges[exchange].url,
            image: exchanges[exchange].image,
            alt: "", // TODO: Add alt text for exchange image
          }
        })
    )
  }

  const hasExchangeResults = filteredExchanges.length > 0

  return {
    selectOptions,
    handleSelectChange,
    placeholderString,
    hasSelectedCountry,
    hasExchangeResults,
    filteredExchanges,
  }
}
