/**
 * This file will import used shoelace components and styles for page and extension alike
 * and will set the base path for shoelace's icons
 */

import '@shoelace-style/shoelace/dist/themes/light.css'
import './assets/tailwind-toucan.css'
import './assets/shoelace-toucan-theme.css'
import './assets/mitre.css'

import '@shoelace-style/shoelace/dist/components/menu/menu.js'
import '@shoelace-style/shoelace/dist/components/menu-item/menu-item.js'
import '@shoelace-style/shoelace/dist/components/spinner/spinner.js'
import '@shoelace-style/shoelace/dist/components/dropdown/dropdown.js'
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js'
import '@shoelace-style/shoelace/dist/components/button-group/button-group.js'
import '@shoelace-style/shoelace/dist/components/button/button.js'
import '@shoelace-style/shoelace/dist/components/switch/switch.js'
import '@shoelace-style/shoelace/dist/components/details/details.js'
import '@shoelace-style/shoelace/dist/components/input/input.js'
import '@shoelace-style/shoelace/dist/components/textarea/textarea.js'
import '@shoelace-style/shoelace/dist/components/select/select.js'
import '@shoelace-style/shoelace/dist/components/option/option.js'
import '@shoelace-style/shoelace/dist/components/dialog/dialog.js'
import '@shoelace-style/shoelace/dist/components/alert/alert.js'

import { setBasePath } from '@shoelace-style/shoelace'

setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.8.0/cdn/')
