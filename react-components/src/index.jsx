const { useState, useEffect } = React;

// A styled button component
const Button = ({ onClick, children }) => {
  return React.createElement('button', {
    onClick,
    style: {
      padding: '10px 20px',
      margin: '0 5px',
      backgroundColor: '#0070f3',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.2s'
    },
    onMouseOver: (e) => e.target.style.backgroundColor = '#0051b3',
    onMouseOut: (e) => e.target.style.backgroundColor = '#0070f3'
  }, children);
};

// Main counter component
export const Example = () => {
  const [count, setCount] = useState(0);
  const [lastUpdate, setLastUpdate] = useState(null);

  useEffect(() => {
    if (count !== 0) {
      setLastUpdate(new Date().toLocaleTimeString());
    }
  }, [count]);

  return React.createElement('div', {
    style: {
      padding: '20px',
      borderRadius: '8px',
      backgroundColor: '#f5f5f5',
      maxWidth: '400px',
      margin: '20px auto',
      textAlign: 'center',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }
  }, [
    React.createElement('h2', {
      key: 'title',
      style: { color: '#333', marginBottom: '20px' }
    }, 'Interactive Counter'),
    React.createElement('div', {
      key: 'counter',
      style: { fontSize: '24px', margin: '20px 0' }
    }, `Count: ${count}`),
    React.createElement('div', {
      key: 'buttons'
    }, [
      React.createElement(Button, {
        key: 'decrement',
        onClick: () => setCount(c => c - 1)
      }, '-'),
      React.createElement(Button, {
        key: 'increment',
        onClick: () => setCount(c => c + 1)
      }, '+')
    ]),
    lastUpdate && React.createElement('div', {
      key: 'update-time',
      style: { marginTop: '20px', fontSize: '14px', color: '#666' }
    }, `Last updated: ${lastUpdate}`)
  ]);
};
