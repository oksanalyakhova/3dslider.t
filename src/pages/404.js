import React, { useEffect } from 'react';
// import PageLayout from 'components/Pages';
import { navigate } from 'gatsby';
// import { graphql } from 'gatsby';
// import LocaleContext from 'context/LocaleProvider';

const NotFound = (props) => {
  // const { selectedLocale } = useContext(LocaleContext);

  // const edges = props?.data?.allContentfulPage?.edges?.filter(
  //   (edge) => edge?.node?.node_locale === selectedLocale
  // );

  // const data = {
  //   data: {
  //     allContentfulPage: {
  //       edges,
  //     },
  //   },
  // };

  useEffect(() => {
    navigate('/');
  }, []);

  return <></>;
};

export default NotFound;

// export const notFoundQuery = graphql`
//   query {
//     allContentfulPage(filter: { handle: { eq: "404" } }) {
//       edges {
//         node {
//           handle
//           tags
//           parentPage {
//             handle
//           }
//           node_locale
//           seoMeta {
//             titleSeo
//             descriptionSeo
//             ogGraphTitle
//             openGraphDescription
//             openGraphTypes
//             openGraphImage {
//               file {
//                 url
//               }
//             }
//             seoSchema {
//               _type
//               _context
//               image
//               author {
//                 name
//               }
//               headline
//               publisher {
//                 logo {
//                   url
//                 }
//                 name
//               }
//               description
//               telephone
//               legalName
//               address {
//                 postalCode
//                 addressRegion
//                 streetAddress
//                 addressCountry
//                 addressLocality
//               }
//               brand
//               email
//               logo
//               offers {
//                 highPrice
//                 lowPrice
//                 priceCurrency
//                 url
//               }
//               mpn
//               name
//               sku
//               url
//               worksFor {
//                 name
//               }
//               review {
//                 name
//                 reviewBody
//                 publisher {
//                   name
//                 }
//                 reviewRating {
//                   bestRating
//                   ratingValue
//                   worstRating
//                 }
//                 author {
//                   name
//                 }
//               }
//             }
//             page {
//               id
//             }
//           }
//           components {
//             __typename
//             ... on ContentfulIntroComponent {
//               id
//               topSpacingMobile
//               bottomSpacingMobile
//               topSpacingDesktop
//               bottomSpacingDesktop
//               overline
//               secondaryTitle
//               title
//               body
//               ctaText
//               internalLink {
//                 handle
//                 parentPage {
//                   handle
//                 }
//               }
//               componentStyle
//               image {
//                 title
//                 file {
//                   url
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `
