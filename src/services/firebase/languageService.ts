import actions from '../../redux/features/experience/languageSlice'

export const getLanguage = (): any => async (dispatch: any): Promise<void> => {
  dispatch(actions.getLanguage('getLanguage'));
}

export const setLanguage = (lang: string): any => async (dispatch: any): Promise<void> => {
  dispatch(actions.setLanguage(lang))
}
