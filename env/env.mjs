// @ts-check
import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

/* c8 ignore start */
export const env = createEnv({
  skipValidation: process.env.CI === 'true' || process.env.NODE_ENV === 'test',
  server: {
    WAKATIME_API_KEY: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_API_URL: z.string().url().optional(),
    NEXT_PUBLIC_PORTFOLIO_API_KEY: z.string().min(1).optional(),
  },
  runtimeEnv: {
    WAKATIME_API_KEY: process.env.WAKATIME_API_KEY,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_PORTFOLIO_API_KEY: process.env.NEXT_PUBLIC_PORTFOLIO_API_KEY,
  }
})
/* c8 ignore stop */