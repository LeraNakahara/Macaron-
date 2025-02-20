import { Link } from "react-router-dom";

export default function FooterList(props) {
  return (
    <>
      <div className="grid grid-cols-3 gap-[30px]">
        {props.data.map((column, index) => (
          <div key={index}>
            <p className="font-proxima text-[16px]">{column.title}</p>
            <ul className="">
              {column.links.map((link, index) => (
                <li key={index} className="font-promixa pt-[15px]">
                  <Link to={link.to}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
