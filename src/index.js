import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const { useState } = React;

const Counter = () => {
  const [count, setCount] = useState(10);

  return (
    <div className="container">
      {count < 10 && (
        <div
          className="chevron chevron-up"
          role="button"
          tabIndex={0}
          onClick={() => setCount(count + 1)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setCount((c) => c + 1);
            }
          }}
        />
      )}

      <div className="number">{count}</div>

      {count > 0 && (
        <div
          className="chevron chevron-down"
          role="button"
          tabIndex={0}
          onClick={() => setCount(count - 1)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setCount((c) => c - 1);
            }
          }}
        />
      )}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter />);