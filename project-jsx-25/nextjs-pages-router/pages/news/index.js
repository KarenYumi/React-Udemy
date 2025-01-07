// our-domain.com/news

import Link from "next/link";
import { Fragment } from "react";

export default function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextlevel">Im on the NEXT level</Link>
        </li>
        <li>Something Else</li>
      </ul>
    </Fragment>
  );
}

