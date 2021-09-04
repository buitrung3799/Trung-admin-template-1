import { Button as RSButton } from "rsuite";
export function Button(props) {
  const { mainColor, children, ...rest } = props;
  return (
    <RSButton className={`bg-${mainColor}-light text-${mainColor}-dark`} {...rest}>
      <b>{children}</b>
    </RSButton>
  );
}
