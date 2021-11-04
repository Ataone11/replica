function Footer() {
  return (
    <div>
      <div className="bg-black w-full">
        <div className="grid grid-cols-1  md:grid-cols-2 gap-4 pt-10">
          <div>
            <h1 className="font-serif font-extrabold text-white text-3xl">
              Working Hours
            </h1>
            <h2 className="font-serif font-extrabold text-white text-2xl">
              Monday - Friday 5:00 AM - 12:00 AM
            </h2>
            <h2 className="font-serif font-extrabold text-white text-2xl">
              Sunday - Saturday 8:00 AM - 10:00 PM
            </h2>
          </div>
          <div>
            <h1 className="font-serif font-extrabold text-white text-3xl">
              Address
            </h1>
            <h2 className="font-serif font-extrabold text-white text-2xl">
              661 Sulphur Springs Ave.
            </h2>
            <h2 className="font-serif font-extrabold text-white text-2xl">
              Bronx, NY 10465
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
