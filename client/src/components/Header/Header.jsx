import React, { useState, useEffect , useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../../context/StateProvider.jsx";
import Services from "../../pages/Services.jsx";
import Modal from "react-bootstrap/Modal";
import TextRating from "../../constants/TextRating";

const Header = () => {
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const [service, setService] = useState([]);
  const [servicename, setServicename] = useState("");
  const [country, setCountry] = useState([]);
  const [countryname, setCountryname] = useState("");
  const [state, setState] = useState([]);
  const [statename, setStatename] = useState("");
  const [city, setCity] = useState([]);
  const [cityname, setCityname] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [shop, setShop] = useState("");
  const [shopid, setShopid] = useState("");

  // const navigate = useNavigate();
  useEffect(() => {
    const getservice = async () => {
      const resser = await fetch(
        "https://roadpartner.server.roadpartner.org/user/get-services"
      );
      const resservice = await resser.json();
      setService(await resservice);
    };
    getservice();
  }, []);
  const handleservice = (event) => {
    const getservicename = event.target.value;
    setServicename(getservicename);
  };
  useEffect(() => {
    const getcountry = async () => {
      const rescon = await fetch(
        "https://roadpartner.server.roadpartner.org/user/get-countries"
      );
      const rescountry = await rescon.json();
      setCountry(await rescountry);
    };
    getcountry();
  }, []);
  const handlecountry = (event) => {
    const getcountryname = event.target.value;
    setCountryname(getcountryname);
  };
  useEffect(() => {
    const getstate = async () => {
      const resst = await fetch(
        `https://roadpartner.server.roadpartner.org/user/get-states/${countryname}`
      );
      const resstate = await resst.json();
      setState(await resstate);
    };
    getstate();
  }, [countryname]);
  const handlestate = (event) => {
    const getstatename = event.target.value;
    setStatename(getstatename);
  };
  useEffect(() => {
    const getcity = async () => {
      const resct = await fetch(
        `https://roadpartner.server.roadpartner.org/user/get-cities/${statename}`
      );
      const rescity = await resct.json();
      setCity(await rescity);
    };
    getcity();
  }, [statename]);
  const handlecity = (event) => {
    // const getcityname=event.target.value;
    const getcityname = event.target.value;
    setCityname(getcityname);
  };

  //
  useEffect(() => {
    const getshop = async () => {
      const ressh = await fetch(
        `https://roadpartner.server.roadpartner.org/user/get-shops/${servicename}/${countryname}/${statename}/${cityname}`
      );

      const resshop = await ressh.json();
      setShop(await resshop);
    };
    getshop();
  }, [servicename, countryname, statename, cityname]);

  const handleShop = (event) => {
    const getshopname = event.target.value;

    setShopid(getshopname);
  };

  const menuRef = useRef();
  const searchRef = useRef();

  useEffect(()=>{
    const handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown",handler);

    return()=>{
      document.removeEventListener("mousedown",handler);
    }
  });

  useEffect(()=>{
    const handler = (e)=>{
      if(!searchRef.current.contains(e.target)){
        setSearchOpen(false);
      }
    };
    document.addEventListener("mousedown",handler);

    return()=>{
      document.removeEventListener("mousedown",handler);
    }
  });


  // const toggleMenu = () => {
  //   setMenuOpen(!menuOpen);
  // };
  // const toggleSearch = () => {
  //   setSearchOpen(!searchOpen);
  // };
  // const handleLocationChange = (e) => {
  //   setSelectedLocation(e.target.value);
  //   setSelectedSubLocation("");
  // };
  return (
    <header>
      <div className=" z-10 absolute y-offset ml-1 my-2 border-none top-0 flex items-center text-center  text-black mx-auto flex-col justify-between xl:pl-32 lg:pl-[132px] pl-10 xl:py-6 xl:z-10">
        <div ref={menuRef} className=" flex items-center text-center">
          
          <div className="bg-yellowColor mx-0 w-[440px] sm:w-[180px] md:w-[440px] xl:ml-12 xl:h-14 lg:h-14 md:h-14 inline-flex py-2.5 h-12 xl:w-[650px] relative rounded-2xl xl:pl-6 xl:py-2 xl:px-4" >
            <Link to="/">
              <span className=" text-black pl-11  xl:text-2xl md:text-lg xl:pr-16  text-md mx-2 pt-10 font-bold xl:mr-6">
                roadpartner.org
              </span>
            </Link>
            <div ref={searchRef} className="relative" >
              <button
                onClick={()=>{setSearchOpen(!searchOpen)}}
                className="bg-white  inline-flex items-center xl:px-8 xl:text-[15px] mx-1 pl-1 text-[9px] md:text-[12px] w-[160px] xl:w-[300px] md:w-[210px] xl:p-2 md:p-2 text-center text-gray-400 rounded-md "
              >
                {" "}
                Select Service | Select Location |
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 45 24 xl:0 0 40 24"
                  id="search"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                </svg>
              </button>
              {searchOpen && (
                <div className="absolute grid grid-cols-2 text-[13px] xl:text-[17px] right-0 mt-4 bg-blackColor border border-slate-400 rounded-md xl:py-2 h-40 gap-1 xl:px-10 shadow-2xl">
                  <select
                    className="border bg-blackColor text-gray-400 overflow-y-scroll flex rounded-md py-0 px-2 ml-1 mt-1 mr-0.5"
                    onChange={(e) => handleservice(e)}
                  >
                    <option value="">Services</option>
                    {service.map((getservice, index) => (
                      <option key={index} value={getservice.name}>
                        {getservice.name}
                      </option>
                    ))}
                  </select>
                  <select
                    className="border bg-blackColor text-gray-400 rounded-md py-1 px-2 ml-1 mt-1 mr-1"
                    onChange={(e) => handlecountry(e)}
                  >
                    <option value="">Countries</option>
                    {country.map((getcountry, index) => (
                      <option key={index} value={getcountry.name}>
                        {getcountry.name}
                      </option>
                    ))}
                  </select>
                  <select
                    className="border bg-blackColor text-gray-400 rounded-md py-1 px-2 ml-1 mt-1 mr-1"
                    onChange={(e) => handlestate(e)}
                  >
                    <option value="">State</option>
                    {state.map((getstate, index) => (
                      <option key={index} value={getstate.name}>
                        {getstate.name}
                      </option>
                    ))}
                  </select>
                  <select
                    className="border bg-blackColor text-gray-400 rounded-md py-1 px-2 ml-1 mt-1 mr-1"
                    onChange={(e) => handlecity(e)}
                  >
                    <option value="">City</option>
                    {city.map((getcity, index) => (
                      <option key={index} value={getcity.name}>
                        {getcity.name}
                      </option>
                    ))}
                  </select>
                  {/* <select
                    className="border bg-blackColor text-gray-400 rounded-md py-1 px-2 ml-1 mt-1 mr-1"
                    onChange={(e) => handleshop(e)}
                  >
                    <option value="">Shop</option>
                    {shop.map((getshop, index) => (
                      <option key={index} value={getshop.name}>
                        {getshop.name}
                      </option>
                    ))}
                  </select> */}

                  <button
                    onChange={(e) => handleShop(e)}
                    onClick={handleShow1}
                    className="border rounded-md py-0 px-2 w-20 xl:mx-16 ml-10 xl:w-28 bg-yellowColor mb-2 mt-1 text-center text-black  pr-50"
                  >
                    Search
                  </button>
                </div>
              )}

              <Modal
                show={show1}
                onHide={handleClose1}
                className=" xl:w-screen w-full xl:h-screen md:w-full  xl:mt-0 mt-14 xl:pr-[912px]"
              >
                <Modal.Header
                  className="bg-black xl:w-screen md:w-full"
                  closeButton
                >
                  <Modal.Title className="grid grid-cols-2 xl:gap-[920px] gap-48 text-center text-white xl:text-2xl text-lg">
                    Available Shops
                    <button
                      className="py-2 px-2 border-black-400 rounded-lg text-black bg-yellowColor font-bold"
                      onClick={handleClose1}
                    >
                         Close                     
                    </button>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-black xl:w-screen">
                  {shop &&
                    shop.map((shops) => (
                      <Services
                        id={shops._id}
                        image={shops.imageURL}
                        name={shops.name}
                        cityName={shops.cityName}
                        stateName={shops.stateName}
                        countryName={shops.countryName}
                        mobileNumber={shops.mobileNumber}
                      />
                    ))}
                </Modal.Body>
             
                <Modal.Footer className="bg-black xl:w-screen">
              
                </Modal.Footer>
            
              </Modal>
            </div>
            {/* {shop &&
              shop.map((shops) => (
                <Services
                  id={shops._id}
                  image={shops.imageURL}
                  name={shops.name}
                />
              ))} */}
          
            <button
              onClick={()=>{setMenuOpen(!menuOpen)}}
              className="xl:hidden xl:flex lg:hidden lg:flex md:hidden md:flex hover:scale-125 duration-1000  mr-4 ml-6 w-10 h-10 my-[-4px] text-black py-0.5 px-4 "
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
            {menuOpen && (
              <div className="xl:hidden xl:flex lg:hidden lg:flex md:hidden md:flex absolute right-0 mt-12  bg-[#ffffff14] h-[180px] w-48 backdrop-blur-lg z-10 rounded-md  shadow-2xl">
                <ul>
                  <li className="pr-6 my-2 mb-1">
                    <a href="/signup" className="text-white hover:underline">
                      Signup
                    </a>
                  </li>
                  <li className="pr-8 mb-1">
                    <a href="/login" className="text-white hover:underline">
                      Login
                    </a>
                  </li>
                  <li className="pr-4 mb-1">
                    <a
                      href="/categories"
                      className="text-white hover:underline"
                    >
                      Category
                    </a>
                  </li>
                  {/* <li className="pr-6 mb-1">
                    <a href="/services" className="text-white hover:underline">
                      Services
                    </a>
                  </li> */}
                  <li className="pr-10 mb-1">
                    <a href="/plans" className="text-white hover:underline">
                      Plans
                    </a>
                  </li>
                  <li className=" mb-1">
                    <a href="/contact" className="text-white hover:underline">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>

          
          
          {/*Login and Signup */}
          <div className="relative lg:inline-flex lg:space-x-4 md:inline-flex md:space-x-3 xl:inline-flex xl:space-x-5">
            <Link to="/login">
              <button className="hidden sm:w-[90px] xl:w-[110px] lg:visible md:visible lg:flex md:flex xl:visible xl:flex bg-yellowColor text-black py-3 md:px-4 xl:px-7 border-black-500 hover:scale-125 duration-1000 hover:border-transparent font-bold rounded-2xl md:ml-4 xl:ml-28">
                Log In
              </button>
            </Link>
            <Link to="/signup">
              <button className="hidden sm:w-[90px] xl:w-[110px] lg:visible md:visible lg:flex md:flex xl:visible xl:flex bg-yellowColor text-black py-3 md:px-3 lg:px-3 xl:px-6 border-black-500 hover:scale-125 duration-1000 hover:border-transparent font-bold rounded-2xl ">
                Sign Up
              </button>
            </Link>
            {/* <Link to="/plans">
              <button className="bg-yellowColor text-black py-3 px-6 font-bold border-black-500 hover:scale-125 duration-1000 hover:border-transparent rounded-2xl mr-4">
                Plans
              </button>
            </Link> */}
          </div>
          <div ref={menuRef} className="relative mx-6">
            <button
              onClick={()=>{setMenuOpen(!menuOpen)}}
              className="hidden xl:visible xl:flex lg:visible lg:flex md:visible md:flex  bg-yellowColor xl:h-[55px] hover:scale-125 duration-1000 text-black py-[18px] px-6 rounded-2xl"
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
            {menuOpen && (
              <div className="hidden xl:visible xl:flex lg:visible lg:flex md:visible md:flex absolute right-0 mt-4 bg-[#ffffff14] backdrop-blur-lg rounded-md py-2 px-10 text-black shadow-2xl">
                <ul>
                  <li className="pr-4 mb-1">
                    <a
                      href="/categories"
                      className="text-white hover:underline"
                    >
                      Category
                    </a>
                  </li>
                  {/* <li className="pr-6 mb-1">
                    <a href="/services" className="text-white hover:underline">
                      Services
                    </a>
                  </li> */}
                  <li className="pr-10 mb-1">
                    <a href="/plans" className="text-white hover:underline">
                      Plans
                    </a>
                  </li>
                  <li className="mb-1">
                    <a href="/contact" className="text-white hover:underline">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
