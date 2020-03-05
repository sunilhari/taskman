async function isIncognitoMode() {
  if ("storage" in navigator && "estimate" in navigator.storage) {
    const { usage, quota } = await navigator.storage.estimate();
    console.log(`Using ${usage} out of ${quota} bytes.`);

    if (quota < 120000000) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

export { isIncognitoMode };
