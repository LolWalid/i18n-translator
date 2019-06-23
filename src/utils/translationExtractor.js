function extractKeysFromJson(hash) {
  return Object.keys(hash).map(function(key) {
    if (hash[key] && typeof hash[key] == 'object' ) {
      let x = extractKeysFromJson(hash[key]).flat()
      return x.flat().map(function(e) { return (key + '.' + e)});
    } else {
      return key
    }
  }).flat()
}

var hash = {
  "fr": {
    "admin": {
      "create": {
        "success": "administrateur créé avec succès",
        "failure": "administrateur n'a pas pu être créé"
      }
    },
    "project": {
      "create": null,
      "change_amount": {
        "success": "le montant de votre projet a été modifié"
      }
    },
    "user": {
      "notify": {
        "account_changed": "votre compte a bien été modifié"
      }
    }
  }
}


function getValue(sub_keys, hash) {
  var x = hash
  for (var i = 0; i < sub_keys.length; ++i) {
    x = x[sub_keys[i]]
  }
  return x;
}

var keys_array = extractKeysFromJson(hash)
keys_array.map(function(e) {
  return getValue(e.split('.'), hash)
})
