import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const exampleInitialState = {
  //Калькулятор на странице визиток
  bussnessCart_count_calc_tirage: 100,
  bussnessCart_choose_size: 1,
  bussnessCart_choose_curner_cutting: false,
  bussnessCart_choose_peper: 1,
  bussnessCart_color_chrome: 4,
  bussnessCart_price_calc: 231
}

export const actionTypes = {
  //Калькулятор на странице визиток
  BUSSNESSCART_COLOR_CHROME_INCREMENT:  'BUSSNESSCART_COLOR_CHROME_INCREMENT',
  BUSSNESSCART_COLOR_CHROME_DECREMENT:  'BUSSNESSCART_COLOR_CHROME_DECREMENT',
  BUSSNESSCART_COUNT_TIRAGE_INCREMENT:  'BUSSNESSCART_COUNT_TIRAGE_INCREMENT',
  BUSSNESSCART_COUNT_TIRAGE_DECREMENT:  'BUSSNESSCART_COUNT_TIRAGE_DECREMENT',
  BUSSNESSCART_CHOOSE_SIZE:             'BUSSNESSCART_CHOOSE_SIZE',
  BUSSNESSCART_CHOOSE_PEPER:            'BUSSNESSCART_CHOOSE_PEPER',
  BUSSNESSCART_CHOOSE_CURNER_CUTTING:   'BUSSNESSCART_CHOOSE_CURNER_CUTTING',
  BUSSNESSCART_PRICE_CALC:              'BUSSNESSCART_PRICE_CALC',
}

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    //Калькулятор на странице визиток
    case actionTypes.BUSSNESSCART_COLOR_CHROME_INCREMENT:
      return Object.assign({}, state, {
        bussnessCart_color_chrome: 4
      })
    case actionTypes.BUSSNESSCART_COLOR_CHROME_DECREMENT:
      return Object.assign({}, state, {
        bussnessCart_color_chrome: 8
      })
    case actionTypes.BUSSNESSCART_COUNT_TIRAGE_INCREMENT:
      return Object.assign({}, state, {
        bussnessCart_count_calc_tirage: state.bussnessCart_count_calc_tirage + 50
      })
    case actionTypes.BUSSNESSCART_COUNT_TIRAGE_DECREMENT:
      return Object.assign({}, state, {
        bussnessCart_count_calc_tirage: state.bussnessCart_count_calc_tirage - 50
      })
    case actionTypes.BUSSNESSCART_CHOOSE_SIZE:
      return Object.assign({}, state, {
        bussnessCart_choose_size: action.payload
      })
    case actionTypes.BUSSNESSCART_CHOOSE_CURNER_CUTTING:
      return Object.assign({}, state, {
        bussnessCart_choose_curner_cutting: action.payload
      })
    case actionTypes.BUSSNESSCART_PRICE_CALC:
      return Object.assign({}, state, {
        bussnessCart_price_calc: action.payload
      })
    default:
      return state
  }
}

// ACTIONS   //Калькулятор на странице визиток
export const bussnessCart_incrementCount = () => {
  return { type: actionTypes.BUSSNESSCART_COLOR_CHROME_INCREMENT }
}
export const bussnessCart_decrementCount = () => {
  return { type: actionTypes.BUSSNESSCART_COLOR_CHROME_DECREMENT }
}
export const bussnessCart_countTirageIncrement = () => {
  return { type: actionTypes.BUSSNESSCART_COUNT_TIRAGE_INCREMENT }
}
export const bussnessCart_countTirageDecriment = () => {
  return { type: actionTypes.BUSSNESSCART_COUNT_TIRAGE_DECREMENT }
}
export const bussnessCart_chooseSize = (data_size) => {
    return {
      type: actionTypes.BUSSNESSCART_CHOOSE_SIZE,
      payload: data_size
    }
}
export const bussnessCart_chooseCurnerCutting = (data_curnerCutting) => {
    return {
      type: actionTypes.BUSSNESSCART_CHOOSE_CURNER_CUTTING,
      payload: data_curnerCutting
    }
}
export const bussnessCart_priceCalc = (data_price_calc) => {
    return {
      type: actionTypes.BUSSNESSCART_PRICE_CALC,
      payload: data_price_calc
    }
}




export function initializeStore (initialState = exampleInitialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  )
}
