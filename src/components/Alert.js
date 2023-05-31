import React from 'react';

function Alert(props) {
  const { alert } = props;

  return (
    <div>
      {alert && (
        <div className="alert alert-success alert-dismissible fade show" role="alert">
          <strong>{alert.type}</strong>: {alert.msg}
        </div>
      )}
    </div>
  );
}

export default Alert;
