# React useEffect Infinite Loop Bug

This repository demonstrates a common mistake in using the React `useEffect` hook: an incorrectly specified dependency array leading to an infinite loop.

## Description

The `useEffect` hook is used to perform side effects after render.  A common mistake is to omit the dependency array or include unnecessary dependencies. In this case, the effect depends on the `count` variable. Because `setCount` changes `count`, the effect runs every time the component renders which causes an infinite loop and crashes the application.

## Solution

The solution is to correctly specify the dependency array. If no state variables are referenced in the effect, this array is empty (`[]`), causing the effect to run only once after the initial render.  If we want to run this effect when `count` changes, we add `count` to the dependency array.