```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render
    console.log('Count:', count);
    return () => {
      // Cleanup function (optional)
      console.log('Component unmounting');
    };
  }, [count]); // This is a common mistake.  This should be [], or a variable causing issues

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```