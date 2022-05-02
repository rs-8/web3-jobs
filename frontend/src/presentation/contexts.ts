import React from 'react'
import localesService from 'src/data/services/Locales'

export const LocaleContext = React.createContext(new localesService().get())
