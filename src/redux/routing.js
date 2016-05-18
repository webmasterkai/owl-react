import { selectActiveKeyDefault } from 'redux-history-sync'
import { createSelector } from 'reselect'
import locationInfo from '../routes'
// We are using the redux-history-sync to put location into state.
function routeSelector(history) {
  if (!history) return history
  return {
    history,
    // Location object gets sent to locationInfo
    route: locationInfo(history.location),
  }
}
// Pass in the state object and return some info about a "route".
// selectActiveKeyDefault() is a helper function to grab the current location info.
export default createSelector(selectActiveKeyDefault, routeSelector)
