const Footer = () => {
  return (
    <footer className="bg-[#0b0815] text-gray-300 py-16">

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

        <div>
          <h3 className="text-yellow-400 text-xl font-bold mb-4">
            O² FITNESS GYM
          </h3>
          <p className="text-sm leading-relaxed">
            Transform your body and mind with expert training, modern equipment,
            and a motivating environment.
          </p>
        </div>

        <div>
          <h4 className="text-yellow-400 font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>About</li>
            <li>Membership</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="text-yellow-400 font-semibold mb-4">Contact</h4>
          <ul className="text-sm space-y-2">
            <li>Siliguri, West Bengal</li>
            <li>+91 9XXXXXXXXX</li>
            <li>info@o2fitnessgym.com</li>
          </ul>
        </div>

        <div>
          <h4 className="text-yellow-400 font-semibold mb-4">Opening Hours</h4>
          <ul className="text-sm space-y-2">
            <li>Mon - Sat: 5:00 AM - 10:00 PM</li>
            <li>Sunday: 6:00 AM - 2:00 PM</li>
          </ul>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
        © 2026 O² Fitness Gym. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;