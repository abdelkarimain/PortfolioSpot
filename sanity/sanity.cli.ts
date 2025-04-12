import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'l188pgx3',
    dataset: 'production'
  },
  autoUpdates: true,
  studioHost: 'portfoliospot',
})
