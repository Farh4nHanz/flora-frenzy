import Swal from "sweetalert2";

// component
import Button from "@components/button";
import Form from "@components/form";
import FormInput from "@components/form/input";

// icons
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { PiTiktokLogoBold } from "react-icons/pi";
import { useState } from "react";

function Footer() {
  const [subscribe, setSubscribe] = useState("");

  const submitForm = (e) => {
    e.preventDefault();

    Swal.fire({
      icon: "success",
      title: "Thank you for subscribing!",
      text: "You're now on our list to receive the latest plant care tips, exclusive offers, and new arrivals. Happy growing!",
      showConfirmButton: false,
      timer: 3000,
    }).then(() => {
      setSubscribe("");
    });
  };

  const socialMedia = [
    {
      name: "Facebook",
      icon: <FaFacebookF size={20} />,
    },
    {
      name: "Twitter",
      icon: <FaXTwitter size={20} />,
    },
    {
      name: "Instagram",
      icon: <FaInstagram size={20} />,
    },
    {
      name: "TikTok",
      icon: <PiTiktokLogoBold size={20} />,
    },
  ];

  const navItem = {
    shop: [
      "Indoor Plants",
      "Outdoor Plants",
      "Pots & Planters",
      "Gardening Tools",
      "Fertilizers",
    ],
    support: [
      "FAQs",
      "Shipping & Returns",
      "Plant Care Guides",
      "Order Tracking",
      "Contact Support",
    ],
    legal: [
      "Privacy Policy",
      "Terms of Service",
      "Security",
      "Accessibility",
      "Refund Policy",
    ],
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Shop Column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Shop
            </h3>
            <ul className="mt-4 space-y-4">
              {navItem.shop.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-sm hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Support
            </h3>
            <ul className="mt-4 space-y-4">
              {navItem.support.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-sm hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Legal
            </h3>
            <ul className="mt-4 space-y-4">
              {navItem.legal.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-sm hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Subscribe to our newsletter
            </h3>
            <p className="mt-4 text-gray-500">
              Stay updated on the latest plant care tips, special offers, and
              new arrivals.
            </p>
            <Form className="mt-4 flex gap-3" onSubmit={submitForm}>
              <FormInput
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 w-full rounded-md bg-gray-800 border border-gray-700 text-gray-300 focus:outline-none focus:ring focus:ring-blue-500 text-sm"
                value={subscribe}
                onChange={(e) => setSubscribe(e.target.value)}
              />
              <Button
                type="submit"
                className="px-4 py-2 bg-green-600 rounded-md text-white hover:bg-green-700"
              >
                Subscribe
              </Button>
            </Form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-8 text-sm text-gray-500 flex flex-wrap justify-between items-center gap-10">
          <p>&copy; 2024 FloraFrenzy. All rights reserved.</p>
          <div className="flex space-x-6 self-center">
            {socialMedia.map((social, index) => (
              <a
                href="#"
                className="text-gray-400 hover:text-gray-300"
                key={index}
              >
                <span className="sr-only">{social.name}</span>
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
