import {TokenLocation} from './TokenLocation';

/**
 * It can be shared with preprocessor pseudolanguage
 *
 * @export
 * @enum {number}
 */
export enum TokenType {
  // Text
  QUOTE = 'QUOTE',
  BRACKET = 'BRACKET',
  COMMA = 'COMMA',
  COLON = 'COLON',
  NUMBER = 'NUMBER',
  KEYWORD = 'KEYWORD',
  CHARACTER = 'CHARACTER',
  STRING = 'STRING',
  EOL = 'EOL',
  EOF = 'EOF',

  // Math
  PLUS = 'PLUS',
  MINUS = 'MINUS',
  MUL = 'MUL',
  DIV = 'DIV',
}

/**
 * Token type related meta kind
 *
 * @export
 * @enum {number}
 */
export enum TokenKind {
  // QUOTE
  SINGLE_QUOTE = 'SINGLE_QUOTE', // '
  DOUBLE_QUOTE = 'DOUBLE_QUOTE', // "

  // BRACKETS
  PARENTHES_BRACKET = 'PARENTHES_BRACKET', // ()
  CURLY_BRACKET = 'CURLY_BRACKET', // {}
  SQUARE_BRACKET = 'SQUARE_BRACKET', // []

  // ASM
  REGISTER = 'REGISTER',
  BYTE_SIZE_OVERRIDE = 'BYTE_SIZE_OVERRIDE',
}

/**
 * Result of tokenizing phrase
 *
 * @export
 * @class Token
 * @template ValueType
 * @template KindType
 */
export class Token<ValueType = any> {
  /**
   * Creates an instance of Token.
   *
   * @param {TokenType} type
   * @param {string} text
   * @param {TokenLocation} loc
   * @param {ValueType} [value=null]
   * @memberof Token
   */
  constructor(
    public readonly type: TokenType,
    public readonly kind: TokenKind,
    public readonly text: string,
    public readonly loc: TokenLocation,
    public readonly value: ValueType = null,
  ) {}
}
