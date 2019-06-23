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

function getValue(sub_keys, hash) {
  var x = hash
  for (var i = 0; i < sub_keys.length; ++i) {
    x = x[sub_keys[i]]
  }
  return x;
}

export {
  extractKeysFromJson,
  getValue
}
