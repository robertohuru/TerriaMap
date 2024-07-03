import React from "react";
import PropTypes from "prop-types";

import MenuPanel from "terriajs/lib/ReactViews/StandardUserInterface/customizable/MenuPanel.jsx";
import PanelStyles from "terriajs/lib/ReactViews/Map/Panels/panel.scss";
import parseCustomMarkdownToReact from "terriajs/lib/ReactViews/Custom/parseCustomMarkdownToReact";
import Styles from "./related-maps.scss";
import classNames from "classnames";

function RelatedMaps(props) {
  const dropdownTheme = {
    inner: Styles.dropdownInner,
    icon: "gallery"
  };

  const relatedMaps = props.viewState.terria.configParameters.relatedMaps;

  return (
    <MenuPanel
      theme={dropdownTheme}
      btnText="Related Sites"
      smallScreen={props.smallScreen}
      viewState={props.viewState}
      btnTitle="See related sites"
    >
      <div className={classNames(PanelStyles.header)}>
        <label className={PanelStyles.heading}>Related Sites</label>
      </div>

      {relatedMaps.map((map, i) => (

      <div className={classNames(PanelStyles.section, Styles.section)} key={i}>
        <a target="_blank" href={map.url} rel="noreferrer">
          <img
            className={Styles.image}
            src={map.imageUrl}
            alt={map.title}
          />
        </a>
        <a
          target="_blank"
          className={Styles.link}
          href={map.url}
          rel="noreferrer"
        >
          {map.title}
        </a>

        <p>
            {parseCustomMarkdownToReact(map.description)}
        </p>
      </div>
      ))}
    </MenuPanel>
  );
}

RelatedMaps.propTypes = {
  viewState: PropTypes.object.isRequired,
  smallScreen: PropTypes.bool,
};

export default RelatedMaps;
