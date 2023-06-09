// This file was sourced from Github (MIT License)
// https://github.com/facebook/lexical/blob/main/packages/lexical-playground/src/nodes/TableCellNodes.ts
import { CodeHighlightNode, CodeNode } from '@lexical/code';
// import {HashtagNode} from '@lexical/hashtag';
import { AutoLinkNode, LinkNode } from '@lexical/link';
import { ListItemNode, ListNode } from '@lexical/list';
import { HeadingNode, QuoteNode } from '@lexical/rich-text';
import type { Klass, LexicalNode } from 'lexical';

// import {AutocompleteNode} from './AutocompleteNode';
// import {EmojiNode} from './EmojiNode';
// import {EquationNode} from './EquationNode';
// import {ExcalidrawNode} from './ExcalidrawNode';
import { ImageNode } from './ImageNode';
// import {KeywordNode} from './KeywordNode';
import { MentionNode } from './MentionNode';

const PlaygroundNodes: Array<Klass<LexicalNode>> = [
  HeadingNode,
  ListNode,
  ListItemNode,
  QuoteNode,
  CodeNode,
  // HashtagNode,
  CodeHighlightNode,
  AutoLinkNode,
  LinkNode,
  ImageNode,
  MentionNode,
  // EmojiNode,
  // ExcalidrawNode,
  // EquationNode,
  // AutocompleteNode,
  // KeywordNode,
];

export default PlaygroundNodes;
