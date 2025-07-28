export const Link = (props) => {
  return (
    <>
      <li className="hover:bg-gray-300 ">
        <a className="h-6" href={props.link}>
          {props.text}
        </a>
      </li>
    </>
  );
};
