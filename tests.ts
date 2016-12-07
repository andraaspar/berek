import { Axis2D } from 'illa/Axis2D'
import { getAreCookiesAccepted } from './CookieUtil'
import { getSize } from './DimensionsUtil'
import jQuery from 'jquery-ts'
import { log } from 'illa/Log'

log(getAreCookiesAccepted())
log(getSize(jQuery('body'), Axis2D.X))