import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
function Plans() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);
  return (
    <>
      <div className="relative group overflow-hidden bg-blackColor flex-col fontFamily-quicksand xl:max-h-[1436px] text-black xl:w-full lg:w-full md:w-full w-[530px] h-full mx-auto py-4 sticky pb-2 justify-between items-center">
        <div className="flex items-center justify-center mt-24 mb-6">
          <div className="bg-yellowColor relative rounded-[20px] mb-3 w-auto  mx-auto px-[46px]  text-center py-auto xl:px-[24px]  xl:mt-2 mt-auto hover:opacity-100">
            <p className="py-2.5 xl:h-16 xl:w-56 px-auto mx-auto xl:pl-2  justify-items-center content-center text-center xl:text-3xl text-lg font-bold  text-black">
                                          Listing Plans                     
            </p>
                                 
          </div>
                         
        </div>
                               
        <div className="flex xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 grid grid-cols-1 xl:gap-[90px] xl:mx-auto md:mx-auto lg:mx-auto md:pl-4 gap-[40px] xl:py-6 py-auto mb-32 pb-2 xl:px-[175px] md:px-0 px-[102px] xl:w-[1350px] md:w-[780px] md:h-full ">
                                     
          <div className="border-yellowColor px-auto mx-auto border-2 rounded-[20px] w-full shadow-lg">
                                         
            <button className=" bg-yellowColor relative rounded-[10px]  xl:w-[252px] md:w-[192px] w-[260px] xl:h-[55px] h-[48px] xl:py-2 py-1.5 xl:mx-2 md:mx-4 mx-8 mt-2 mb-4 xl:text-2xl xl:text-center text-md font-bold text-black">
                                          B-SMART                       
            </button>
                                             
            <div>
              <p className="xl:py-1.5 py-1 xl:px-4 px-4 xl:text-md text-sm text-white">
                                Listing Card           
              </p>
                                                   
              <p className="xl:py-1.5 py-1 xl:px-4 px-4 xl:text-md text-sm text-white">
                                Reviews Section         
              </p>
                                                     
              <p className="xl:py-1.5 py-1 xl:px-4 px-4 xl:text-md text-sm text-white">
                                Images Section           
              </p>
                                                     
              <p className="xl:py-1.5 py-1 xl:px-4 px-4 xl:text-md text-sm text-white">
                                Half-yearly Reach Report             
              </p>
                                                       
              <p className="xl:py-1.5 py-1 xl:px-4 px-4 xl:text-md text-sm text-white">
                                                Quarterly Proﬁle Updation
                Suggestions                                          
              </p>
                                                     
              <p className="xl:py-1.5 py-1 xl:px-4 px-4 xl:text-md text-sm text-white text-opacity-25">
                                                Call/Contact Button             
                         
              </p>
                                                     
              <p className="xl:py-1.5 py-1 xl:px-4 px-4 xl:text-md text-sm text-white text-opacity-25">
                                                Service Rate estimation         
                                 
              </p>
                                                     
              <p className="xl:py-1.5 py-1 xl:px-4 px-4 xl:text-md text-sm text-white text-opacity-25">
                                                Calender Date/Slot Booking
                Option                       
              </p>
                                                 
              <p className="xl:py-1.5 py-1 xl:px-4 px-4 xl:text-md text-sm text-white text-opacity-25">
                                                Banner Sponsorship             
                      
              </p>
                                                     
              <p className="xl:py-1.5 py-1 xl:px-4 px-4 xl:text-md text-sm text-white text-opacity-25">
                                                Free Quarterly Profile Boosting 
              </p>
                                                                           
              <p className="xl:py-1.5 py-1 xl:px-4 px-4 xl:text-md text-sm text-white text-opacity-25">
                                                In-Card Payment Option (Token
                money for booking service)                       
              </p>
                                                 
              <div className="xl:pl-4 md:pl-0 pl-[34px] md:mb-0 md:mt-14 mb-2 mt-8">
                                                         
                <button
                  className="md:w-[170px] xl:w-[170px] w-[180px] xl:mt-4 ml-8 h-[40px] bg-yellowColor rounded-[10px]  text-black font-bold"
                  onClick={handleShow1}
                >
                  Choose and Pay                         
                </button>
                                             
              </div>
                                         
            </div>
                                   
            <Modal
              show={show1}
              onHide={handleClose1}
              className="xl:w-[700px]  w-full md:w-full xl:mt-0 mt-14 xl:mx-64"
            >
                                         
              <Modal.Header className="bg-black" closeButton>
                                             
                <Modal.Title className="text-center text-white xl:text-2xl text-lg">
                                                      B-SMART                   
                       
                </Modal.Title>
                                           
              </Modal.Header>
                                       
              <Modal.Body className="bg-black">
                                                         
                <div className=" border text-white text-sm boreder-yellowColor rounded-xl">
                                                 
                  <p className="py-1.5 px-4 ">Listing Card</p>                 
                                           
                  <p className="py-1.5 px-4 ">Reviews Section</p>             
                              <p className="py-1.5 px-4 ">Images Section</p>   
                                    
                  <p className="py-1.5 px-4 ">Half-yearly Reach Report</p>      
                                       
                  <p className="py-1.5 px-4 ">
                            Quarterly Proﬁle Updation Suggestions              
                                                 
                  </p>
                                                             
                  <p className="py-1.5 px-4 ">Call/Contact Button</p>         
                                    
                  <p className="py-1.5 px-4 ">Service Rate estimation</p>      
                                                 
                </div>
                                   
              </Modal.Body>
                                           
              <Modal.Footer className="bg-black">
                                     
                <button
                  className="py-2 px-2 border-black-400 rounded-lg bg-yellowColor font-bold"
                  onClick={handleClose1}
                >
                     Close                     
                </button>
                       
                <button
                  className="py-2 px-2 border-black-400 rounded-lg text-black font-bold bg-primaryColor"
                  onClick={handleClose1}
                >
                      Pay Now                   
                </button>
                                 
              </Modal.Footer>
                                     
            </Modal>
                         
          </div>
                                 
          <div className="border-yellowColor border-2 rounded-[20px] shadow-lg ">
                                           
            <button className=" bg-yellowColor relative rounded-[10px]  xl:w-[252px] md:w-[192px] w-[260px] xl:h-[55px] h-[48px] xl:py-2 py-1.5 xl:mx-2 md:mx-4 mx-8 mt-2 mb-4 xl:text-2xl xl:text-center text-md font-bold text-black">
                                          B-EFFICIENT         
            </button>
                                         
            <div>
              <p className="xl:py-1.5 py-1 xl:px-4 px-4 xl:text-md text-sm text-white">
                                Listing Card       
              </p>
                                             
              <p className="xl:py-1.5 py-1 xl:px-4 px-4 xl:text-md text-sm text-white">
                                Reviews Section         
              </p>
                                                 
              <p className="xl:py-1.5 py-1 xl:px-4 px-4 xl:text-md text-sm text-white">
                                Images Section     
              </p>
                                                 
              <p className="xl:py-1.5 py-1 xl:px-4 px-4 xl:text-md text-sm text-white">
                                Half-yearly Reach Report     
              </p>
              <p className="xl:py-1.5 py-1 xl:px-4 px-4 xl:text-md text-sm text-white">
                                                Quarterly Proﬁle Updation
                Suggestions                              
              </p>
                                               
              <p className="xl:py-1.5 py-1 xl:px-4 px-4 xl:text-md text-sm text-white">
                                Call/Contact Button     
              </p>
                                                   
              <p className="xl:py-1.5 py-1 xl:px-4 px-4 xl:text-md text-sm text-white ">
                                Service Rate estimation       
              </p>
                                             
              <p className="xl:py-1.5 py-1 xl:px-4 px-4 xl:text-md text-sm text-white text-opacity-25">
                                                Calender Date/Slot Booking
                Option               
              </p>
                                                     
              <p className="xl:py-1.5 py-1 xl:px-4 px-4 xl:text-md text-sm text-white text-opacity-25">
                                                Banner Sponsorship             
                     
              </p>
                                             
              <p className="xl:py-1.5 py-1 xl:px-4 px-4 xl:text-md text-sm text-white text-opacity-25">
                                                Free Quarterly Profile Boosting 
                                   
              </p>
                                               
              <p className="xl:py-1.5 py-1 xl:px-4 px-4 xl:text-md text-sm text-white text-opacity-25">
                                                In-Card Payment Option (Token
                money for booking service)                       
              </p>
                                       
              <div className="md:pl-0 xl:pl-4 pl-[34px] md:mt-9 mt-8">
                                                     
                <button
                  className="md:w-[170px] xl:w-[170px] w-[170px] md:mt-5  pt-2 xl:mt-9 mb-2  ml-8 h-[40px] bg-yellowColor rounded-[10px]  text-black font-bold"
                  onClick={handleShow2}
                >
                                                      Choose and Pay           
                     
                </button>
                                           
              </div>
                               
            </div>
                                 
            <Modal
              show={show2}
              onHide={handleClose2}
              className="xl:w-[700px] w-full  md:w-full  xl:mt-0 mt-14 xl:mx-64"
            >
                                                 
              <Modal.Header className="bg-black" closeButton>
                                                       
                <Modal.Title className="text-center text-white xl:text-2xl text-lg">
                                                      B-EFFICIENT       
                </Modal.Title>
                                                     
              </Modal.Header>
                                               
              <Modal.Body className="bg-black">
                                                     
                <div className=" border text-white boreder-yellowColor rounded-xl">
                                             
                  <p className="py-1.5 px-4 ">Listing Card</p>                 
                                         
                  <p className="py-1.5 px-4 ">Reviews Section</p>             
                                                      
                  <p className="py-1.5 px-4 ">Banner Sponsorship</p>            
                                       
                  <p className="py-1.5 px-4">Free Quarterly Profile Boosting</p>
                                                                 
                  <p className="py-1.5 px-4 ">
                     In-Card Payment Option (Token money for booking service)   
                                           
                  </p>
                                                           
                </div>
                                               
              </Modal.Body>
                                             
              <Modal.Footer className="bg-black">
                                           
                <button
                  className="py-2 px-2 border-black-400 rounded-lg bg-yellowColor font-bold"
                  onClick={handleClose2}
                >
                                                      Close                     
                       
                </button>
                              
                <button
                  className="py-2 px-2 border-black-400 rounded-lg text-black font-bold bg-primaryColor"
                  onClick={handleClose2}
                >
                                                      Pay Now                   
                       
                </button>
                                                                
              </Modal.Footer>
                                           
            </Modal>
                                   
          </div>
                                 
          <div className="border-yellowColor border-2 rounded-[20px] shadow-lg ">
                                       
            <button className="bg-yellowColor relative rounded-[10px] xl:w-[252px] md:w-[192px] w-[260px] xl:h-[55px] h-[48px] xl:text-center xl:py-2 py-1.5 xl:mx-2 md:mx-4 mx-8 xl:pl-0 lg:pl-0 md:pl-0 mt-2 mb-4 xl:text-2xl text-md font-bold text-black">
                                          B-PRO           
            </button>
                                     
            <div>
                                                 
              <p className="xl:py-1.5 py-1 xl:px-4 px-4 xl:text-md text-sm text-white">
                                Listing Card   
              </p>
                                                 
              <p className="xl:py-1.5 py-1 xl:px-4 px-4 xl:text-md text-sm text-white">
                                Reviews Section       
              </p>
                                                 
              <p className="xl:py-1.5 py-1 xl:px-4 px-4 xl:text-md text-sm text-white">
                                Images Section     
              </p>
                                               
              <p className="xl:py-1.5 py-1 xl:px-4 px-4 xl:text-md text-sm text-white">
                                Half-yearly Reach Report 
              </p>
                                                 
              <p className="xl:py-1.5 py-1 xl:px-4 px-4 xl:text-md text-sm text-white">
                                                Quarterly Proﬁle Updation
                Suggestions                                
              </p>
                                             
              <p className="xl:py-1.5 py-1 xl:px-4 px-4 xl:text-md text-sm text-white">
                                Call/Contact Button       
              </p>
                                                 
              <p className="xl:py-1.5 py-1 xl:px-4 px-4 xl:text-md text-sm text-white">
                                Service Rate estimation 
              </p>
                                                     
              <p className="xl:py-1.5 py-1 xl:px-4 px-4 xl:text-md text-sm text-white">
                      Calender Date/Slot Booking Option                   
              </p>
                                                 
              <p className="xl:py-1.5 py-1 xl:px-4 px-4 xl:text-md text-sm text-white">
                                                   
                <span className="star text-yellowColor mr-2">&#9733;</span>   
                                           Banner Sponsorship                   
              </p>
                                                     
              <p className="xl:py-1.5 py-1 xl:px-4 px-4 xl:text-md text-sm text-white">
                                                           
                <span className="star text-yellowColor mr-2">&#9733;</span>   
                                           Free Quarterly Profile Boosting     
                           
              </p>
                                             
              <p className="py-1 xl:px-4 px-4 xl:text-md text-sm text-white">
                                                     
                <span className="star text-yellowColor mr-2">&#9733;</span>    
                                          In-Card Payment Option (Token money
                for booking service)             
              </p>
                                                 
              <div className="xl:pl-2 md:pl-0 pl-[34px] md:mb-0 md:mt-14 mb-2 mt-8">
                                                           
                <button
                  className="w-[170px]  xl:mt-5  ml-10 h-[40px] bg-yellowColor rounded-[10px]  text-black font-bold"
                  onClick={handleShow3}
                >
                                                      Choose and Pay           
                                 
                </button>
                                                       
              </div>
                                   
            </div>
                                       
            <Modal
              show={show3}
              onHide={handleClose3}
              className="xl:w-[700px] w-full  md:w-full xl:mt-0 mt-14 xl:mx-64"
            >
              <Modal.Header className="bg-black" closeButton>
                                                         
                <Modal.Title className="text-center text-white xl:text-2xl text-lg">
                                                      B-PRO                     
                       
                </Modal.Title>
                                               
              </Modal.Header>
                                               
              <Modal.Body className="bg-black">
                                                 
                <div className=" border text-white boreder-yellowColor rounded-xl">
                                                                               
                            <p className="py-1.5 px-4 ">Call/Contact Button</p> 
                                          
                  <p className="py-1.5 px-4 ">Service Rate estimation</p>      
                                                     
                  <p className="py-1.5 px-4 ">
                                  Calender Date/Slot Booking Option            
                                                           
                  </p>
                                                           
                  <p className="py-1.5 px-4 ">Banner Sponsorship</p>            
                                               
                  <p className="py-1.5 px-4">Free Quarterly Profile Boosting</p>
                                                           
                  <p className="py-1.5 px-4 ">
                                                            In-Card Payment
                    Option (Token money for booking service)                   
                     
                  </p>
                                                         
                </div>
                                                         
              </Modal.Body>
                                                   
              <Modal.Footer className="bg-black">
                                                       
                <button
                  className="py-2 px-2 border-black-400 rounded-lg bg-yellowColor font-bold"
                  onClick={handleClose3}
                >
                                                      Close                     
                </button>
                                                     
                <button
                  className="py-2 px-2 border-black-400 rounded-lg text-black font-bold bg-primaryColor"
                  onClick={handleClose3}
                >
                                                      Pay Now                   
                       
                </button>
                                                 
              </Modal.Footer>
                                           
            </Modal>
                                     
          </div>
                                 
        </div>
                           
      </div>
                   
    </>
  );
}
export default Plans;
