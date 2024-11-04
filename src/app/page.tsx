'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-8 py-8">
      <h1>Enhanced Customer Segmentation Analysis Report</h1>
      <div className="mb-8">
        <p>Prepared for: Carry Proof</p>
        <p>Date: November 4, 2024</p>
      </div>

      <section id="executive-summary">
        <h2>Executive Summary</h2>
        <p>
          This customer segmentation report presents a comprehensive analysis of
          Carry Proof e-commerce brand specializing in leather and carbon fiber
          wallets. By analyzing 808 transactions from your first month of
          operations, we&apos;ve identified three distinct customer segments
          with unique behavioral patterns and demographic characteristics. Our
          analysis combines transactional data, real estate demographics, and
          customer behavior metrics to provide actionable insights for immediate
          implementation and long-term strategic planning.
        </p>
        <div>
          <p>Key Findings:</p>
          <ul>
            <li>
              Identified three distinct customer segments with clear value
              propositions
            </li>
            <li>
              Clear discount sensitivity patterns that can inform immediate
              pricing strategies
            </li>
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
            <li>
              Data Sources: Transaction data, real estate demographics, customer
              behavior metrics
            </li>
            <li>
              Key Metrics: RFM (Recency, Frequency, Monetary), property values,
              discount usage
            </li>
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
          <div className="segment-card">
            <h4>Premium Patrons (32% of customer base) - Segment #4</h4>
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

          <div className="segment-card">
            <h4>Value-Conscious Buyers (41% of customer base) - Segment #2</h4>
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

          <div className="segment-card">
            <h4>Price-Sensitive Savers (27% of customer base) - Segment #1</h4>
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
            width={1000}
            height={600}
            className="chart-image"
          />
        </div>

        <div className="chart-container">
          <Image
            src="/images/distribution_of_discount_codes_by_segment.png"
            alt="Distribution of Discount Codes by Segment"
            width={1000}
            height={600}
            className="chart-image"
          />
        </div>

        <h3>3.2 Segment Behavior Analysis</h3>
        <div className="two-column">
          <div>
            <h4>Purchase Patterns</h4>
            <ul>
              <li>Premium Patrons (segment #4): Single high-value purchases</li>
              <li>Value-Conscious (segment #2): Multiple moderate purchases</li>
              <li>Price-Sensitive (segment #1): Discount-driven purchases</li>
            </ul>
          </div>
          <div>
            <h4>Product Preferences</h4>
            <ul>
              <li>
                Premium Patrons (segment #4): Carbon fiber wallets with
                personalization
              </li>
              <li>
                Value-Conscious (segment #2): Mix of leather and carbon fiber
              </li>
              <li>Price-Sensitive (segment #1): Basic leather models</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="strategy-section">
        <h2>4. Strategic Email Marketing Recommendations</h2>
        <div className="metrics-container">
          <div className="metrics-column">
            <h4>Premium Experience Flow</h4>
            <div className="revenue-impact">
              Expected Revenue Impact: +20-25%
            </div>
            <ul className="initiative-list">
              <li>Early Access: Pre-launch carbon fiber variants</li>
              <li>Material Education: Carbon fiber craftsmanship series</li>
              <li>No-discount VIP benefits (premium packaging)</li>
            </ul>
            <div className="success-metric">
              <strong>Success Metric:</strong> 30% carbon fiber adoption rate
            </div>
          </div>
          <div className="metrics-column">
            <h4>Value Maximizer Series</h4>
            <div className="revenue-impact">
              Expected Revenue Impact: +15-20%
            </div>
            <ul className="initiative-list">
              <li>Targeted: Mid-range property value segment</li>
              <li>Focus: Limited-time bundle offerings</li>
              <li>A/B test: Premium vs standard packaging</li>
            </ul>
            <div className="success-metric">
              <strong>Success Metric:</strong> 25% bundle adoption rate
            </div>
          </div>
          <div className="metrics-column">
            <h4>Price-Sensitive Engagement</h4>
            <div className="revenue-impact">
              Expected Revenue Impact: +12-15%
            </div>
            <ul className="initiative-list">
              <li>Strategic discount timing optimization</li>
              <li>Product education focus: Value proposition</li>
              <li>Loyalty program early access</li>
            </ul>
            <div className="success-metric">
              <strong>Success Metric:</strong> 20% conversion rate increase
            </div>
          </div>
        </div>
      </section>

      <section className="strategy-section">
        <h2>5. Implementation Framework</h2>
        <div className="bg-[var(--section-bg)] p-8 rounded-lg shadow-md mb-8">
          <h3 className="mt-0">5.1 Data Collection Foundation</h3>
          <div className="metrics-container">
            <div className="metrics-column">
              <h4>Email Capture Optimization</h4>
              {/* <div className="revenue-impact">Expected Impact: +15-20%</div> */}
              <div className="initiative-list">
                <div className="mb-4">
                  <strong className="text-[var(--primary-color)]">
                    Homepage Pop-up Test
                  </strong>
                  <ul>
                    <li>Timing: 5s vs. 15s vs. exit-intent</li>
                    <li>Offer: 10% vs. Free Shipping</li>
                    <li>Required fields: Email + ZIP code</li>
                  </ul>
                </div>
                <div className="mb-4">
                  <strong className="text-[var(--primary-color)]">
                    Pop-up A/B Testing Program
                  </strong>
                  <ul>
                    <li>Test Group A: Value Proposition</li>
                    <ul>
                      <li>"Join the Carry Revolution"</li>
                      <li>Focus: Product innovation</li>
                    </ul>
                    <li>Test Group B: Offer-Driven</li>
                    <ul>
                      <li>"Save 10% on Your First Order"</li>
                      <li>Focus: Immediate value</li>
                    </ul>
                    <li>Test Variables</li>
                    <ul>
                      <li>Timing: Entry vs. 15s vs. Exit</li>
                      <li>Device: Mobile vs. Desktop</li>
                      <li>Page: Home vs. Product</li>
                    </ul>
                  </ul>
                </div>

                <div className="success-metric">
                  <strong>Success Metrics</strong>
                  <ul className="mt-2 mb-0">
                    <li>Pop-up conversion rate: Target 15%</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="metrics-column">
              <h4>Initial Email Program</h4>
              {/* <div className="revenue-impact">Expected Impact: +20-25%</div> */}
              <div className="initiative-list">
                <div className="mb-4">
                  <strong className="text-[var(--primary-color)]">
                    Welcome Series
                  </strong>
                  <ul>
                    <li>Email 1: Brand story + Products</li>
                    <li>Email 2: Material comparison guide</li>
                    <li>Email 3: Customer testimonials</li>
                  </ul>
                </div>
                <div className="mb-4">
                  <strong className="text-[var(--primary-color)]">
                    Post-Purchase Flow
                  </strong>
                  <ul>
                    <li>Order confirmation with care tips</li>
                    <li>Shipping + tracking updates</li>
                    <li>Delivery confirmation + guide</li>
                    <li>Review request (7 days after)</li>
                  </ul>
                </div>
                <div className="success-metric">
                  <strong>Key Performance Metrics</strong>
                  <ul className="mt-2 mb-0">
                    <li>Open rates: Target 25%+</li>
                    <li>Click rates: Target 12%+</li>
                    <li>Unsubscribe rate: Below 0.5%</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="metrics-column">
              <h4>Data Integration Steps</h4>
              <div className="initiative-list">
                <div className="mb-4">
                  <strong className="text-[var(--primary-color)]">
                    Property Data Enrichment
                  </strong>
                  <ul>
                    <li>Batch Zestimate lookups (existing 808)</li>
                    <li>Property value segment creation</li>
                    <li>Email list value scoring</li>
                  </ul>
                </div>
                <div className="mb-4">
                  <strong className="text-[var(--primary-color)]">
                    Email Platform Setup
                  </strong>
                  <ul>
                    <li>Property segment tags</li>
                    <li>A/B test group assignment</li>
                    <li>Conversion tracking setup</li>
                  </ul>
                </div>
                <div className="success-metric">
                  <strong>Integration Goals</strong>
                  <ul className="mt-2 mb-0">
                    <li>Property match rate: 85%+</li>
                    <li>Segment tag accuracy: 95%+</li>
                    <li>Test group distribution: Even split</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[var(--section-bg)] p-8 rounded-lg shadow-md">
          <h3 className="mt-0">5.2 30-Day Testing Plan</h3>
          <div className="metrics-container">
            <div className="metrics-column">
              <h4>Week 1: Foundation</h4>
              <div className="revenue-impact">Setup Phase</div>
              <ul className="initiative-list">
                <li>Configure tracking system</li>
                <li>Deploy standard pop-up</li>
                <li>Launch welcome series</li>
                <li>Establish baseline metrics</li>
              </ul>
              <div className="success-metric">
                <strong>Completion Criteria</strong>
                All systems operational with 0 errors
              </div>
            </div>

            <div className="metrics-column">
              <h4>Week 2-3: Testing</h4>
              <div className="revenue-impact">Optimization Phase</div>
              <ul className="initiative-list">
                <li>A/B test pop-up timing</li>
                <li>Test offer variations</li>
                <li>Monitor conversion rates</li>
                <li>Analyze user behavior</li>
              </ul>
              <div className="success-metric">
                <strong>Target Metrics</strong>
                20% improvement in conversion
              </div>
            </div>

            <div className="metrics-column">
              <h4>Week 4: Analysis</h4>
              <div className="revenue-impact">Review Phase</div>
              <ul className="initiative-list">
                <li>Compile test results</li>
                <li>Analyze data quality</li>
                <li>Review capture rates</li>
                <li>Plan phase 2 rollout</li>
              </ul>
              <div className="success-metric">
                <strong>Deliverable</strong>
                Comprehensive testing report
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section>
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
      </section> */}

      <section>
        <h2>6. Next Steps</h2>
        <div className="two-column">
          <div>
            <h3>6.1 Immediate Priorities</h3>
            <ol>
              <li>Implement tracking mechanisms</li>
              <li>Launch segment-specific campaigns</li>
              <li>Begin A/B testing program</li>
              <li>Set up reporting dashboards</li>
            </ol>
          </div>
          <div>
            <h3>6.2 Ongoing Monitoring</h3>
            <ol>
              <li>Weekly performance reviews</li>
              <li>Monthly segment analysis</li>
              <li>Quarterly strategy adjustments</li>
              <li>Annual comprehensive review</li>
            </ol>
          </div>
        </div>
      </section>

      {/* <section>
        <h2>7. Conclusion</h2>
        <p>
          This enhanced analysis provides a comprehensive framework for
          leveraging customer segmentation to drive growth. The clear
          distinction between segments, combined with actionable recommendations
          and implementation guidance, positions your brand for successful
          expansion in the premium wallet market.
        </p>
      </section> */}
    </main>
  );
}
