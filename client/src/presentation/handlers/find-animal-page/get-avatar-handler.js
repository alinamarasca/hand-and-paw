export const getAvatarHandler = array => {
  return array
    .map(item => (item.isPrincipal ? item.image : null))
    .filter(item => item);
};
