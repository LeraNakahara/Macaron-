export default function NavigationData(props) {
  return (
    <ul>
      <img src="{props.image}" alt="" />
      <li>{props.title}</li>
    </ul>
  );
}
