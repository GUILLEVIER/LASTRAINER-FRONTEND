export function Footer() {
  return (
    <footer className="bg-white text-black py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Lastrainer. All rights reserved.</p>
        <p>
          Follow us on{' '}
          <a href="https://twitter.com/lastrainer" className="text-primary hover:underline">
            Twitter
          </a>
          ,{' '}
          <a href="https://instagram.com/lastrainer" className="text-primary hover:underline">
            Instagram
          </a>
          , and{' '}
          <a href="https://facebook.com/lastrainer" className="text-primary hover:underline">
            Facebook
          </a>
        </p>
      </div>
    </footer>
  );
}