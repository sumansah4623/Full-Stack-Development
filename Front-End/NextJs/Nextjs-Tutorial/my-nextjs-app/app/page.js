// export default function Home() {
//   return (
//     <div>
//       <h1>Hello World!</h1>
//     </div>
//   );
// }




// export default function Home() {
//   return (
//     <div><h1>Welcome to the Next.js Tutorial</h1></div>
//   );
// }




import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>

      <ul>
        <li><Link href= "/about">About</Link></li>
        <li><Link href= "/contact">Contact</Link></li>
      </ul>
    </div>
  );
}