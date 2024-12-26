import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-white py-10 lg:mt-20 ">
      <div className="container mx-auto px-4 mt-64 lg:mt-0">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          {/* Logo and About Section */}
          <div className="md:col-span-2">
            <img src={logo} alt="Logo" className="w-full h-28 mb-4" />
            <p className="text-gray-600 text-wrap">
              BD Trip is the country’s first and leading online travel
              aggregator (OTA). Since our inception, we have dreamed of making
              travel easier for people of all ages and we move forward to make
              that dream a reality.
            </p>
          </div>

          {/* Explore Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Explore
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="/about" className="hover:text-purple-700">
                  About Us
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-purple-700">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-purple-700">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/sitemap" className="hover:text-purple-700">
                  Hotel Sitemap
                </a>
              </li>
              <li>
                <a href="/medical-tourism" className="hover:text-purple-700">
                  Medical Tourism
                </a>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Services
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="/flight" className="hover:text-purple-700">
                  Flight
                </a>
              </li>
              <li>
                <a href="/hotel" className="hover:text-purple-700">
                  Hotel
                </a>
              </li>
              <li>
                <a href="/holiday" className="hover:text-purple-700">
                  Holiday
                </a>
              </li>
              <li>
                <a href="/visa" className="hover:text-purple-700">
                  Visa
                </a>
              </li>
            </ul>
          </div>

          {/* Useful Links Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Useful Links
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="/travel-guide" className="hover:text-purple-700">
                  Travel Guide
                </a>
              </li>
              <li>
                <a href="/advisory" className="hover:text-purple-700">
                  Travel Advisory
                </a>
              </li>
              <li>
                <a href="/visa-guide" className="hover:text-purple-700">
                  Visa Guide
                </a>
              </li>
              <li>
                <a href="/visa-application" className="hover:text-purple-700">
                  Visa Application
                </a>
              </li>
            </ul>
          </div>

          {/* We Accept Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              We Accept
            </h3>
            <div className="flex flex-wrap gap-2">
              <img
                src="https://cdn.sharetrip.net/sharetrip_net/production/public/images/sample-images/we-accept/bkash.svg"
                alt="Payment Method"
                className="w-12"
              />
              <img
                src="https://cdn.sharetrip.net/sharetrip_net/production/public/images/sample-images/we-accept/nagad.svg"
                alt="Payment Method"
                className="w-12"
              />
              <img
                src="https://cdn.sharetrip.net/sharetrip_net/production/public/images/sample-images/we-accept/tap.svg"
                alt="Payment Method"
                className="w-12"
              />
              <img
                src="https://cdn.sharetrip.net/sharetrip_net/production/public/images/sample-images/we-accept/dbbl.svg"
                alt="Payment Method"
                className="w-12"
              />
              <img
                src="https://cdn.sharetrip.net/sharetrip_net/production/public/images/sample-images/we-accept/upay.svg"
                alt="Payment Method"
                className="w-12"
              />
              <img
                src="https://cdn.sharetrip.net/sharetrip_net/production/public/images/sample-images/we-accept/ok.svg"
                alt="Payment Method"
                className="w-12"
              />
              <img
                src="https://cdn.sharetrip.net/sharetrip_net/production/public/images/sample-images/we-accept/amexCard.svg"
                alt="Payment Method"
                className="w-12"
              />
              <img
                src="https://cdn.sharetrip.net/sharetrip_net/production/public/images/sample-images/we-accept/visaCard.svg"
                alt="Payment Method"
                className="w-12"
              />
              <img
                src="https://cdn.sharetrip.net/sharetrip_net/production/public/images/sample-images/we-accept/masterCard.svg"
                alt="Payment Method"
                className="w-12"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t pt-6 text-sm text-gray-600 text-center md:text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Contact Us
              </h3>
              <p>
                Email:{" "}
                <a
                  href="mailto:ask@bdtrip.com"
                  className="text-purple-700 hover:underline"
                >
                  ask@bdtrip.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a
                  href="tel:+8809617617617"
                  className="text-purple-700 hover:underline"
                >
                  +880 9617 617617
                </a>
              </p>
              <p>
                WhatsApp:{" "}
                <a
                  href="https://wa.me/8809617617617"
                  className="text-purple-700 hover:underline"
                >
                  Message us
                </a>
              </p>
              <div className="flex lg:ml-0 ml-20 space-x-4 mt-4">
                <a href="#" className="text-gray-600 hover:text-purple-700">
                  <img
                    src="data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20clip-path%3D%22url(%23clip0_2019_31847)%22%3E%3Cpath%20d%3D%22M13.65%2013.9256H16.025L16.975%2010.1256H13.65V8.22561C13.65%207.24711%2013.65%206.32561%2015.55%206.32561H16.975V3.13361C16.6653%203.09276%2015.4959%203.00061%2014.2609%203.00061C11.6816%203.00061%209.85%204.57476%209.85%207.46561V10.1256H7V13.9256H9.85V22.0006H13.65V13.9256Z%22%20fill%3D%22%239BA6B2%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3Cdefs%3E%3CclipPath%20id%3D%22clip0_2019_31847%22%3E%3Crect%20width%3D%2224%22%20height%3D%2224%22%20fill%3D%22white%22%20transform%3D%22translate(0%200.000610352)%22%3E%3C%2Frect%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3C%2Fsvg%3E"
                    alt="Payment Method"
                    className="w-6"
                  />
                </a>
                <a href="#" className="text-gray-600 hover:text-purple-700">
                  <img
                    src="data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20clip-path%3D%22url(%23clip0_2019_31846)%22%3E%3Cpath%20d%3D%22M15.3%205.5506C14.54%205.55048%2013.8103%205.84872%2013.2679%206.38117C12.7256%206.91362%2012.4139%207.6377%2012.4%208.3976L12.372%209.9726C12.3704%2010.0572%2012.3509%2010.1404%2012.3148%2010.2169C12.2787%2010.2934%2012.2269%2010.3614%2012.1626%2010.4165C12.0984%2010.4715%2012.0233%2010.5124%2011.9422%2010.5364C11.8611%2010.5603%2011.7758%2010.5669%2011.692%2010.5556L10.131%2010.3436C8.077%2010.0636%206.109%209.1176%204.221%207.5446C3.623%2010.8546%204.791%2013.1476%207.604%2014.9166L9.351%2016.0146C9.43401%2016.0668%209.50297%2016.1385%209.55185%2016.2235C9.60073%2016.3084%209.62804%2016.4041%209.6314%2016.5021C9.63475%2016.6001%209.61405%2016.6974%209.5711%2016.7855C9.52814%2016.8736%209.46425%2016.9499%209.385%2017.0076L7.793%2018.1706C8.74%2018.2296%209.639%2018.1876%2010.385%2018.0396C15.103%2017.0976%2018.24%2013.5476%2018.24%207.6916C18.24%207.2136%2017.228%205.5506%2015.3%205.5506V5.5506ZM10.4%208.3606C10.4175%207.39665%2010.7189%206.45927%2011.2666%205.66582C11.8142%204.87238%2012.5838%204.25812%2013.4789%203.89997C14.374%203.54182%2015.3549%203.45568%2016.2987%203.65235C17.2426%203.84902%2018.1074%204.31975%2018.785%205.0056C19.496%205.0006%2020.101%205.1806%2021.454%204.3606C21.119%206.0006%2020.954%206.7126%2020.24%207.6916C20.24%2015.3336%2015.543%2019.0496%2010.777%2020.0006C7.509%2020.6526%202.757%2019.5816%201.395%2018.1596C2.089%2018.1056%204.909%2017.8026%206.539%2016.6096C5.16%2015.7006%20-0.328996%2012.4706%203.278%203.7866C4.971%205.7636%206.688%207.1096%208.428%207.8236C9.586%208.2986%209.87%208.2886%2010.401%208.3616L10.4%208.3606Z%22%20fill%3D%22%239BA6B2%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3Cdefs%3E%3CclipPath%20id%3D%22clip0_2019_31846%22%3E%3Crect%20width%3D%2224%22%20height%3D%2224%22%20fill%3D%22white%22%20transform%3D%22translate(0%200.000610352)%22%3E%3C%2Frect%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3C%2Fsvg%3E"
                    alt="Payment Method"
                    className="w-6"
                  />
                </a>
                <a href="#" className="text-gray-600 hover:text-purple-700">
                  <img
                    src="data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M12%209.00061C11.2044%209.00061%2010.4413%209.31668%209.87868%209.87929C9.31607%2010.4419%209%2011.205%209%2012.0006C9%2012.7963%209.31607%2013.5593%209.87868%2014.1219C10.4413%2014.6845%2011.2044%2015.0006%2012%2015.0006C12.7956%2015.0006%2013.5587%2014.6845%2014.1213%2014.1219C14.6839%2013.5593%2015%2012.7963%2015%2012.0006C15%2011.205%2014.6839%2010.4419%2014.1213%209.87929C13.5587%209.31668%2012.7956%209.00061%2012%209.00061ZM12%207.00061C13.3261%207.00061%2014.5979%207.52739%2015.5355%208.46508C16.4732%209.40276%2017%2010.6745%2017%2012.0006C17%2013.3267%2016.4732%2014.5985%2015.5355%2015.5361C14.5979%2016.4738%2013.3261%2017.0006%2012%2017.0006C10.6739%2017.0006%209.40215%2016.4738%208.46447%2015.5361C7.52678%2014.5985%207%2013.3267%207%2012.0006C7%2010.6745%207.52678%209.40276%208.46447%208.46508C9.40215%207.52739%2010.6739%207.00061%2012%207.00061ZM18.5%206.75061C18.5%207.08213%2018.3683%207.40007%2018.1339%207.63449C17.8995%207.86891%2017.5815%208.00061%2017.25%208.00061C16.9185%208.00061%2016.6005%207.86891%2016.3661%207.63449C16.1317%207.40007%2016%207.08213%2016%206.75061C16%206.41909%2016.1317%206.10115%2016.3661%205.86673C16.6005%205.63231%2016.9185%205.50061%2017.25%205.50061C17.5815%205.50061%2017.8995%205.63231%2018.1339%205.86673C18.3683%206.10115%2018.5%206.41909%2018.5%206.75061ZM12%204.00061C9.526%204.00061%209.122%204.00761%207.971%204.05861C7.187%204.09561%206.661%204.20061%206.173%204.39061C5.739%204.55861%205.426%204.75961%205.093%205.09361C4.78001%205.39601%204.53935%205.76519%204.389%206.17361C4.199%206.66361%204.094%207.18861%204.058%207.97161C4.006%209.07561%204%209.46161%204%2012.0006C4%2014.4746%204.007%2014.8786%204.058%2016.0296C4.095%2016.8126%204.2%2017.3396%204.389%2017.8266C4.559%2018.2616%204.759%2018.5746%205.091%2018.9066C5.428%2019.2426%205.741%2019.4436%206.171%2019.6096C6.665%2019.8006%207.191%2019.9066%207.971%2019.9426C9.075%2019.9946%209.461%2020.0006%2012%2020.0006C14.474%2020.0006%2014.878%2019.9936%2016.029%2019.9426C16.811%2019.9056%2017.338%2019.8006%2017.826%2019.6116C18.259%2019.4426%2018.574%2019.2416%2018.906%2018.9096C19.243%2018.5726%2019.444%2018.2596%2019.61%2017.8296C19.8%2017.3366%2019.906%2016.8096%2019.942%2016.0296C19.994%2014.9256%2020%2014.5396%2020%2012.0006C20%209.52661%2019.993%209.12261%2019.942%207.97161C19.905%207.18961%2019.8%206.66161%2019.61%206.17361C19.4593%205.76561%2019.2191%205.39657%2018.907%205.09361C18.6047%204.78046%2018.2355%204.53978%2017.827%204.38961C17.337%204.19961%2016.811%204.09461%2016.029%204.05861C14.925%204.00661%2014.539%204.00061%2012%204.00061ZM12%202.00061C14.717%202.00061%2015.056%202.01061%2016.122%202.06061C17.187%202.11061%2017.912%202.27761%2018.55%202.52561C19.21%202.77961%2019.766%203.12361%2020.322%203.67861C20.8305%204.17851%2021.224%204.7832%2021.475%205.45061C21.722%206.08761%2021.89%206.81361%2021.94%207.87861C21.987%208.94461%2022%209.28361%2022%2012.0006C22%2014.7176%2021.99%2015.0566%2021.94%2016.1226C21.89%2017.1876%2021.722%2017.9126%2021.475%2018.5506C21.2247%2019.2184%2020.8311%2019.8232%2020.322%2020.3226C19.822%2020.8309%2019.2173%2021.2244%2018.55%2021.4756C17.913%2021.7226%2017.187%2021.8906%2016.122%2021.9406C15.056%2021.9876%2014.717%2022.0006%2012%2022.0006C9.283%2022.0006%208.944%2021.9906%207.878%2021.9406C6.813%2021.8906%206.088%2021.7226%205.45%2021.4756C4.78233%2021.2251%204.17753%2020.8316%203.678%2020.3226C3.16941%2019.8228%202.77593%2019.2181%202.525%2018.5506C2.277%2017.9136%202.11%2017.1876%202.06%2016.1226C2.013%2015.0566%202%2014.7176%202%2012.0006C2%209.28361%202.01%208.94461%202.06%207.87861C2.11%206.81261%202.277%206.08861%202.525%205.45061C2.77524%204.78279%203.1688%204.17793%203.678%203.67861C4.17767%203.16984%204.78243%202.77634%205.45%202.52561C6.088%202.27761%206.812%202.11061%207.878%202.06061C8.944%202.01361%209.283%202.00061%2012%202.00061Z%22%20fill%3D%22%239BA6B2%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E"
                    alt="Payment Method"
                    className="w-6"
                  />
                </a>
                <a href="#" className="text-gray-600 hover:text-purple-700">
                  <img
                    src="data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20clip-path%3D%22url(%23clip0_2019_31845)%22%3E%3Cpath%20d%3D%22M19.606%206.99561C19.53%206.69761%2019.314%206.47261%2019.067%206.40361C18.63%206.28061%2016.5%206.00061%2012%206.00061C7.5%206.00061%205.372%206.28061%204.931%206.40361C4.687%206.47161%204.471%206.69661%204.394%206.99561C4.285%207.41961%204%209.19661%204%2012.0006C4%2014.8046%204.285%2016.5806%204.394%2017.0066C4.47%2017.3036%204.686%2017.5286%204.932%2017.5966C5.372%2017.7206%207.5%2018.0006%2012%2018.0006C16.5%2018.0006%2018.629%2017.7206%2019.069%2017.5976C19.313%2017.5296%2019.529%2017.3046%2019.606%2017.0056C19.715%2016.5816%2020%2014.8006%2020%2012.0006C20%209.20061%2019.715%207.42061%2019.606%206.99561ZM21.543%206.49861C22%208.28061%2022%2012.0006%2022%2012.0006C22%2012.0006%2022%2015.7206%2021.543%2017.5026C21.289%2018.4876%2020.546%2019.2626%2019.605%2019.5246C17.896%2020.0006%2012%2020.0006%2012%2020.0006C12%2020.0006%206.107%2020.0006%204.395%2019.5246C3.45%2019.2586%202.708%2018.4846%202.457%2017.5026C2%2015.7206%202%2012.0006%202%2012.0006C2%2012.0006%202%208.28061%202.457%206.49861C2.711%205.51361%203.454%204.73861%204.395%204.47661C6.107%204.00061%2012%204.00061%2012%204.00061C12%204.00061%2017.896%204.00061%2019.605%204.47661C20.55%204.74261%2021.292%205.51661%2021.543%206.49861V6.49861ZM10%2015.5006V8.50061L16%2012.0006L10%2015.5006Z%22%20fill%3D%22%239BA6B2%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3Cdefs%3E%3CclipPath%20id%3D%22clip0_2019_31845%22%3E%3Crect%20width%3D%2224%22%20height%3D%2224%22%20fill%3D%22white%22%20transform%3D%22translate(0%200.000610352)%22%3E%3C%2Frect%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3C%2Fsvg%3E"
                    alt="Payment Method"
                    className="w-6"
                  />
                </a>
              </div>
            </div>

            {/* Office Locations */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Office Locations
              </h3>
              <p>
                <strong>Bangladesh </strong> <br /> House E1, Unit 4A, Block E,
                Rupnagar Rd, <br /> Mirpur, Dhaka 1216, Bangladesh
              </p>
              <p className="mt-2">
                <strong>Singapore</strong> <br /> 30 Cecil Street # 19-08
                Prudential Tower, <br /> Singapore 049712
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
