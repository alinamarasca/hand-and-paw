const getAvatarHandler = array => {
  const avatar = array
    .map(item => (item.isPrincipal ? item.image : null))
    .filter(item => item)[0];
  return avatar;
};

module.exports = getAvatarHandler;
