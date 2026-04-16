import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='container mx-auto bg-gray-100 my-20 text-center p-40 space-y-5 rounded-2xl'>
      <h2 className='text-4xl font-bold text-[#244D3F]'> 404! Not Found!</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className='btn bg-[#244D3F] text-white'>Return Home</Link>
    </div>
  )
}


