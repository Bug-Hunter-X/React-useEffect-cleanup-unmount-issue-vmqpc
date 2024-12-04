```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let isMounted = true; // Add flag to track component mount status

    const cleanup = () => {
      console.log('Unmounted');
      isMounted = false; // Set flag to false on unmount
    };

    if (isMounted) {
      console.log('Mounted');
    }

    return cleanup; // Return cleanup function
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```