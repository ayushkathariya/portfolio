import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Link href={"/easy-german/A1"} className='text-blue-500 underline'>Easy German A1</Link>
      <br />
      <Link href={"/learn-german/A1"} className='text-blue-500 underline'>Learn German A1</Link>
      <br />
      <Link href={"/easy-german/A2"} className='text-blue-500 underline'>Easy German A2</Link>
      <br />
      <Link href={"/learn-german/A2"} className='text-blue-500 underline'>Learn German A2</Link>
    </>
  );
}
