import React from 'react';
import { graphql } from 'gatsby';
import PageLayout from 'components/Pages';

const Pages = (props) => <PageLayout {...props} />;

export default Pages;
//
// export const query = graphql`
//   query($handle: String!, $locale: String!) {
//     allContentfulPage(
//       filter: { handle: { eq: $handle }, node_locale: { eq: $locale } }
//     ) {
//       edges {
//         node {
//           contentful_id
//           node_locale
//           handle
//           parentPage {
//             handle
//           }
//           enableDarkHeader
//           modules {
//             __typename
//             ... on Contentful3DSliderModule {
//               id
//               contentful_id
//               ThreeDSliderBody: body
//               cta
//               node_locale
//               title
//               secondaryTitle
//               popupBody {
//                 raw
//               }
//               steps {
//                 body {
//                   raw
//                 }
//                 hexColor
//                 contentful_id
//                 minutes
//                 minutesCaption
//                 title
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;
