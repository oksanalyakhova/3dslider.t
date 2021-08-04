const getRoute = (link) => {
  if (/\d{11}/g.test(link.toString())) {
    return `tel:+${link}`;
  }

  const route = link?.externalLink
    ? link?.externalLink
    : link?.internalLink?.parentPage?.handle
    ? `/${link?.internalLink?.parentPage?.handle}/${link?.internalLink?.handle}`
    : `/${link?.internalLink?.handle}`;

  return route === '//' ? '/' : route;
};

export default getRoute;
