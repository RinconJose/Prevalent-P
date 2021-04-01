/* IMPORT GENERAL */
import {win, doc, log, al, addEv, que, queAll, gId} from "./general/var.js"

/* IMPORT PARTIALS */
import { customPropertiesPolyfill } from './partials/customPropertiesPolyfill.js'
import { openLoader } from './partials/loader.js'
import { menu } from './partials/menu.js'
import { modal } from './partials/modal.js'
import { modal2 } from './partials/modal.js'
import 'regenerator-runtime/runtime'

// /* LOAD COMPLETE */
doc.addEv('DOMContentLoaded', e => {

	// CUSTOM PROPERTIES POLYFILL
	customPropertiesPolyfill()

	// OPEN LOADER
	openLoader()

	// MENU
	menu()

	// MODAL
	modal()
	// CHOICES ???

	// SET PROPERY
	// d.documentElement.style.setProperty('--bg-example', 'purple');

})