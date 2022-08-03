export enum IROpcode {
  ASSIGN = 'ASSIGN',
  ALLOC = 'ALLOC',
  STORE = 'STORE',
  LOAD = 'LOAD',
  CALL = 'CALL',
  LABEL = 'LABEL',
  BR = 'BR',
  ICMP = 'ICMP',
  PHI = 'PHI',
  JMP = 'JMP',
  FN_DECL = 'FN_DECL',
  FN_DECL_END = 'FN_DECL_END',
  RET = 'RET',
  MATH = 'MATH',
  LABEL_OFFSET = 'LABEL_OFFSET',
  LEA = 'LEA',
  DEF_CONST = 'DEF_CONST',
  COMMENT = 'COMMENT',
}
