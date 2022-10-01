import { useState } from "react";
import { AddCategory, GifGrid  } from "./components";


export const GifExpertApp = () => {

	const [categories, setCategories] = useState(['Spiderman']);

	const onAddCategory = (newCategory) => {

		if (categories.includes(newCategory)) return;

		setCategories([newCategory, ...categories])

	}

	// console.log(categories);

	return (
		<>
			{/* Titulo */}

			<h1>GifExpertApp</h1>

			{/* Input */}
			<AddCategory
				// setCategories={setCategories}
				onNewCategory={onAddCategory}
			/>


			{/* Listado de Gif */}
			{
				categories.map(category => (
					// <li key={category}>{category}</li>
					<GifGrid
						key={category}
						category={category}
					/>
				))
			}


			{/* Gif Item */}


		</>
	)

}
