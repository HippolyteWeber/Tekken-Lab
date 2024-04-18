import data from "../../data.json";
import Card from "./Card";
console.log(data);

export default function CardList() {
  return (
    <div className="flex flex-wrap justify-center mt-[150px]">
      {data.data.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
}
