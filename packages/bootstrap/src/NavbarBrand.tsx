import {JSX, mergeProps, splitProps} from "solid-js";
import classNames from "./classnames";

import {useBootstrapPrefix} from "./ThemeProvider";
import {BsPrefixProps, BsPrefixRefForwardingComponent} from "./helpers";
import {Dynamic} from "solid-js/web";

export interface NavbarBrandProps extends BsPrefixProps, JSX.HTMLAttributes<HTMLElement> {
  href?: string;
}
const defaultProps: Partial<NavbarBrandProps> = {};

const NavbarBrand: BsPrefixRefForwardingComponent<"a", NavbarBrandProps> = (
  p: NavbarBrandProps,
) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), ["as", "bsPrefix", "class"]);
  const bsPrefix = useBootstrapPrefix(local.bsPrefix, "navbar-brand");

  return (
    <Dynamic
      component={local.as || (props.href ? "a" : "span")}
      {...props}
      class={classNames(local.class, bsPrefix)}
    />
  );
};

export default NavbarBrand;
