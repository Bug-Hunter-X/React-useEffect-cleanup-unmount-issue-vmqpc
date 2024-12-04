# React useEffect Cleanup Not Called on Unmount

This repository demonstrates a common issue in React where the cleanup function within a `useEffect` hook is not being called when the component unmounts. This can lead to memory leaks or unexpected behavior.

## Problem

The provided `MyComponent` uses `useEffect` with an empty dependency array `[]`. This is intended to run only once on mount.  However, in certain scenarios, particularly when navigating between routes rapidly, the cleanup function might not be executed properly.