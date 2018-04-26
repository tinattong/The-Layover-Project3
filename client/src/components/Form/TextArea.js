import React from 'react';

export const TextArea = (props) => {
  const style={
    form:{
      height:200,
      padding: 150,
      backgroundColor:'ivory'
    }
  }
  return (
  <div>
    <div className="form-group">
      <textarea style={style.form}className="form-control" rows="20" {...props} />
    </div>
  </div>
  );
};

