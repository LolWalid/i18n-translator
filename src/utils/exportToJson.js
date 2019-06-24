function jsonFromTranslations(translations) {
  let frAcc = {}
  translations.forEach(translation => {
    jsonFromTranslation(translation.i18nKey, translation.fr, frAcc)
  })

  let enAcc = {}
  translations.forEach(translation => {
    jsonFromTranslation(translation.i18nKey, translation.en, enAcc)
  })

  return [{ fr: frAcc }, { en: enAcc }]
}

function jsonFromTranslation(i18nKey, value, acc) {
  let x = acc
  let sub_keys = i18nKey.split('.')
  sub_keys.forEach((key, index) => {
    if (index === sub_keys.length -1) {
      x[key] = value
    } else {
      if (!x[key]) x[key] = {}
      x = x[key]
    }
  })
  return acc
}

export { jsonFromTranslations }
