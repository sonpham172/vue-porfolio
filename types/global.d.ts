export {}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "canvas-arrow": {
        direction: string;
        disabled: boolean;
        handleclick: any;
      }
    }
  }
}