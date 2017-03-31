function symbolKeyMirror(source) {
  if(!Array.isArray(source)) {
    throw 'source parameter is not an Array';
  }
  return source.reduce((acc, current) => {...acc, current: Symbol(current)}, {});
}

export default symbolKeyMirror
