import { init } from '@jill64/sentry-sveltekit-cloudflare/server'

const { onHandle, onError } = init(
  'https://01c9cb8292c0cb410aeec58300adfa5d@o4505814639312896.ingest.sentry.io/4506326934945792'
)

export const handle = onHandle()
export const handleError = onError()
