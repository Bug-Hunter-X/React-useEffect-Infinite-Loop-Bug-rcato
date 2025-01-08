```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Count:', count);
    return () => {
      console.log('Component unmounting');
    };
  }, []); // Empty dependency array - runs only once after mount

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```