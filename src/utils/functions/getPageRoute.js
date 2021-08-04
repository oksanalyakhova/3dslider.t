const getPageRoute = (page) => {
  if (page[0].externalLink) {
    const result = `/${page[0].externalLink}`;
    return result === '//' ? '/' : result;
  } else if (page[0].parentPage.handle && page[0].handle) {
    return `/${page[0].parentPage.handle}/${page[0].handle}`;
  } else if (page[0].handle) {
    return `/${page[0].handle}`;
  } else {
    return null;
  }
};

export default getPageRoute;
