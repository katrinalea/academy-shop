// create items with images, and a button underneath saying add to list, and a button saying remove to list.
// add to list will list the item on the left hand side, as well as adding the price of the item to a running total showed at the bottom of the list
import ItemLayout from "./utils/itemPlacement";

interface items {
  image: string;
  name: string;
  price: number;
}

const ItemsArr: items[] = [
  {
    image:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.everydayhealth.com%2Fimages%2Fdiet-nutrition%2Fall-about-bananas-nutrition-facts-health-benefits-recipes-and-more-rm-722x406.jpg&imgrefurl=https%3A%2F%2Fwww.everydayhealth.com%2Fdiet-nutrition%2Fdiet%2Fbananas-nutrition-facts-health-benefits-recipes-risks%2F&tbnid=fV7cO8Pu5HaH_M&vet=12ahUKEwjIp-bql6T7AhVgQUEAHXz3Bw4QMygDegUIARDtAQ..i&docid=yJaHhdO_FriLFM&w=722&h=406&q=bananas%20images&ved=2ahUKEwjIp-bql6T7AhVgQUEAHXz3Bw4QMygDegUIARDtAQ",
    name: "Bananas",
    price: 2.5,
  },
  {
    image:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fd7hftxdivxxvm.cloudfront.net%2F%3Fresize_to%3Dwidth%26src%3Dhttps%253A%252F%252Fartsy-media-uploads.s3.amazonaws.com%252Femc1tw4XEy1xHhmr2Ub4Sw%25252FPencils.jpg%26width%3D910%26quality%3D80&imgrefurl=https%3A%2F%2Fwww.artsy.net%2Farticle%2Fartsy-editorial-little-known-reason-pencils-yellow&tbnid=ftqc5nuwc9vrVM&vet=12ahUKEwj_prGBmKT7AhULBMAKHQ0BDzsQMygMegUIARCKAw..i&docid=GjaAF5kAJO8mzM&w=910&h=651&q=pencils%20images&ved=2ahUKEwj_prGBmKT7AhULBMAKHQ0BDzsQMygMegUIARCKAw",
    name: "Pencils",
    price: 1.0,
  },
];

function Items(): JSX.Element {
  return (
    <div>
      {ItemsArr.map((element, i) => (
        <li key={i}>{element}</li>
      ))}
    </div>
  );
}
export default Items;
