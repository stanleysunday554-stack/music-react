import { categories } from "../../utils.js";

function Categories() {
  return (
    <section className="categories-section">

      <h2>
        Categories
      </h2>


      <div className="categories">

        {categories.map((category) => (

          <button key={category}>
            {category}
          </button>

        ))}

      </div>

    </section>
  );
}

export default Categories;