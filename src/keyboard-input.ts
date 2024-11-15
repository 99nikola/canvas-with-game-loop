const keyPressedSet: Set<string> = new Set();

window.addEventListener("keyup", (keyboardEvent) =>
  keyPressedSet.delete(keyboardEvent.key)
);
window.addEventListener("keydown", (keyboardEvent) =>
  keyPressedSet.add(keyboardEvent.key)
);

export function isKeyDown(key: string) {
  return keyPressedSet.has(key);
}
