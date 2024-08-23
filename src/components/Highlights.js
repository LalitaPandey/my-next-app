import Image from "next/image";
import heighlights from "../../src/app/images/heighlights.png";
import carimg from "../../src/app/images/carimg.png";
import sidearrow from "../../src/app/images/sidearrow.png";
import Seearrow from "../../src/app/images/Seearrow.png";
export default function Heighlights() {
  return (
    <div>
      <div className=" flex HighLights  justify-between m-24 ">
        <h1 className=" text-[50px] font-bold tracking-wider fontMainheading">HEIGHLIGHTS</h1>
        <button className=" flex text-[#A1C4FD] text-2xl gap-4 p-6 normal-case">
          see All
          <Image
            src={Seearrow}
            alt="Vinayan Img"
            className="inline-block text-white mt-1"
            width={40}
            height={80}
          />
        </button>
      </div>
      <div className=" heighlightsimg flex w-full p-6">
        <div className=" heightlightssec w-2/3  mx-auto relative group p-6">
          {/* Large Image with Hover Effect */}
          <div className="relative overflow-hidden">
            <Image
              src={heighlights}
              alt="Large Image"
              width={500}
              height={300}
              className="w-full h-auto transition-all duration-300"
            />
            <div className=" absolute inset-0 flex items-center justify-center p-12">
              <div className=" heighlightinside w-full h-full font-staatliches hidden group-hover:block border-2 border-[#A8EB12] rounded-3xl p-12 relative">
                <div className="flex justify-between items-center mb-4">
                  <h1 className="hightlights-Head">UTTAR PRADESH POLICE</h1>

                  <Image
                    src={sidearrow}
                    alt="Image Description"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="date">06-5-2024</div>
                <div className="  heighlightinside absolute inset-0 bg-black bg-opacity-10 rounded-3xl z-0 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="heightlightssec w-1/3 flex flex-col  gap-6  p-6">
          {/* First first Div */}
          <div className="w-full  relative group">
          <div className="relative overflow-hidden parent-container">
  <Image
    src={heighlights}
    alt="Large Image"
    width={500}
    height={200}
    className="w-full h-auto transition-all duration-300"
  />
  <div className="heighlighthover absolute inset-0 flex items-center justify-center p-12">
    <div className="heighlightinside w-full h-full font-staatliches hidden group-hover:block border-2 border-[#A8EB12] rounded-3xl p-12 relative">
      <div className="flex justify-between items-center mb-4">
        <h1 className="hightlights-Headtwo">UTTAR PRADESH POLICE</h1>
        <Image
          src={sidearrow}
          alt="Image Description"
          width={32}
          height={32}
        />
      </div>
      <div className="text-white">06-5-2024</div>
      <div className="heighlightinside absolute inset-0 bg-black bg-opacity-10 rounded-3xl z-0 pointer-events-none"></div>
    </div>
  </div>
</div>

          </div>
          {/* Second third Div */}
          <div className="w-full  relative group bg">
          <div className=" overflow-hidden ">
            <Image
              src={heighlights}
              alt="Large Image"
              width={500}
              height={200}
              className="w-full h-auto transition-all duration-300"
            />
            <div className=" heighlighthover absolute inset-0 flex items-center justify-center p-12">
              <div className="  heighlightinside w-full h-full font-staatliches hidden group-hover:block border-2 border-[#A8EB12] rounded-3xl p-12 relative">
                <div className="flex justify-between items-center mb-4">
                  <h1 className="hightlights-Headtwo">UTTAR PRADESH POLICE</h1>

                  <Image
                    src={sidearrow}
                    alt="Image Description"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="text-white">06-5-2024</div>
                <div className="  heighlightinside absolute inset-0 bg-black bg-opacity-10 rounded-3xl z-0 pointer-events-none"></div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
