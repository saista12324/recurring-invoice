import styles from "./recurring-invoices.module.css";

const RecurringInvoices = () => {
  return (
    <div className={styles.recurringInvoices}>
      <b className={styles.recurringInvoices1}>Recurring Invoices</b>
      <div className={styles.frameParent}>
        <div className={styles.recurringInvoicesParent}>
          <b className={styles.recurringRevenue}># recurring invoices</b>
          <b className={styles.b}>215</b>
        </div>
        <div className={styles.recurringInvoicesParent}>
          <b className={styles.recurringRevenue}>recurring revenue</b>
          <b className={styles.month}>
            <span>€2500</span>
            <span className={styles.month1}>/month</span>
          </b>
        </div>
        <div className={styles.recurringInvoicesParent}>
          <b className={styles.recurringRevenue}>recurring overdue</b>
          <b className={styles.b}>22</b>
        </div>
      </div>
      <img
        className={styles.recurringInvoicesChild}
        alt=""
        src="/rectangle-30@2x.png"
      />
      <div className={styles.buttons}>
        <div className={styles.clickMe}>Add recurring invoice</div>
        <img className={styles.icons} alt="" src="/icons.svg" />
      </div>
      <div className={styles.perClientParent}>
        <b className={styles.perClient}>Per client</b>
        <div className={styles.inputParent}>
          <div className={styles.input}>
            <div className={styles.mainButton}>
              <div className={styles.clickMe}>Search client</div>
            </div>
          </div>
          <div className={styles.buttons1}>
            <div className={styles.clickMe}>Search</div>
            <img className={styles.searchIcon} alt="" src="/search.svg" />
          </div>
        </div>
        <div className={styles.groupParent}>
          <div className={styles.clientParent}>
            <b className={styles.client}>Client</b>
            <b className={styles.send}># send</b>
            <b className={styles.endDate}>end date</b>
            <b className={styles.interval}>Interval</b>
            <b className={styles.amount}>amount</b>
            <b className={styles.edit}>Edit</b>
          </div>
          <div className={styles.lineParent}>
            <div className={styles.frameChild} />
            <div className={styles.frameGroup}>
              <div className={styles.rectangleParent}>
                <img
                  className={styles.frameItem}
                  alt=""
                  src="/rectangle-23@2x.png"
                />
                <div className={styles.madebymack}>MadeByMack</div>
              </div>
              <div className={styles.div}>25</div>
              <div className={styles.div1}>24-20-2024</div>
              <div className={styles.year}>3/month</div>
              <div className={styles.div2}>€3000</div>
              <div className={styles.buttons2}>
                <div className={styles.clickMe}>Edit</div>
                <img className={styles.icons} alt="" src="/right.svg" />
              </div>
            </div>
            <div className={styles.frameInner} />
            <div className={styles.frameContainer}>
              <div className={styles.rectangleParent}>
                <img
                  className={styles.frameItem}
                  alt=""
                  src="/rectangle-23@2x.png"
                />
                <div className={styles.madebymack}>MadeByMack</div>
              </div>
              <div className={styles.div}>25</div>
              <div className={styles.div1}>24-20-2024</div>
              <div className={styles.year}>4/month</div>
              <div className={styles.div2}>€3000</div>
              <div className={styles.buttons2}>
                <div className={styles.clickMe}>Edit</div>
                <img className={styles.icons} alt="" src="/right.svg" />
              </div>
            </div>
            <div className={styles.lineDiv} />
            <div className={styles.frameDiv}>
              <div className={styles.rectangleParent}>
                <img
                  className={styles.frameItem}
                  alt=""
                  src="/rectangle-23@2x.png"
                />
                <div className={styles.madebymack}>MadeByMack</div>
              </div>
              <div className={styles.div}>25</div>
              <div className={styles.div1}>24-20-2024</div>
              <div className={styles.year}>1/month</div>
              <div className={styles.div2}>€3000</div>
              <div className={styles.buttons2}>
                <div className={styles.clickMe}>Edit</div>
                <img className={styles.icons} alt="" src="/right.svg" />
              </div>
            </div>
            <div className={styles.frameChild2} />
            <div className={styles.frameParent1}>
              <div className={styles.rectangleParent}>
                <img
                  className={styles.frameItem}
                  alt=""
                  src="/rectangle-23@2x.png"
                />
                <div className={styles.madebymack}>MadeByMack</div>
              </div>
              <div className={styles.div}>25</div>
              <div className={styles.div1}>24-20-2024</div>
              <div className={styles.year}>3/year</div>
              <div className={styles.div2}>€3000</div>
              <div className={styles.buttons2}>
                <div className={styles.clickMe}>Edit</div>
                <img className={styles.icons} alt="" src="/right.svg" />
              </div>
            </div>
            <div className={styles.frameChild4} />
            <div className={styles.frameParent2}>
              <div className={styles.rectangleParent}>
                <img
                  className={styles.frameItem}
                  alt=""
                  src="/rectangle-23@2x.png"
                />
                <div className={styles.madebymack}>MadeByMack</div>
              </div>
              <div className={styles.div}>25</div>
              <div className={styles.div1}>24-20-2024</div>
              <div className={styles.year}>1/year</div>
              <div className={styles.div2}>€3000</div>
              <div className={styles.buttons2}>
                <div className={styles.clickMe}>Edit</div>
                <img className={styles.icons} alt="" src="/right.svg" />
              </div>
            </div>
            <div className={styles.frameChild6} />
            <div className={styles.frameParent3}>
              <div className={styles.rectangleParent}>
                <img
                  className={styles.frameItem}
                  alt=""
                  src="/rectangle-23@2x.png"
                />
                <div className={styles.madebymack}>MadeByMack</div>
              </div>
              <div className={styles.div}>25</div>
              <div className={styles.div1}>24-20-2024</div>
              <div className={styles.year}>2/month</div>
              <div className={styles.div2}>€3000</div>
              <div className={styles.buttons2}>
                <div className={styles.clickMe}>Edit</div>
                <img className={styles.icons} alt="" src="/right.svg" />
              </div>
            </div>
            <div className={styles.pauseParent}>
              <b className={styles.clickMe}>Pause</b>
              <b className={styles.clickMe}>Duplicate</b>
              <b className={styles.clickMe}>Edit</b>
              <b className={styles.clickMe}>Terminate</b>
              <b className={styles.clickMe}>Skip next date</b>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.ellipseParent}>
        <img className={styles.ellipseIcon} alt="" src="/ellipse-1@2x.png" />
        <b className={styles.clickMe}>Jort KKKKKKKKKKKK</b>
      </div>
      <div className={styles.last30DaysParent}>
        <div className={styles.clickMe}>Last 30 days:</div>
        <div className={styles.frameParent4}>
          <div className={styles.paidParent}>
            <div className={styles.recurringRevenue}>Paid</div>
            <div className={styles.div18}>€24.000</div>
          </div>
          <div className={styles.pendingParent}>
            <div className={styles.recurringRevenue}>pending</div>
            <div className={styles.div18}>€41.000</div>
          </div>
          <div className={styles.overdueParent}>
            <div className={styles.recurringRevenue}>overdue</div>
            <div className={styles.div18}>€65.600</div>
          </div>
        </div>
      </div>
      <div className={styles.recurringInvoicesItem} />
      <div className={styles.recurringInvoicesInner}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent5}>
            <div className={styles.logoParent}>
              <img className={styles.logoIcon} alt="" src="/logo.svg" />
              <div className={styles.navTabsParent}>
                <div className={styles.navTabs}>
                  <div className={styles.homeIconsParent}>
                    <img
                      className={styles.homeIcons}
                      alt=""
                      src="/homeicons.svg"
                    />
                    <b className={styles.clickMe}>Home</b>
                  </div>
                </div>
                <div className={styles.navTabs}>
                  <div className={styles.homeIconsParent}>
                    <img
                      className={styles.homeIcons}
                      alt=""
                      src="/document.svg"
                    />
                    <b className={styles.clickMe}>Invoices</b>
                  </div>
                </div>
                <div className={styles.navTabs}>
                  <div className={styles.homeIconsParent}>
                    <img
                      className={styles.homeIcons}
                      alt=""
                      src="/customer.svg"
                    />
                    <b className={styles.clickMe}>Customers</b>
                  </div>
                </div>
                <div className={styles.navTabs}>
                  <div className={styles.homeIconsParent}>
                    <img className={styles.homeIcons} alt="" src="/box.svg" />
                    <b className={styles.clickMe}>Products</b>
                  </div>
                </div>
                <div className={styles.navTabs4}>
                  <div className={styles.repeatParent}>
                    <img
                      className={styles.homeIcons}
                      alt=""
                      src="/repeat.svg"
                    />
                    <b className={styles.clickMe}>Recurring</b>
                  </div>
                </div>
                <div className={styles.navTabs}>
                  <div className={styles.homeIconsParent}>
                    <img
                      className={styles.homeIcons}
                      alt=""
                      src="/discount.svg"
                    />
                    <b className={styles.clickMe}>Discount</b>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameChild8} />
            <div className={styles.vectorWrapper}>
              <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecurringInvoices;
