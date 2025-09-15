import { trackOutbound, withUtm } from '../utils/trackEvent';

export default function OutboundLink({
  href,
  label,       
  addUtm = true,
  children,
  ...rest
}) {
  const finalHref = addUtm ? withUtm(href, { campaign: label || 'outbound' }) : href;

  const onClick = () => {
    trackOutbound(finalHref, label || (typeof children === 'string' ? children : undefined));
  };

  return (
    <a href={finalHref} onClick={onClick} {...rest}>
      {children}
    </a>
  );
}
