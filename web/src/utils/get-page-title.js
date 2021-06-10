import defaultSettings from '@/settings'

const title = defaultSettings.title || 'ronaldoxzb'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
