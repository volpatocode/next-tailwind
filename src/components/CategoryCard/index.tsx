import { categoryType } from "../../types/types";

export default function index(category: categoryType) {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat grid place-items-center rounded-md min-h-[200px] sm:min-h-[250px] cursor-pointer hover:opacity-60 transition-all duration-200"
      style={{
        backgroundImage: `url(/${category?.img})`,

      }}
    >
      <h3 className="font-extrabold text-3xl">{category.name}</h3>
    </div>
  );
}
