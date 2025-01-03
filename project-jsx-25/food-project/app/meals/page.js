import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";

export default async function MealsPage() {
  const meals = await getMeals();


  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious melas, crested{""}
          <span className={classes.highlight}>by</span>
        </h1>
        <p>
          Choose your favorite rcipe and cool it ypurself at home!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">
          Share Your Favorite Recipe
          </Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={meals} />
      </main>
    </>

  );
}