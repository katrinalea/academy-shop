interface items {
  image: string;
  name: string;
  price: number;
}

function ItemLayout(props: items): JSX.Element {
  return (
    <>
      <p>Would you like to purchase {props.name}</p>
      <br />
      <img src={props.image} alt="" />
      <br />
      <p>It will cost: {props.price}</p>
    </>
  );
}

export default ItemLayout;
