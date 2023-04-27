import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { StateType, DispatchType } from '../../redux/store'

export const useCustomDispatch: () => DispatchType = useDispatch
export const useCustomSelector: TypedUseSelectorHook<StateType> = useSelector
