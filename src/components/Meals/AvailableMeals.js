import classes from "./AvailableMeals.module.css";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
 
  {
    id: "m1",
    name: "Candy",
    description: "Chocolate",
    price: 2 ,
  },
  {
    id: "m2",
    name: "Candy",
    description: "vanilla",
    price: 2 ,
  }
];

const AvailableMeals = () => {
  const mealslist = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meal}>
      <Card>
        <ul>{mealslist}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
