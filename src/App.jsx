import './App.css'

function App() {
  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">
          <div className="brand-mark">Q</div>
          <div>
            <h1>QubWatch</h1>
            <p>Business Monitoring</p>
          </div>
        </div>

        <div className="user-area">
          <span>Business Owner</span>
          <button>Logout</button>
        </div>
      </header>

      <main className="dashboard">
        <section className="welcome">
          <div>
            <p className="eyebrow">BUSINESS OVERVIEW</p>
            <h2>Welcome to QubWatch</h2>
            <p>
              Monitor your business activities and identify unusual
              transactions that may require your attention.
            </p>
          </div>

          <button className="primary-button">View Alerts</button>
        </section>

        <section className="summary-grid">
          <div className="summary-card">
            <span>Total Transactions</span>
            <strong>0</strong>
            <small>No transactions recorded</small>
          </div>

          <div className="summary-card">
            <span>Open Alerts</span>
            <strong>0</strong>
            <small>No alerts requiring review</small>
          </div>

          <div className="summary-card">
            <span>Products</span>
            <strong>0</strong>
            <small>No products added</small>
          </div>

          <div className="summary-card">
            <span>Investigations</span>
            <strong>0</strong>
            <small>No investigations opened</small>
          </div>
        </section>

        <section className="content-grid">
          <div className="panel">
            <div className="panel-heading">
              <div>
                <h3>Recent Alerts</h3>
                <p>Activities that may require review</p>
              </div>
              <button className="text-button">View all</button>
            </div>

            <div className="empty-state">
              <div className="empty-icon">!</div>
              <h4>No alerts yet</h4>
              <p>
                When QubWatch detects unusual business activity, alerts will
                appear here.
              </p>
            </div>
          </div>

          <div className="panel">
            <div className="panel-heading">
              <div>
                <h3>Quick Actions</h3>
                <p>Manage your business monitoring</p>
              </div>
            </div>

            <div className="actions">
              <button>Add Product</button>
              <button>Record Transaction</button>
              <button>View Transactions</button>
              <button>Open Investigation</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App