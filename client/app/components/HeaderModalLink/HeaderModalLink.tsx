import "./HeaderModalLink.scss";

interface HeaderModalLinkProps {
  content: string;
  href: string;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const HeaderModalLink = ({ content, href, Icon }: HeaderModalLinkProps) => {
  return (
    <a href={href} className="header-modal-link body-s-regular">
      <Icon />

      {content}
    </a>
  );
};

export default HeaderModalLink;
