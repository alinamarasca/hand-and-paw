const getAvatarHandler = array => {
  let avatar;
  if (array.length === 0) {
    avatar = null;
  } else {
    avatar = array
      .map(item => (item.isPrincipal ? item.image : null))
      .filter(item => item)[0];
  }
  return avatar;
};

module.exports = getAvatarHandler;
