import Link from "next/link";
import { Suspense } from "react";

import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";


async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />
}

export default async function MealsPage() {

  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious melas, crested{""}
          <span className={classes.highlight}> by you</span>
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
        <Suspense fallback={<p className={classes.loading}>Fetchig meals...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>

  );
}