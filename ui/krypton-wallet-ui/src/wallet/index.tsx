import React from 'react';
import './index.scss';

const WalletPage: React.FC = () => {
  return (
    <div className="start-page">
      <header className="start-page-header">
        <h1>Welcome to Krypton Wallet</h1>
        <p>Your secure and easy-to-use crypto wallet.</p>
      </header>
      <main className="start-page-main">
        <div className="start-page-actions">
          <button className="btn btn-primary">Create a new wallet</button>
          <button className="btn btn-secondary">Restore wallet from backup</button>
        </div>
      </main>
    </div>
  );
};

export default WalletPage;
