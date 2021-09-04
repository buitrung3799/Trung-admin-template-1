import React from "react";
import { Panel, Icon } from "rsuite";

export function StatisticalCard(props) {
  const { cardColor, children, icon, title } = props;
  const cardBG = () => {
    switch (cardColor) {
      case "red":
        return "border-left-red";
      case "blue":
        return "border-left-blue";
      case "green":
        return "border-left-green";
      case "yellow":
        return "border-left-yellow";
      case "purple":
        return "border-left-purple";
      default:
        return "";
    }
  };
  const titleColor = () => {
    switch (cardColor) {
      case "red":
        return "text-red";
      case "blue":
        return "text-blue";
      case "green":
        return "text-green";
      case "yellow":
        return "text-yellow";
      case "purple":
        return "text-purple";
      default:
        return "";
    }
  };
  return (
    <Panel bodyFill shaded className={`statistical-card ${cardBG()}`}>
      <div className="card-container">
        <div className="card-box">
          <div className={`card-title ${titleColor()}`}>{title}</div>
          <div className="card-content">{children}</div>
        </div>
        <Icon size="2x" icon={icon} className="card-icon" />
      </div>
    </Panel>
  );
}
