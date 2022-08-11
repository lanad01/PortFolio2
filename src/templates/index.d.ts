/// <reference path="../../node_modules/@types/react/index.d.ts"/>
import { DOMAttributes } from "react";

declare namespace React {
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    css?: any;
  }
}
