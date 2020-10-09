const validAnchorKey = new Set;
validAnchorKey.add('Enter');

const validButtonKeys = new Set;
validButtonKeys.add('Enter');
validButtonKeys.add('Space');

const tabKeys = new Set;
tabKeys.add('Tab');
tabKeys.add('Shift');

function isKeyValid(event, key) {
  const element = event.target;

  if(element.nodeName === 'A') {
    return validAnchorKey.has(key);
  }
  else if (element.nodeName === 'BUTTON'){
    return validButtonKeys.has(key);
  }
  else {
    const hasKey = validButtonKeys.has(key);
    if (hasKey) {
      // event.preventDefault();
    }
    return hasKey;
  }
}