import * as React from "react";

function WithTitle(SourceComponent: React.ReactNode) {
  function TargetComponent() {};
  TargetComponent.navigationOptions = SourceComponent && SourceComponent.navigationOptions;
  return TargetComponent;
}

export default WithTitle;