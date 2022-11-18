import { categories } from "../../data/categories";
import CategoryCard from "../CategoryCard";

export default function index() {
  return (
    <div className="container mx-auto flex flex-col gap-6">
      <h3 className="text-3xl font-semibold">Explore by category</h3>
      <div className="grid grid-cols-2 gap-6 grid-flow-row-dense sm:grid-cols-4">
        {categories.map((category) => {
          return (
            <CategoryCard
              key={category?.id}
              name={category?.name}
              img={category?.img}
            />
          );
        })}
      </div>
    </div>
  );
}
