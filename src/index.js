import Mustache from "mustache";
import React from "react";
export const ReactMustache = ({ template, data = {}, Component = "div" }) =>
  template ? (
    <Component
      dangerouslySetInnerHTML={{ __html: Mustache.render(template, data) }}
    />
  ) : null;
