/// <reference types="react-scripts" />

declare module "base58-js" {
  export function base58_to_binary(string: string): Uint8Array;
}
