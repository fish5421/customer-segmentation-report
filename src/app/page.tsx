'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-8 py-8">
      <h1>Enhanced Customer Segmentation Analysis Report</h1>
      <div className="mb-8">
        <p>Prepared for: [Client&apos;s Company Name]</p>
        <p>Date: October 29, 2024</p>
      </div>

      <section id="executive-summary">
        <h2>Executive Summary</h2>
        <p>This enhanced report presents a comprehensive analysis of customer segmentation for your e-commerce brand specializing in leather and carbon fiber wallets. By analyzing 808 transactions from your first month of operations, we&apos;ve identified three distinct customer segments with unique behavioral patterns and demographic characteristics. Our analysis combines transactional data, real estate demographics, and customer behavior metrics to provide actionable insights for immediate implementation and long-term strategic planning.</p>
        <div>
          <p>Key Findings:</p>
          <ul>
            <li>Identified three distinct customer segments with clear value propositions</li>
            <li>Clear discount sensitivity patterns that can inform immediate pricing strategies</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>1. Introduction</h2>
        <div>
          <h3>1.1 Analysis Scope</h3>
          <ul>
            <li>Time Period: First 30 days post-launch</li>
            <li>Transaction Volume: 808 orders</li>
            <li>Data Sources: Transaction data, real estate demographics, customer behavior metrics</li>
            <li>Key Metrics: RFM (Recency, Frequency, Monetary), property values, discount usage</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>2. Methodology</h2>
        <div className="one-column">
          <h3>2.1 Data Collection</h3>
          <p>Primary data sources:</p>
          <ul>
            <li>Transaction logs (purchase history and discount usage)</li>
            <li>Real estate demographic data (Zestimate, property features)</li>
          </ul>

          <h3>2.2 Analysis Approach</h3>
          <ul>
            <li>K-means clustering for customer segmentation</li>
            <li>RFM analysis for customer value assessment</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>3. Customer Segment Analysis</h2>
        <h3>3.1 Segment Overview</h3>

        <div className="segment-container">
          {/* Premium Patrons Card */}
          <div className="segment-card">
            <h4>Premium Patrons (32% of customer base)</h4>
            <p>Key Characteristics:</p>
            <ul>
              <li>High property values</li>
              <li>Full-price purchases</li>
              <li>Preference for personalized items</li>
              <li>Strong interest in carbon fiber products</li>
            </ul>
            <table>
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Average Zestimate</td>
                  <td>$578,700</td>
                </tr>
                <tr>
                  <td>Net Total Spend</td>
                  <td>$125.00</td>
                </tr>
                <tr>
                  <td>Discount Usage</td>
                  <td>None</td>
                </tr>
                <tr>
                  <td>Living Area</td>
                  <td>2,362 sq ft</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Value-Conscious Buyers Card */}
          <div className="segment-card">
            <h4>Value-Conscious Buyers (41% of customer base)</h4>
            <p>Key Characteristics:</p>
            <ul>
              <li>Mid-range property values</li>
              <li>Selective discount usage</li>
              <li>Balance of leather and carbon fiber purchases</li>
              <li>Moderate personalization requests</li>
            </ul>
            <table>
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Average Zestimate</td>
                  <td>$528,250</td>
                </tr>
                <tr>
                  <td>Net Total Spend</td>
                  <td>$93.88</td>
                </tr>
                <tr>
                  <td>Discount Usage</td>
                  <td>Moderate (PLUSFIVE)</td>
                </tr>
                <tr>
                  <td>Living Area</td>
                  <td>2,292 sq ft</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Price-Sensitive Savers Card */}
          <div className="segment-card">
            <h4>Price-Sensitive Savers (27% of customer base)</h4>
            <p>Key Characteristics:</p>
            <ul>
              <li>Lower property values</li>
              <li>High discount utilization</li>
              <li>Preference for leather products</li>
              <li>Limited personalization</li>
            </ul>
            <table>
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Average Zestimate</td>
                  <td>$481,900</td>
                </tr>
                <tr>
                  <td>Net Total Spend</td>
                  <td>$67.19</td>
                </tr>
                <tr>
                  <td>Discount Usage</td>
                  <td>High (PROOF25)</td>
                </tr>
                <tr>
                  <td>Living Area</td>
                  <td>2,427 sq ft</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="chart-container">
          <Image 
            src="/images/zestimate_net_total.png"
            alt="Distribution of House Values and Net Total Spend"
            width={700}
            height={400}
            className="chart-image medium"
          />
        </div>

        <div className="chart-container">
          <Image 
            src="/images/distribution_of_discount_codes_by_segment.png"
            alt="Distribution of Discount Codes by Segment"
            width={700}
            height={400}
            className="chart-image medium"
          />
        </div>

        <h3>3.2 Segment Behavior Analysis</h3>
        <div className="two-column">
          <div>
            <h4>Purchase Patterns</h4>
            <ul>
              <li>Premium Patrons: Single high-value purchases</li>
              <li>Value-Conscious: Multiple moderate purchases</li>
              <li>Price-Sensitive: Discount-driven purchases</li>
            </ul>
          </div>
          <div>
            <h4>Product Preferences</h4>
            <ul>
              <li>Premium Patrons: Carbon fiber wallets with personalization</li>
              <li>Value-Conscious: Mix of leather and carbon fiber</li>
              <li>Price-Sensitive: Basic leather models</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2>4. Strategic Recommendations</h2>
        <h3>4.1 Immediate Actions (0-30 Days)</h3>
        <div className="metrics-container">
          <div className="metrics-column">
            <h4>Marketing Initiatives</h4>
            <p>Segment-Specific Email Campaigns</p>
            <ul>
              <li>Premium: Exclusive early access to new designs</li>
              <li>Value-Conscious: Bundle offers and moderate discounts</li>
              <li>Price-Sensitive: High-value promotional offers</li>
            </ul>
          </div>
          <div className="metrics-column">
            <h4>Paid Advertising</h4>
            <ul>
              <li>Create lookalike audiences based on segment profiles</li>
              <li>Geographic targeting based on real estate data</li>
              <li>Segment-specific ad creative and messaging</li>
            </ul>
          </div>
          <div className="metrics-column">
            <h4>Pricing Strategy</h4>
            <ul>
              <li>Launch A/B testing of price points by segment</li>
              <li>Implement dynamic bundle pricing</li>
              <li>Test promotional threshold effects</li>
            </ul>
          </div>
        </div>

        <h3>4.2 Near-Term Strategy (30-90 Days)</h3>
        <div className="metrics-container">
          <div className="metrics-column">
            <h4>Journey Mapping</h4>
            <ul>
              <li>Track segment-specific paths to purchase</li>
              <li>Identify key conversion points</li>
              <li>Monitor segment migration patterns</li>
            </ul>
          </div>
          <div className="metrics-column">
            <h4>Product Development</h4>
            <ul>
              <li>Analyze product preferences by segment</li>
              <li>Test new personalization options</li>
              <li>Develop segment-specific bundles</li>
            </ul>
          </div>
          <div className="metrics-column">
            <h4>Retention Programs</h4>
            <ul>
              <li>Implement segment-based loyalty program</li>
              <li>Create VIP program for Premium Patrons</li>
              <li>Develop win-back campaigns for at-risk customers</li>
            </ul>
          </div>
        </div>

        <h3>4.3 Long-Term Initiatives (90+ Days)</h3>
        <div className="metrics-container">
          <div className="metrics-column">
            <h4>Geographic Expansion</h4>
            <ul>
              <li>Target high-potential ZIP codes</li>
              <li>Develop market entry prioritization</li>
              <li>Create location-based marketing playbook</li>
            </ul>
          </div>
          <div className="metrics-column">
            <h4>Product Line Extension</h4>
            <ul>
              <li>Develop segment-specific products</li>
              <li>Test new materials and features</li>
              <li>Expand personalization options</li>
            </ul>
          </div>
          <div className="metrics-column">
            <h4>Channel Optimization</h4>
            <ul>
              <li>Evaluate new marketing channels</li>
              <li>Test marketplace expansions</li>
              <li>Explore retail partnerships</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2>5. Implementation Framework</h2>
        <div className="metrics-container">
          <div className="metrics-column">
            <h3>5.1 Success Metrics</h3>
            <h4>Customer Metrics</h4>
            <ul>
              <li>Segment conversion rates</li>
              <li>Average order value by segment</li>
              <li>Customer lifetime value</li>
              <li>Segment migration rates</li>
            </ul>
          </div>
          <div className="metrics-column">
            <h4>Business Metrics</h4>
            <ul>
              <li>Revenue per segment</li>
              <li>Marketing efficiency ratio</li>
              <li>Customer acquisition cost</li>
              <li>Return on ad spend</li>
            </ul>
          </div>
          <div className="metrics-column">
            <h4>Product Metrics</h4>
            <ul>
              <li>Product mix by segment</li>
              <li>Personalization uptake</li>
              <li>Bundle performance</li>
              <li>Price elasticity by segment</li>
            </ul>
          </div>
        </div>

        <div className="timeline-container">
          <div className="timeline-column">
            <h3>5.2 Implementation Timeline</h3>
            <h4>Week 1-2</h4>
            <ul>
              <li>Launch segment-specific email campaigns</li>
              <li>Implement tracking mechanisms</li>
              <li>Create segment-based ad audiences</li>
              <li>Deploy initial A/B tests</li>
            </ul>
          </div>
          <div className="timeline-column">
            <h4>Week 3-4</h4>
            <ul>
              <li>Launch segment-specific promotions</li>
              <li>Optimize product recommendations</li>
              <li>Implement geographic targeting</li>
              <li>Analyze initial test results</li>
            </ul>
          </div>
          <div className="timeline-column">
            <h4>Month 2-3</h4>
            <ul>
              <li>Develop comprehensive customer journey maps</li>
              <li>Create segment migration tracking</li>
              <li>Build preliminary LTV models</li>
              <li>Plan geographic expansion</li>
            </ul>
          </div>
        </div>

        <div className="resources-container">
          <div className="resource-column">
            <h3>5.3 Resource Requirements</h3>
            <h4>Technology</h4>
            <ul>
              <li>Analytics tracking implementation</li>
              <li>Email marketing platform</li>
              <li>A/B testing tools</li>
              <li>Customer journey tracking</li>
            </ul>
          </div>
          <div className="resource-column">
            <h4>Team</h4>
            <ul>
              <li>Marketing automation specialist</li>
              <li>Data analyst</li>
              <li>Customer service team</li>
              <li>Product manager</li>
            </ul>
          </div>
          <div className="resource-column">
            <h4>Budget Allocation</h4>
            <ul>
              <li>Paid advertising: 40%</li>
              <li>Email marketing: 20%</li>
              <li>Content creation: 20%</li>
              <li>Testing and optimization: 20%</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2>6. Risk Analysis and Mitigation</h2>
        <div className="two-column">
          <div>
            <h3>6.1 Identified Risks</h3>
            <ol>
              <li>Segment overlap and migration</li>
              <li>Price sensitivity changes</li>
              <li>Geographic expansion challenges</li>
              <li>Product-market fit variations</li>
            </ol>
          </div>
          <div>
            <h3>6.2 Mitigation Strategies</h3>
            <ol>
              <li>Regular segment reanalysis</li>
              <li>Dynamic pricing testing</li>
              <li>Phased geographic rollout</li>
              <li>Continuous customer feedback loops</li>
            </ol>
          </div>
        </div>
      </section>

      <section>
        <h2>7. Next Steps</h2>
        <div className="two-column">
          <div>
            <h3>7.1 Immediate Priorities</h3>
            <ol>
              <li>Implement tracking mechanisms</li>
              <li>Launch segment-specific campaigns</li>
              <li>Begin A/B testing program</li>
              <li>Set up reporting dashboards</li>
            </ol>
          </div>
          <div>
            <h3>7.2 Ongoing Monitoring</h3>
            <ol>
              <li>Weekly performance reviews</li>
              <li>Monthly segment analysis</li>
              <li>Quarterly strategy adjustments</li>
              <li>Annual comprehensive review</li>
            </ol>
          </div>
        </div>
      </section>

      <section>
        <h2>8. Conclusion</h2>
        <p>This enhanced analysis provides a comprehensive framework for leveraging customer segmentation to drive growth. The clear distinction between segments, combined with actionable recommendations and implementation guidance, positions your brand for successful expansion in the premium wallet market.</p>
      </section>
    </main>
  );
}
