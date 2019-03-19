import { useLayoutEffect } from 'react';

function useBodyScrollLock() {
  useLayoutEffect(() => {
    const originalOverflow = window.getComputedStyle(document.body).overflow
    console.log('originalOverflow:', originalOverflow)
    document.body.style.overflow = 'hidden';

    // unlock the DOM on unmounting DishForm, destroy the effects
    return function cleanup() {
      document.body.style.overflow = originalOverflow;
    }
    // this ===> }, [])  to ensure function is only run on mount
  }, [])
}

export { useBodyScrollLock };