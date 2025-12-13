import { TrendingUp, TrendingDown, Copy, Lock } from 'lucide-react'
import Heading from './Heading'
import IncomeBarChart from './barChart'
import './topsection.css'

export default function TopSection() {
  return (
    <div className="top-section-container">
      {/* heading */}
      <Heading />

      {/* Cards Grid */}
      <div className="cards-grid">
        {/* Left Column - Total Balance Card */}
        <div className="balance-card">
          <div className="card-header">
            <h2 className="card-label">Total Balance</h2>
            <div className="currency-selector">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 30'%3E%3Crect width='60' height='30' fill='%23B22234'/%3E%3Crect y='23' width='60' height='7' fill='white'/%3E%3Crect y='3' width='60' height='4' fill='white'/%3E%3Crect y='10' width='60' height='4' fill='white'/%3E%3Crect y='17' width='60' height='4' fill='white'/%3E%3Crect width='24' height='17' fill='%233C3B6E'/%3E%3C/svg%3E"
                alt="USD"
                className="flag-icon"
              />
              <span className="currency-text">USD</span>
              <svg
                className="chevron-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          <div className="balance-section">
            <div className="balance-amount">$689,372.00</div>
            <div className="balance-growth">
              <TrendingUp className="trend-icon" />
              <span className="growth-percent">5%</span>
              <span className="growth-text">than last month</span>
            </div>
          </div>

          <div className="button-group">
            <button className="transfer-button">
              <svg
                className="button-icon"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
              </svg>
              Transfer
            </button>
            <button className="request-button">
              <svg
                className="button-icon"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
              </svg>
              Request
            </button>
          </div>

          {/* Wallets Section */}
          <div className="wallets-section">
            <h3 className="wallets-title">Wallets | Total 6 wallets</h3>
            <div className="wallets-grid">
              {/* USD Wallet */}
              <div className="wallet-card">
                <div className="wallet-header">
                  <div className="wallet-currency">
                    <img
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 30'%3E%3Crect width='60' height='30' fill='%23B22234'/%3E%3Crect y='23' width='60' height='7' fill='white'/%3E%3Crect y='3' width='60' height='4' fill='white'/%3E%3Crect y='10' width='60' height='4' fill='white'/%3E%3Crect y='17' width='60' height='4' fill='white'/%3E%3Crect width='24' height='17' fill='%233C3B6E'/%3E%3C/svg%3E"
                      alt="USD"
                      className="wallet-flag"
                    />
                    <span className="wallet-code">USD</span>
                  </div>
                  <button className="wallet-menu-btn">
                    <svg
                      className="menu-icon"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                  </button>
                </div>
                <div className="wallet-amount">$22,678.00</div>
                <div className="wallet-limit">Limit is $30k a month</div>
                <div className="wallet-badge active">Active</div>
              </div>

              {/* EUR Wallet */}
              <div className="wallet-card">
                <div className="wallet-header">
                  <div className="wallet-currency">
                    <div className="eur-flag">
                      <div className="eur-black"></div>
                      <div className="eur-red"></div>
                      <div className="eur-yellow"></div>
                    </div>
                    <span className="wallet-code">EUR</span>
                  </div>
                  <button className="wallet-menu-btn">
                    <svg
                      className="menu-icon"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                  </button>
                </div>
                <div className="wallet-amount">€18,345.00</div>
                <div className="wallet-limit">Limit is €3k a month</div>
                <div className="wallet-badge active">Active</div>
              </div>

              {/* GBP Wallet */}
              <div className="wallet-card">
                <div className="wallet-header">
                  <div className="wallet-currency">
                    <div className="gbp-flag">
                      <div className="gbp-cross-white-h"></div>
                      <div className="gbp-cross-white-v"></div>
                      <div className="gbp-cross-red-h"></div>
                      <div className="gbp-cross-red-v"></div>
                    </div>
                    <span className="wallet-code">GBP</span>
                  </div>
                  <button className="wallet-menu-btn">
                    <svg
                      className="menu-icon"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                  </button>
                </div>
                <div className="wallet-amount">£15,000.00</div>
                <div className="wallet-limit">Limit is £75k a month</div>
                <div className="wallet-badge inactive">Inactive</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Income and Revenue Cards */}
        <div className="right-column">
          {/* Top Row - Earnings and Spending */}
          <div className="small-cards-row">
            {/* Total Earnings */}
            <div className="earnings-card">
              <div className="small-card-header">
                <h3 className="small-card-title">Total Earnings</h3>
                <Copy className="small-card-icon" />
              </div>
              <div className="small-card-amount">$950</div>
              <div className="small-card-growth">
                <TrendingUp className="small-trend-icon" />
                <span className="small-growth-percent">7%</span>
                <span className="small-growth-text">This month</span>
              </div>
            </div>

            {/* Total Spending */}
            <div className="spending-card">
              <div className="small-card-header">
                <h3 className="small-card-title spending">Total Spending</h3>
                <Lock className="small-card-icon gray" />
              </div>
              <div className="small-card-amount dark">$700</div>
              <div className="small-card-growth negative">
                <TrendingDown className="small-trend-icon" />
                <span className="small-growth-percent">5%</span>
                <span className="small-growth-text gray">This month</span>
              </div>
            </div>
          </div>

          {/* Bottom Row - Income and Revenue */}
          <div className="small-cards-row">
            {/* Total Income */}
            <div className="income-card">
              <div className="small-card-header">
                <h3 className="small-card-title income">Total Income</h3>
                <Copy className="small-card-icon gray" />
              </div>
              <div className="small-card-amount dark">$1,050</div>
              <div className="small-card-growth positive">
                <TrendingUp className="small-trend-icon" />
                <span className="small-growth-percent">8%</span>
                <span className="small-growth-text gray">This month</span>
              </div>
            </div>

            {/* Total Revenue */}
            <div className="revenue-card">
              <div className="small-card-header">
                <h3 className="small-card-title revenue">Total Revenue</h3>
                <Lock className="small-card-icon gray" />
              </div>
              <div className="small-card-amount dark">$850</div>
              <div className="small-card-growth positive">
                <TrendingUp className="small-trend-icon" />
                <span className="small-growth-percent">4%</span>
                <span className="small-growth-text gray">This month</span>
              </div>
            </div>
          </div>
        </div>
        {/* bar chart */}
        <div className="graph-card p-6! rounded-2xl bg-white shadow">
          <h1 className="text-xl font-semibold">Total income</h1>
          <p className="text-sm text-gray-500 mb-4">
            view your income in a certain period of time
          </p>
          <IncomeBarChart />
        </div>
        {/* bar chart  2*/}
        <div className="graph-card p-6! rounded-2xl bg-white shadow">
          <h1 className="text-xl font-semibold">Total income</h1>
          <p className="text-sm text-gray-500 mb-4">
            view your income in a certain period of time
          </p>
          <IncomeBarChart />
        </div>
      </div>
    </div>
  )
}
