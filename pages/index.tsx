import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./index.module.css";

const ShoppingLandingPageFinal: NextPage = () => {
  const onSignUpButtonClick = useCallback(() => {
    // Please sync "Page2" to the project
  }, []);

  return (
    <div className={styles.shoppingLandingPageFinalDiv}>
      <div className={styles.navigationBarDiv}>
        <div className={styles.navigationInnerBar}>
          <div className={styles.menuRightDiv}>
            <div className={styles.linksContainerDiv}>
              <div className={styles.linksDiv}>
                <button className={styles.cATALOGUEButton}>CATALOGUE</button>
                <button className={styles.fASHIONButton}>FASHION</button>
                <button className={styles.fAVOURITEButton}>FAVOURITE</button>
                <button className={styles.lIFESTYLEButton}>LIFESTYLE</button>
              </div>
              <button className={styles.component2Button}>
                <div className={styles.rectangleDiv} />
                <div className={styles.lineDiv} />
                <div className={styles.lineDiv1} />
                <div className={styles.lineDiv2} />
              </button>
            </div>
            <button
              className={styles.signUpButton}
              onClick={onSignUpButtonClick}
            >
              <div className={styles.sIGNUPDiv}>SIGN UP</div>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.heroDiv}>
        <div className={styles.heroSectionDiv}>
          <div className={styles.heroCTADiv}>
            <div className={styles.rectangleDiv1} />
            <div className={styles.rectangleDiv2} />
            <div className={styles.lETSEXPLOREUNIQUECLOTHES}>
              <p className={styles.lETSP}>LET’S</p>
              <p className={styles.lETSP}>EXPLORE</p>
              <p className={styles.lETSP}>UNIQUE</p>
              <p className={styles.cLOTHESP}>CLOTHES.</p>
            </div>
            <div className={styles.liveForInfluentialAndInnov}>
              Live for Influential and Innovative fashion!
            </div>
            <div className={styles.buttonRowDiv}>
              <img className={styles.vectorIcon} alt="" src="../vector-9.svg" />
              <button className={styles.button}>
                <div className={styles.shopNowDiv}>Shop Now</div>
              </button>
            </div>
          </div>
          <img
            className={styles.womanImageIcon}
            alt=""
            src="../image-1@2x.png"
          />
        </div>
      </div>
      <img className={styles.brandsIcon} alt="" src="../brands@2x.png" />
      <div className={styles.newArrivalsSectionDiv}>
        <div className={styles.newArrivalsDiv}>
          <div className={styles.titleDiv}>
            <img className={styles.leafIcon} alt="" src="../leaf.svg" />
            <div className={styles.titleDiv1}>NEW ARRIVALS</div>
          </div>
          <div className={styles.fashionCardsDiv}>
            <div className={styles.fashionCardDiv}>
              <img
                className={styles.fashionImageIcon}
                alt=""
                src="../fashionimage@2x.png"
              />
              <div className={styles.navigationInnerBar}>
                <div className={styles.textDiv}>
                  <div className={styles.nameDiv}>{`Hoodies & Sweetshirt`}</div>
                  <div className={styles.exploreNowDiv}>Explore Now!</div>
                </div>
                <img className={styles.arrowIcon} alt="" src="../arrow-1.svg" />
              </div>
            </div>
            <div className={styles.fashionCardDiv1}>
              <img
                className={styles.fashionImageIcon}
                alt=""
                src="../fashionimage1@2x.png"
              />
              <div className={styles.navigationInnerBar}>
                <div className={styles.textDiv}>
                  <div className={styles.nameDiv1}>{`Coats & Parkas`}</div>
                  <div className={styles.exploreNowDiv1}>Explore Now!</div>
                </div>
                <img className={styles.arrowIcon} alt="" src="../arrow-2.svg" />
              </div>
            </div>
            <div className={styles.fashionCardDiv2}>
              <img
                className={styles.fashionImageIcon}
                alt=""
                src="../fashionimage2@2x.png"
              />
              <div className={styles.navigationInnerBar}>
                <div className={styles.textDiv}>
                  <div className={styles.nameDiv2}>{`Tees & T-Shirt`}</div>
                  <div className={styles.exploreNowDiv2}>Explore Now!</div>
                </div>
                <img className={styles.arrowIcon} alt="" src="../arrow-3.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.appDownloadDiv}>
        <div className={styles.vouchersDiv}>
          <div className={styles.downloadAppDiv}>
            <div className={styles.frameDiv}>
              <div className={styles.dOWNLOADAPPGETTHEVOUCHER}>
                <p className={styles.lETSP}>{`DOWNLOAD APP &`}</p>
                <p className={styles.cLOTHESP}>GET THE VOUCHER!</p>
              </div>
              <div className={styles.get30OffForFirstTransact}>
                <p className={styles.lETSP}>
                  Get 30% off for first transaction using
                </p>
                <p className={styles.cLOTHESP}>
                  Rondovision mobile app for now.
                </p>
              </div>
            </div>
            <div className={styles.frameDiv1}>
              <button className={styles.frameButton}>
                <img
                  className={styles.rectangleIcon}
                  alt=""
                  src="../rectangle-55@2x.png"
                />
              </button>
              <button className={styles.frameButton}>
                <img
                  className={styles.rectangleIcon}
                  alt=""
                  src="../rectangle-18@2x.png"
                />
              </button>
            </div>
          </div>
        </div>
        <img className={styles.image2Icon} alt="" src="../image-2@2x.png" />
      </div>
      <div className={styles.communityDiv}>
        <div className={styles.communityInnerDiv}>
          <div className={styles.joinDiv}>
            <div className={styles.jOINSHOPPINGCOMMUNITYTOGET}>
              JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
            </div>
            <div className={styles.typeYourEmailDownBelowAnd}>
              Type your email down below and be young wild generation
            </div>
          </div>
          <div className={styles.formDiv}>
            <input
              className={styles.addYourEmailHere}
              type="text"
              placeholder="Add your email here"
            />
            <button className={styles.button1}>
              <div className={styles.sENDDiv}>SEND</div>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.footerDiv}>
        <div className={styles.innerFooterDiv}>
          <div className={styles.fashionDiv}>
            <div className={styles.fASHIONDiv}>FASHION</div>
            <div className={styles.completeYourStyleWithAweso}>
              Complete your style with awesome clothes from us.
            </div>
            <div className={styles.logosDiv}>
              <div className={styles.groupDiv}>
                <div className={styles.rectangleDiv3} />
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="../vector.svg"
                />
              </div>
              <div className={styles.groupDiv}>
                <div className={styles.rectangleDiv3} />
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="../vector1.svg"
                />
              </div>
              <div className={styles.groupDiv}>
                <div className={styles.rectangleDiv3} />
                <img
                  className={styles.vectorIcon3}
                  alt=""
                  src="../vector2.svg"
                />
              </div>
              <div className={styles.groupDiv}>
                <div className={styles.rectangleDiv3} />
                <b className={styles.inB}>in</b>
              </div>
            </div>
          </div>
          <div className={styles.linksDiv1}>
            <div className={styles.column1Div}>
              <div className={styles.companyDiv}>Company</div>
              <div className={styles.aboutDiv}>About</div>
              <div className={styles.contactUsDiv}>Contact us</div>
              <div className={styles.supportDiv}>Support</div>
              <div className={styles.careersDiv}>Careers</div>
            </div>
            <div className={styles.column2Div}>
              <div className={styles.quickLinkDiv}>Quick Link</div>
              <div className={styles.shareLocationDiv}>Share Location</div>
              <div className={styles.ordersTrackingDiv}>Orders Tracking</div>
              <div className={styles.sizeGuideDiv}>Size Guide</div>
              <div className={styles.fAQsDiv}>FAQs</div>
            </div>
            <div className={styles.column3Div}>
              <div className={styles.legalDiv}>Legal</div>
              <div
                className={styles.termsConditions}
              >{`Terms & conditions`}</div>
              <div className={styles.privacyPolicyDiv}>Privacy Policy</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingLandingPageFinal;
