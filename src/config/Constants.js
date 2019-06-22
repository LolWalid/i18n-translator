// All will be move to redux !
const availableLocales = ['fr', 'en'];

let translations = {
  'admin.create.success'          : { fr: "administrateur a été créé", en: null },
  'admin.create.failure'          : { fr: "administrateur n'a pas pu être créé", en: null },
  'project.create'                : { fr: null, en: null },
  'project.change_amount.success' : { fr: "le montant de votre projet a été modifié", en: null },
  'user.notify.account_changed'   : { fr: "votre compte a bien été modifié", en: null  }
}

let keys = ['admin.create.success', 'admin.create.failure', 'project.create', 'project.change_amount.success', 'user.notify.account_changed']


export { availableLocales, keys, translations }
