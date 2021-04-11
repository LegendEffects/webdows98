export default function findElementByClass(element: HTMLElement, className: string, limit: number = 8): HTMLElement | null {
  let current: HTMLElement = element;

  for (let i = 0; i < limit; i++) {
    if(current.classList.contains(className)) {
      return current;
    }

    if(current.parentElement) {
      current = current.parentElement;
    } else {
      return null;
    }
  }

  return null;
}