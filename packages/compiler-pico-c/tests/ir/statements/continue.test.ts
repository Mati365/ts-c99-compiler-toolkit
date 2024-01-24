import '../utils';

describe('Continue IR', () => {
  test('plain continue along with other loop', () => {
    expect(/* cpp */ `
      void main(){
        for (;;) {
          if (1) {
            continue;
          }
        }
      }
    `).toCompiledIRBeEqual(/* ruby */ `
      # --- Block main ---
        def main():
        L1:
        %t{0}: i1:zf = icmp %1: char1B differs %0: int2B
        br %t{0}: i1:zf, false: L6
        L6:
        jmp L1
        L3:
        ret
        end-def
    `);
  });

  test('continue in nested if in if', () => {
    expect(/* cpp */ `
      void main(){
        for (;;) {
          if (1) {
            if (2) {
              continue;
            }
          }
        }
      }
    `).toCompiledIRBeEqual(/* ruby */ `
      # --- Block main ---
        def main():
        L1:
        %t{0}: i1:zf = icmp %1: char1B differs %0: int2B
        br %t{0}: i1:zf, false: L8
        L6:
        %t{1}: i1:zf = icmp %2: char1B differs %0: int2B
        br %t{1}: i1:zf, false: L8
        L8:
        jmp L1
        L3:
        ret
        end-def
    `);
  });

  test('nested continue along with other loop', () => {
    expect(/* cpp */ `
      void main(){
        for (;;) {
          if (3 > 1) {
            while (1) {}

            if (1) {
              int a;
              continue;
            }
          }
        }
      }
    `).toCompiledIRBeEqual(/* ruby */ `
      # --- Block main ---
      def main():
        L1:
        %t{0}: i1:zf = icmp %3: char1B greater_than %1: char1B
        br %t{0}: i1:zf, false: L9
        L6:
        %t{1}: i1:zf = icmp %1: char1B differs %0: int2B
        br %t{1}: i1:zf, false: L8
        jmp L6
        L8:
        %t{2}: i1:zf = icmp %1: char1B differs %0: int2B
        br %t{2}: i1:zf, false: L9
        L10:
        a{0}: int*2B = alloca int2B
        L9:
        jmp L1
        L3:
        ret
        end-def
    `);
  });
});
