const availableLocales = ['fr', 'en'];

let translations = [
  { id: 1, i18nKey: 'admin.create.success', fr: "administrateur a été créé", en: '', editing: true},
  { id: 2, i18nKey: 'admin.create.failure', fr: "administrateur n'a pas pu être créé", en: '', editing: false},
  { id: 3, i18nKey: 'project.create', fr: '', en: '', editing: false},
  { id: 4, i18nKey: 'project.change_amount.success', fr: "le montant de votre projet a été modifié", en: '', editing: false},
  { id: 5, i18nKey: 'user.notify.account_changed', fr: "votre compte a bien été modifié", en: '', editing: false}
]

export { availableLocales, translations }
