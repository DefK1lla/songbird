function getHash() {
  return new URL(window.location.href).hash.slice(2);
}

export default getHash;