import Image from "next/image";
import Link from "next/link";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import WhatsappIcon from "../../../public/whatsapp-icon.svg";

export default function VisitMe() {

  return (
    <div className="bg-black mt-20 grid grid-cols-1 md:grid-cols-2 text-white p-8">
       <div className="z-10 md:mx-40 md:mt-28">
        <form className="flex flex-col">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-md font-medium text-white"
            >
              My email
            </label>
            <textarea
              type="email"
              id="email"
              readOnly
              className="bg-[#18191E] border outline-none border-[#33353F] placeholder-[#d6cccc] text-gray-100 text-md rounded-lg block w-full h-20 p-2.5"
              placeholder="jaleesamir32952@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="block mb-2 text-md font-medium text-white"
            >
              Office Address
            </label>
            <div className="bg-[#18191E] border outline-none border-[#33353F] placeholder-[#d6cccc] text-gray-100 text-md rounded-lg block h-70 w-full p-2.5">
            <text className="py-10">26a/1 near Empress road police line</text>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.493320774655!2d74.33138647620373!3d31.565517144909137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b4a6903d0e3%3A0x703b52d4bdad5f70!2s26a%2C%201%20Empress%20Rd%2C%20behind%20Radio%20Station%2C%20Usmania%20Colony%20Police%20Lines%2C%20Lahore%2C%20Punjab%2054000%2C%20Pakistan!5e0!3m2!1sen!2s!4v1702550375684!5m2!1sen!2s" className="rounded-lg w-full" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block mb-2 text-md font-medium text-white"
            >
              My Message
            </label>
            <textarea
              name="message"
              id="message"
              readOnly
              className="bg-[#18191E] border outline-none border-[#33353F] placeholder-[#d6cccc] text-gray-100 text-md rounded-lg h-40 block w-full p-2.5"
              placeholder="Hey there! I'm excited to introduce myself as a wholesaler with a robust three-year background in the dynamic field of marketing. Over the years, I've gained extensive experience and insights into the wholesale industry, enabling me to offer top-notch services. For inquiries, discussions, or collaboration opportunities, you can easily reach out to me through the following contact details:"
            />
          </div>
          
        </form>
        <div className="flex flex-row gap-2 socials">
          <Link href="https://www.facebook.com/jalees.amir15">
            <Image src={GithubIcon} alt="Facebook Icon" />
          </Link>
          <Link href="https://www.instagram.com/jalees.amir15/">
            <Image src={LinkedinIcon} alt="Instagram Icon" />
          </Link>
          <Link href="https://wa.me/+923158120280">
            <Image src={WhatsappIcon} alt="Whatsapp Icon" />
          </Link>
        </div>
        </div>
        <div>
            <div className="hidden md:block mt-20">
                <Image src="/images/contact-image.png" alt="contact-image" width={700} height={700}/>
            </div>
        </div>
    </div>
  );
}
