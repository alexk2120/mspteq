import React from "react";
import "./RestaurantLandingPage.css";

function RestaurantLandingPage(props) {
  const {
    aboutPageBannerImageBackgroundRemov,
    rectangle1,
    rectangle5,
    rectangle4,
    rectangle3,
    spanText1,
    spanText2,
    inputType,
    inputPlaceholder,
    submit,
    rectangle2,
    title,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    homePageBannerImageBackgroundRemove,
    phone,
    salesMrsanchopanchoCom,
    spanText7,
    spanText8,
    spanText9,
    spanText10,
    spanText11,
    spanText12,
  } = props;

  return (
    <div className="container-center-horizontal">
      <form className="restaurant-landing-page screen" name="form1" action="form1" method="post">
        <div className="flex-row">
          <img
            className="about-page-banner-im"
            src={aboutPageBannerImageBackgroundRemov}
            alt="About Page Banner Image Background Removed 1"
          />
          {/* <img */}
            {/* className="mr-sancho-pancho-teq"
            src="/img/mr--sancho-pancho-tequila-100--tequila-de-agave-azul-producto-de.svg"
            alt="Mr. Sancho Pancho Tequila 100% Tequila de Agave Azul Producto de Mxico"
          /> */}
        </div>
        <img className="rectangle-1" src={rectangle1} alt="Rectangle 1" />
        <img
          className="x100-tequila-de-agave"
          src="/img/100--tequila-de-agave-azul-producto-de-mexico.svg"
          alt="100% Tequila de Agave Azul Producto de Mexico"
        />
        <div className="flex-row-1">
          <div className="overlap-group1">
            <img className="rectangle-5" src={rectangle5} alt="Rectangle 5" />
            <img className="rectangle-4" src={rectangle4} alt="Rectangle 4" />
          </div>
          <img className="rectangle-3" src={rectangle3} alt="Rectangle 3" />
        </div>
        <div className="overlap-group">
          <div className="contact-section">
            <div className="flex-container montserrat-bold-gravel-40px">
              <div className="text valign-text-middle">
                <span>
                  <span className="montserrat-bold-gravel-40px">{spanText1}</span>
                </span>
              </div>
              <div className="text valign-text-middle">
                <span>
                  <span className="montserrat-bold-gravel-40px">{spanText2}</span>
                </span>
              </div>
            </div>
            <div className="frame-4">
              <input
                className="yourmailgmailcom"
                name="yourmailgmailcom"
                placeholder={inputPlaceholder}
                type={inputType}
              />
              <div className="learn-more-button">
                <a href="javascript:SubmitForm('form1')">
                  <div className="submit valign-text-middle">{submit}</div>
                </a>
              </div>
            </div>
          </div>
          <img className="vector" src="/img/vector.svg" alt="Vector" />
          <img
            className="about-section-background"
            src="/img/about-section-background.svg"
            alt="About Section Background"
          />
          <img className="rectangle-2" src={rectangle2} alt="Rectangle 2" />
          <img className="banner-background" src="/img/banner-background.svg" alt="Banner Background" />
          <div className="about-section-info-container">
            <div className="about-section-text-container">
              <div className="heading">
                <h1 className="title valign-text-middle">{title}</h1>
              </div>
            </div>
          </div>
          <div className="flex-container-1 montserrat-medium-black-20px">
            <div className="text-1 valign-text-bottom">
              <span>
                <span className="montserrat-medium-black-20px">{spanText3}</span>
              </span>
            </div>
            <div className="text-2 valign-text-bottom">
              <span>
                <span className="montserrat-medium-black-20px">{spanText4}</span>
              </span>
            </div>
            <div className="text-1 valign-text-bottom">
              <span>
                <span className="montserrat-medium-black-20px">{spanText5}</span>
              </span>
            </div>
            <div className="text-2 valign-text-bottom">
              <span>
                <span className="montserrat-medium-black-20px">{spanText6}</span>
              </span>
            </div>
          </div>
        </div>
        <img
          className="home-page-banner-ima"
          src={homePageBannerImageBackgroundRemove}
          alt="Home Page Banner Image Background Removed 1"
        />
        <div className="phone valign-text-middle">{phone}</div>
        <a href="mailto:Sales@mrsanchopancho.com" target="_blank">
          <div className="salesmrsanchopanchocom valign-text-middle">{salesMrsanchopanchoCom}</div>
        </a>
        <div className="overlap-group2">
          <div className="footer-section">
            <div className="section-2"></div>
          </div>
          <div className="flex-container-2 reemkufi-medium-mine-shaft-16px">
            <div className="text-3 valign-text-middle">
              <span>
                <span className="reemkufi-medium-mine-shaft-16px">{spanText7}</span>
              </span>
            </div>
            <div className="text-3 valign-text-middle">
              <span>
                <span className="reemkufi-medium-mine-shaft-16px">{spanText8}</span>
              </span>
            </div>
            <div className="text-3 valign-text-middle">
              <span>
                <span className="reemkufi-medium-mine-shaft-16px">{spanText9}</span>
              </span>
            </div>
            <div className="text-3 valign-text-middle">
              <span>
                <span className="reemkufi-medium-mine-shaft-16px">{spanText10}</span>
              </span>
            </div>
            <div className="text-3 valign-text-middle">
              <span>
                <span className="reemkufi-medium-mine-shaft-16px">{spanText11}</span>
              </span>
            </div>
            <div className="text5 valign-text-middle">
              <span>
                <span className="reemkufi-medium-mine-shaft-16px">{spanText12}</span>
              </span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RestaurantLandingPage;
