import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import type { Block, Inline, Document as RichTextDocument, Text } from '@contentful/rich-text-types'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import type { ReactNode } from 'react'

export type RichTextProps = {
  document?: RichTextDocument
}

type node = Block | Inline | Text

export const RichText = ({ document }: RichTextProps) => {
  if (!document) {
    return null
  }

  return (
    <>
      {documentToReactComponents(document, {
        renderMark: {
          [MARKS.BOLD]: (text) => <strong>{text}</strong>,
          [MARKS.ITALIC]: (text) => <i>{text}</i>,
        },
        renderNode: {
          [BLOCKS.HEADING_2]: (node: node, children: ReactNode) => <h2>{children}</h2>,
          [BLOCKS.HEADING_3]: (node: node, children: ReactNode) => <h3>{children}</h3>,
          [BLOCKS.HEADING_4]: (node: node, children: ReactNode) => <h4>{children}</h4>,
          [BLOCKS.LIST_ITEM]: (node: node, children: ReactNode) => <li>{children}</li>,
          [BLOCKS.PARAGRAPH]: (node: node, children: ReactNode) => <p>{children}</p>,
          [BLOCKS.UL_LIST]: (node: node, children: ReactNode) => <ul>{children}</ul>,
        },
      })}
    </>
  )
}
