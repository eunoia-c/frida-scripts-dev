import { getConfig } from "./config.js";

/**
 * Frida supplies a console at runtime, but @types/frida-gum does not declare
 * one and pulling in the DOM lib would drag a browser environment into an agent
 * that has none. Declaring only the surface used here keeps types honest.
 */
declare const console: {
  log(...args: unknown[]): void;
};

const CODES = {
  reset: "\x1b[0m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  cyan: "\x1b[36m",
  red: "\x1b[31;1m",
  dim: "\x1b[2m",
} as const;

export type Colour = keyof typeof CODES;

export function paint(colour: Colour, text: string): string {
  if (!getConfig().color) {
    return text;
  }
  return CODES[colour] + text + CODES.reset;
}

function write(line: string): void {
  if (getConfig().pretty) {
    console.log(line);
  }
}

export const log = {
  section(title: string): void {
    write("\n" + paint("cyan", "[*] --- " + title + " ---"));
  },
  info(message: string): void {
    write(paint("green", "[+] ") + message);
  },
  note(message: string): void {
    write(paint("yellow", "[+] ") + message);
  },
  hit(message: string): void {
    write(paint("red", "[!] " + message));
  },
  warn(message: string): void {
    write(paint("yellow", "[-] ") + message);
  },
  fail(message: string): void {
    write(paint("red", "[-] " + message));
  },
  detail(message: string): void {
    write(paint("dim", "    " + message));
  },
};

/** Pad a label so columns line up in pretty output. */
export function pad(label: string, width: number): string {
  return label.length >= width ? label : label + " ".repeat(width - label.length);
}
