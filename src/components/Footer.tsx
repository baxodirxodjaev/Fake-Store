
const Footer = () => {
  return (
    <footer className="bg-neutral-800 ">
      <div className="container mx-auto py-4 px-5"> 
        <div className="flex flex-wrap justify-between items-center gap-4 px-5">
          <ul className="text-white">
            <li className="font-semibold text-xl">Shop Categories</li>
            <li className="list-disc">Electronics</li>
            <li className="list-disc">Jewelry</li>
            <li className="list-disc">Men's Clothing</li>
            <li className="list-disc">Women's Clothing</li>
          </ul>

          <ul className="text-white">
            <li className="font-semibold text-xl">Contact Us</li>
            <li className="list-disc">Email : <a className="text-blue-300" href="#"> support@fakestore.com </a></li>
            <li className="list-disc">Phone : +1 (800) 123-4567</li>
            <li className="list-disc">Address: 123 E-Commerce Blvd, Online City, Webland</li>
          </ul>
            <br />
          <div className="text-white">
            <p className="font-bold text-2xl">Copyright Notice</p>
            <p>© 2025 FakeStore. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer