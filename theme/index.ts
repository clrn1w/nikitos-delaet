import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'
import globalCss from './globalCss'
import tokens from './tokens'
import recipes from './recipes'
import slotRecipes from './slotRecipes'

const config = defineConfig({
	globalCss,
	theme: {
    tokens,
    recipes,
    slotRecipes,
  },
})

export default createSystem(defaultConfig, config)
