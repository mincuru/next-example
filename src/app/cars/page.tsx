import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Hello, Next.js!</h1>
      <ul>
        <li>
          <Link href="/cars/1">cars/1</Link>
        </li>
        <li>
          <Link href="/cars/2">cars/2</Link>
        </li>
        <li>
          <Link href="/cars/3">cars/3</Link>
        </li>
      </ul>
    </div>
  );
}
