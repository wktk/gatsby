import React from "react"
import { Link } from "gatsby"
import {
  fontSizes,
  colors,
  space,
  mediaQueries,
  letterSpacings,
  transition,
} from "../utils/presets"

function createItems(items, location) {
  return (
    items &&
    items.map(item => (
      <li
        key={location.pathname + item.url}
        css={{
          [mediaQueries.xl]: {
            fontSize: fontSizes[1],
          },
        }}
      >
        <Link
          to={location.pathname + item.url}
          css={{
            [mediaQueries.xl]: {
              "&&": {
                color: colors.grey[60],
                border: 0,
                transition: `all ${transition.speed.fast} ${
                  transition.curve.default
                }`,
                ":hover": {
                  color: colors.link.color,
                  borderBottom: `1px solid ${colors.link.hoverBorder}`,
                },
              },
            },
          }}
        >
          {item.title}
        </Link>
        {item.items && (
          <ul
            css={{
              marginLeft: space[6],
              // not sure about this
              listStyle: `none`,
              // listStyleType: `disc`
            }}
          >
            {createItems(item.items, location)}
          </ul>
        )}
      </li>
    ))
  )
}

function TableOfContents({ page, location }) {
  return page.tableOfContents.items ? (
    <>
      <h2
        css={{
          textTransform: `uppercase`,
          fontSize: fontSizes[1],
          color: colors.grey[80],
          letterSpacing: letterSpacings.tracked,
          marginTop: 0,
        }}
      >
        Table of Contents
      </h2>
      <nav>
        <ul
          css={{
            [mediaQueries.xl]: {
              listStyle: `none`,
              margin: 0,
            },
          }}
        >
          {createItems(page.tableOfContents.items, location)}
        </ul>
      </nav>
    </>
  ) : null
}

export default TableOfContents
