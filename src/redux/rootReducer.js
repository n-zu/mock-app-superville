import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { i18nReducer } from "react-redux-i18n";
import commonReducer from '../common/common.reducer';
import mainReducer from '../main/main.reducer';
import cotizacionReducer from '../cotizacion/cotizacion.reducer';
// [ROOT REDUCER] IMPORT REDUCER


const createRootReducer = (history) => combineReducers({
    i18n: i18nReducer,
    router: connectRouter(history),
    common: commonReducer,
	main: mainReducer,
    cotizacion: cotizacionReducer
    // [ROOT REDUCER] ADD REDUCER
});

export default createRootReducer
