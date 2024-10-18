import React from 'react';
import './index.css';

export default function ProgressBar({ progress }: { progress: number | undefined }) {

  const progressPercentage = React.useMemo(() => {
    return (progress || 0) * 100
  }, [progress]);

  return (
    <div className='progress-bar-container'>
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      <span className='progress-bar-text'>{progressPercentage.toFixed(0)}% Complete</span>
    </div>
  )
}
