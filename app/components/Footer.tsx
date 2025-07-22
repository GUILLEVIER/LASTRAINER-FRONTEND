export function Footer() {
  return (
    <footer className='dark:bg-white bg-black w-full text-white dark:text-black py-4 bottom-0 left-0'>
      <div className='container mx-auto text-center'>
        <p>
          &copy; {new Date().getFullYear()} Lastrainer. All rights reserved.
        </p>
        <p>
          Follow us on{' '}
          <a
            href='https://twitter.com/lastrainer'
            className='text-primary hover:underline'
          >
            Twitter
          </a>
          ,{' '}
          <a
            href='https://instagram.com/lastrainer'
            className='text-primary hover:underline'
          >
            Instagram
          </a>
          , and{' '}
          <a
            href='https://facebook.com/lastrainer'
            className='text-primary hover:underline'
          >
            Facebook
          </a>
        </p>
      </div>
    </footer>
  )
}
