import { ReportsModel } from "@crowdin/crowdin-api-client"

import i18nConfig from "../../i18n.config.json"

export const OLD_CONTENT_DIR = "src/content"
export const CONTENT_DIR = "public/content"
export const TRANSLATIONS_DIR = "public/content/translations"
export const TRANSLATED_IMAGES_DIR = "/content/translations"

// i18n
export const DEFAULT_LOCALE = "en"
// Sorted list of supported locales codes, defined in `i18n.config.json`
const BUILD_LOCALES = process.env.BUILD_LOCALES
export const LOCALES_CODES = BUILD_LOCALES
  ? BUILD_LOCALES.split(",")
  : i18nConfig.map(({ code }) => code)

// Site urls
export const SITE_URL = "https://ethereum.org"
export const DISCORD_PATH = "/discord/"
export const EDIT_CONTENT_URL = `https://github.com/ethereum/ethereum-org-website/tree/dev/`
export const WEBSITE_EMAIL = "website@ethereum.org"

// Config
export const CONTENT_IMAGES_MAX_WIDTH = 800
export const GITHUB_BASE_API =
  "https://api.github.com/repos/ethereum/ethereum-org-website"
export const GITHUB_COMMITS_URL = GITHUB_BASE_API + "/commits"
export const GITHUB_URL = `https://github.com/`
export const BASE_TIME_UNIT = 3600 // 1 hour

// Quiz Hub
export const PROGRESS_BAR_GAP = "4px"
export const PASSING_QUIZ_SCORE = 65
export const USER_STATS_KEY = "quizzes-stats"
export const INITIAL_QUIZ = "what-is-ethereum"
export const TOTAL_QUIZ_QUESTIONS_ANSWERED = 100000
export const TOTAL_QUIZ_AVERAGE_SCORE = 67.4
export const TOTAL_QUIZ_RETRY_RATE = 15.6

// Crowdin
export const CROWDIN_PROJECT_ID = 363359
export const CROWDIN_API_MAX_LIMIT = 500
export const FIRST_CROWDIN_CONTRIBUTION_DATE = "2019-07-01T00:00:00+00:00"
export const REGULAR_RATES: ReportsModel.RegularRate[] = [
  {
    mode: "tm_match",
    value: 1.01,
  },
  {
    mode: "no_match",
    value: 1.01,
  },
]

export const languagePathRootRegExp = /^.+\/content\/translations\/[a-z\-]*\//

export const NAV_BAR_PX_HEIGHT = "75px"
export const FROM_QUERY = "from"
