import React from 'react';
import '../styles/_loading.css';

const Loading = () => (
  <div className="container">
    <div className="freetrial_description">
      <div className="overlay">
        <div className="spinner center">
          <div className="spinner-blade" />
          <div className="spinner-blade" />
          <div className="spinner-blade" />
          <div className="spinner-blade" />
          <div className="spinner-blade" />
          <div className="spinner-blade" />
          <div className="spinner-blade" />
          <div className="spinner-blade" />
          <div className="spinner-blade" />
          <div className="spinner-blade" />
          <div className="spinner-blade" />
          <div className="spinner-blade" />
        </div>
      </div>
    </div>
  </div>
);

export default Loading;
